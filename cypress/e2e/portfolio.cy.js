/* eslint-disable no-undef */

describe("Portfolio App Tests", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Language toggle works", () => {

    cy.contains("Skills").should("exist");

    cy.contains("TÜRKÇE").click();

    cy.contains("Yetenekler").should("exist");

  });


  it("Dark mode toggle works", () => {

    cy.get('input[type="checkbox"]').click({ force: true });

    cy.get("html").should("have.class", "dark");

  });


  it("Github and Linkedin links exist", () => {

    cy.contains("Github")
      .should("have.attr", "href")
      .and("include", "github");

    cy.contains("Linkedin")
      .should("have.attr", "href")
      .and("include", "linkedin");

  });


  it("Contact axios request works", () => {

  cy.intercept("POST", "**/posts").as("contactRequest");

  cy.contains("almilasucode@gmail.com")
    .invoke("removeAttr", "href") 
    .click();

  cy.wait("@contactRequest")
    .its("response.statusCode")
    .should("eq", 201);

});

});