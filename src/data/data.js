import hero from '../assets/images/hero.png'
import project1 from '../assets/images/Portfolio-projects-1.png'
import project2 from '../assets/images/Portfolio-projects-2.png'
import project3 from '../assets/images/Portfolio-projects-3.png'

const data = {
  eng: {
    navbar: {
      darkMode: "DARK MODE",
      skills: "Skills",
      projects: "Projects",
      hireMe: "Hire me"
    },

    heroSection: {
      name: 'Almila Su',
      title: 'Creative thinker Minimalism lover',
      description:
        "Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      profileImage: hero,
      hireBtn: 'Hire me',
      github: 'Github',
      linkedin: 'Linkedin'
    },

    skillsData: {
      skillsTitle: "Skills",
      skills: [
        {
          title: 'JavaScript',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'React.Js',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Node.Js',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    },

    profileData: {
      profileTitle: 'Profile',
      profile: [{
        birthDate: '24.03.1996',
        city: 'Ankara',
        education: 'Hacettepe University Biology Lisans, 2016',
        role: 'Frontend, UI'
      }],
      aboutTitle: "About Me",
      about: [{
        description1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        description2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      }]
    },

    projectsData: {
      projectsTitle: "Projects",
      viewSiteText: "View Site", 
      githubText: "Github",
      projects: [
        {
          title: "Workintech",
          image: project1,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "https://github.com/beyzagursoy/Pizza-React-Project",
          viewSite: "https://pizza-react-project-q33s.vercel.app/",
        },
        {
          title: "Random Jokes",
          image: project2,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "https://github.com/beyzagursoy/fsweb-s10g2-redux-filmler-solution",
          viewSite: "https://fsweb-s10g2-redux-filmler-solution-olive-five.vercel.app/",
        },
        {
          title: "Journey",
          image: project3,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "https://github.com/beyzagursoy/html-css-pizza",
          viewSite: "https://html-css-pizza.vercel.app/",
        },
      ],
    },

    contactData: {
      title: "Let’s work together on your next product.",
      email: "almilasucode@gmail.com",
      blog: "Personal Blog",
      github: "https://github.com/beyzagursoy",
      linkedin: "https://www.linkedin.com/in/beyzagursoy/"
    }

  },

  tr: {
    navbar: {
      darkMode: "KOYU MOD",
      skills: "Yetenekler",
      projects: "Projeler",
      hireMe: "Beni işe al"
    },
    heroSection: {
      name: 'Almila Su',
      title: 'Yaratıcı düşünür Minimalizm sever',
      description:
        "Merhaba, ben Almila. Full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir frontend ürünleri oluşturacak bir geliştirici arıyorsanız; tanışalım.",
      profileImage: hero,
      hireBtn: 'Beni işe al',
      github: 'Github',
      linkedin: 'Linkedin'
    },

    skillsData: {
      skillsTitle: "Yetenekler",
      skills: [
        {
          title: 'JavaScript',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'React.Js',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Node.Js',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    },

    profileData: {
      profileTitle: 'Profil',
      profile: [{
        birthDate: '24.03.1996',
        city: 'Ankara',
        education: 'Hacettepe Üniversitesi Biyoloji Lisans, 2016',
        role: 'Frontend, UI'
      }],
      aboutTitle: "Hakkımda",
      about: [{
        description1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        description2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      }]
    },

    projectsData: {
      projectsTitle: "Projeler",
      viewSiteText: "Siteyi Görüntüle", 
      githubText: "Github",
      projects: [
        {
          title: "Workintech",
          image: project1,
          description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "https://github.com/beyzagursoy/Pizza-React-Project",
          viewSite: "https://pizza-react-project-q33s.vercel.app/",
        },
        {
          title: "Random Jokes",
          image: project2,
          description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "https://github.com/beyzagursoy/fsweb-s10g2-redux-filmler-solution",
          viewSite: "https://fsweb-s10g2-redux-filmler-solution-olive-five.vercel.app/",
        },
        {
          title: "Journey",
          image: project3,
          description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "https://github.com/beyzagursoy/html-css-pizza",
          viewSite: "https://html-css-pizza.vercel.app/",
        },
      ],
    },

    contactData: {
      title: "Bir sonraki projenizde birlikte çalışalım.",
      email: "almilasucode@gmail.com",
      blog: "Kişisel Blog",
      github: "https://github.com/beyzagursoy",
      linkedin: "https://www.linkedin.com/in/beyzagursoy"
    }
  }
}

export default data