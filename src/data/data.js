import hero from '../assets/images/hero.jpeg'
import project1 from '../assets/images/Teknolojik-Yemekler.png'
import project2 from '../assets/images/E-commerce.png'
import project3 from '../assets/images/Orion.png'

const data = {
  eng: {
    navbar: {
      darkMode: "DARK MODE",
      skills: "Skills",
      projects: "Projects",
      hireMe: "Hire me"
    },

    heroSection: {
      name: 'Beyza Gürsoy',
      title: 'Creative thinker Minimalism lover',
      description:
        "Hi, I’m Beyza. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable full-stack products with great user experiences. Let’s shake hands with me.",
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
          description: 'Strong understanding of ES6+, asynchronous programming, and modern JavaScript concepts. Experienced in building dynamic and interactive web applications.'
        },
        {
          title: 'React.Js',
          description: 'Experienced in building scalable and reusable component-based applications using React, Hooks, and state management. Focused on clean UI and performance.'
        },
        {
          title: 'Java',
          description: 'Familiar with object-oriented programming principles and basic data structures. Able to develop simple backend logic and continuously improving my Java skills. I also pay attention to writing clean and maintainable code.'
        },
        {
          title: 'Cypress',
          description: 'Used Cypress for end-to-end testing of web applications. Experienced in writing test scenarios, automating user flows, and ensuring application reliability.'
        }
      ]
    },

    profileData: {
      profileTitle: 'Profile',
      profile: [{
        birthDate: '22.07.2001',
        city: 'Burdur',
        education: 'Süleyman Demirel University Computer Engineer Lisans, 2024',
        role: 'Software Developer'
      }],
      aboutTitle: "About Me",
      about: [{
        description1: "Hi, I'm Beyza Gürsoy, a Computer Engineering graduate from Süleyman Demirel University, with a strong interest in full-stack development and machine learning.",
        description2: "On the web development side, I build modern, user-focused applications using technologies like React, Java, Cypress, and MongoDB. I also care deeply about user experience (UX) and interface design (UI), aiming to create not only functional but also intuitive and visually appealing products.",
        description3: "In the field of machine learning, I have developed data-driven projects using PyTorch, LSTM, and GRU models. I enjoy analyzing data and turning it into meaningful insights to solve real-world problems.",
        description4: "As a self-motivated and continuous learner, I am eager to contribute to innovative projects and grow as a developer."
      }]
    },

    projectsData: {
      projectsTitle: "Projects",
      viewSiteText: "View Site",
      githubText: "Github",
      projects: [
        {
          title: "Teknolojik Yemekler",
          image: project1,
          description: "A pizza ordering application built with React. Users can browse products, add items to the cart, and manage the ordering process. State management and API operations are handled using Redux and Axios.",
          tags: ["react", "react-hooks", "axios", "javascript", "css", "frontend"],
          github: "https://github.com/beyzagursoy/Pizza-React-Project",
          viewSite: "https://pizza-react-project-q33s.vercel.app/",
        },
        {
          title: "E-commerce",
          image: project2,
          description: "A modern e-commerce application where users can browse products, view product details, and add items to the cart. Built with React with a focus on user experience and performance.",
          tags: ["react", "redux", "javascript", "axios", "tailwindcss", "frontend"],
          github: "https://github.com/beyzagursoy/E-commerce-project",
          viewSite: "https://e-commerce-project-nine-lyart.vercel.app/",
        },
        {
          title: "Orion",
          image: project3,
          description: "A Spotify-inspired music application built with React. Users can browse music, create albums, and manage content.",
          tags: ["react", "tailwindcss", "ui", "frontend"],
          github: "https://github.com/beyzagursoy/Orion",
          viewSite: "https://orion-musicapp.netlify.app/",
        },
      ],
    },

    contactData: {
      title: "Let’s work together on your next product.",
      email: "beyzagursoyceng@gmail.com",
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
      name: 'Beyza Gürsoy',
      title: 'Yaratıcı düşünür Minimalizm sever',
      description:
        "Merhaba, ben Beyza. Full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir full-stack ürünleri oluşturacak bir geliştirici arıyorsanız; tanışalım.",
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
          description: 'ES6+ özellikleri, asenkron programlama ve modern JavaScript kavramlarına hakimim. Dinamik ve etkileşimli web uygulamaları geliştirme deneyimine sahibim.'
        },
        {
          title: 'React.Js',
          description: 'React, Hooks ve state yönetimi kullanarak ölçeklenebilir ve yeniden kullanılabilir bileşen tabanlı uygulamalar geliştiriyorum. Temiz arayüz ve performansa odaklanırım.'
        },
        {
          title: 'Java',
          description: 'Nesne yönelimli programlama prensiplerine aşinayım ve temel veri yapıları konusunda bilgi sahibiyim. Basit backend mantıkları geliştirebiliyor ve Java becerilerimi geliştirmeye devam ediyorum. Sürdürülebilir ve düzenli kod yazmaya önem veririm.'
        },
        {
          title: 'Cypress',
          description: 'Web uygulamalarında uçtan uca (end-to-end) testler yazmak için Cypress kullandım. Test senaryoları oluşturma, kullanıcı akışlarını otomatikleştirme ve uygulama güvenilirliğini sağlama konusunda deneyimliyim.'
        }
      ]
    },

    profileData: {
      profileTitle: 'Profil',
      profile: [{
        birthDate: '22.07.2001',
        city: 'Burdur',
        education: 'Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği Lisans, 2024',
        role: 'Software Developer'
      }],
      aboutTitle: "Hakkımda",
      about: [{
        description1: "Merhaba, ben Beyza Gürsoy. Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği mezunuyum ve full-stack geliştirme ile makine öğrenmesi alanlarında kendimi geliştirmekteyim.",
        description2: "Web geliştirme tarafında React, Java, Cypress ve MongoDB teknolojileriyle modern ve kullanıcı odaklı uygulamalar geliştiriyorum. Aynı zamanda kullanıcı deneyimi (UX) ve arayüz tasarımına (UI) önem vererek, sadece çalışan değil aynı zamanda etkili ve estetik ürünler ortaya çıkarmayı hedefliyorum.",
        description3: "Makine öğrenmesi alanında ise PyTorch, LSTM ve GRU modelleri ile veri odaklı projeler geliştirdim. Analitik düşünme yeteneğim sayesinde verileri anlamlandırarak gerçek dünya problemlerine çözümler üretmeyi seviyorum.",
        description4: "Kendini sürekli geliştiren, öğrenmeye açık ve takım çalışmasına yatkın bir geliştirici olarak, yenilikçi projelerde yer almayı ve değer katmayı hedefliyorum."
      }]
    },

    projectsData: {
      projectsTitle: "Projeler",
      viewSiteText: "Siteyi Görüntüle",
      githubText: "Github",
      projects: [
        {
          title: "Teknolojik Yemekler",
          image: project1,
          description: "React kullanılarak geliştirilmiş bir pizza sipariş uygulamasıdır. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve sipariş sürecini yönetebilir. State yönetimi ve API işlemleri Redux ve Axios ile gerçekleştirilmiştir.",
          tags: ["react", "react-hooks", "axios", "javascript", "css", "frontend"],
          github: "https://github.com/beyzagursoy/Pizza-React-Project",
          viewSite: "https://pizza-react-project-q33s.vercel.app/",
        },
        {
          title: "E-commerce",
          image: project2,
          description: "Modern bir e-ticaret uygulamasıdır. Kullanıcılar ürünleri listeleyebilir, detaylarını inceleyebilir ve sepete ekleyebilir. React ile geliştirilen projede kullanıcı deneyimi ve performans ön planda tutulmuştur.",
          tags: ["react", "javascript", "axios", "tailwindcss", "frontend"],
          github: "https://github.com/beyzagursoy/E-commerce-project",
          viewSite: "https://e-commerce-project-nine-lyart.vercel.app/",
        },
        {
          title: "Orion",
          image: project3,
          description: "React kullanılarak geliştirilmiş Spotify benzeri bir müzik uygulamasıdır. Kullanıcılar müzikleri listeleyebilir, albümler oluşturabilir ve içerikleri yönetebilir.",
          tags: ["react", "tailwindcss", "ui", "frontend"],
          github: "https://github.com/beyzagursoy/Orion",
          viewSite: "https://orion-musicapp.netlify.app/",
        },
      ],
    },

    contactData: {
      title: "Bir sonraki projenizde birlikte çalışalım.",
      email: "beyzagursoyceng@gmail.com",
      blog: "Kişisel Blog",
      github: "https://github.com/beyzagursoy",
      linkedin: "https://www.linkedin.com/in/beyzagursoy/"
    }
  }
}

export default data