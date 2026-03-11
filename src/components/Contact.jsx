import React, { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import data from "../data/data";
import axios from "axios";

function Contact() {
  const { lang } = useContext(SiteContext);
  const { contactData } = data[lang];

  const handleContactClick = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      email: contactData.email,
      title: "Portfolio Contact",
      body: "Contact request from portfolio site",
      userId: 1
    })
      .then(res => {
        console.log("API Success:", res.data); 
      })
      .catch(err => console.error("API Error:", err));
  };
  return (
    <footer className="py-20 bg-[#F9F9F9] dark:bg-dark px-6 md:px-20 lg:px-[125px]">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F2937] dark:text-[#AEBCCF] mb-16 text-center md:text-left max-w-2xl">
          Let's work together on your next product.
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-10">

          <div className="flex items-center gap-3">

            <span className="text-2xl">👉</span>

            <a
              href={`mailto:${contactData.email}`}
              onClick={handleContactClick}
              className="text-[#AF0C48] dark:text-[#BAB2E7] font-medium text-xl underline underline-offset-8 decoration-2"
            >
              {contactData.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-10 font-medium text-lg justify-center">

            <a href="#" className="text-[#0A0A14] dark:text-[#E1E1FF]">
              Personal Blog
            </a>

            <a href={contactData.github} className="text-[#00AB6B]">
              Github
            </a>

            <a href={contactData.linkedin} className="text-[#0077B5]">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;