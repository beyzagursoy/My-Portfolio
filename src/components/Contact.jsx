import React, { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import data from '../data/data';
import axios from 'axios';

function Contact() {
  const { lang } = useContext(SiteContext);
  const { contactData } = data[lang];

  const handleContactClick = () => {
    axios.post('https://reqres.in/api/workintech', {
      email: contactData.email,
      sentAt: new Date().toISOString()
    })
    .then(res => console.log("API Success:", res.data))
    .catch(err => console.error("API Error:", err));
  };

  return (
    <footer className="py-20 dark:bg-dark">
      <div className="px-31.25 w-full">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[48px] font-bold leading-[1.1] text-[#1F2937] dark:text-[#AEBCCF] max-w-112.5">
            {contactData.title}
          </h2>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <span className="text-xl">👉</span>
            <a 
              href={`mailto:${contactData.email}`}
              onClick={handleContactClick}
              className="text-[#AF0C48] dark:text-[#BAB2E7] font-medium text-xl underline underline-offset-[6px]"
            >
              {contactData.email}
            </a>
          </div>
          <div className="flex gap-10 font-medium text-lg">
            <a href="#" className="text-[#0A0A14] dark:text-[#E1E1FF] hover:opacity-70">{contactData.blog}</a>
            <a href="#" className="text-[#00AB6B] hover:opacity-70">Github</a>
            <a href="#" className="text-[#0077B5] hover:opacity-70">Linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Contact;