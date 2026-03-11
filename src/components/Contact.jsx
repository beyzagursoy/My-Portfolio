import React from 'react';
import data from '../data/data';

function Contact() {
  const lang = 'eng'; 
  const { contactData } = data[lang];

  return (
    <footer className="py-20">
      <div className="px-31.25 w-full">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[48px] font-bold leading-[1.1] text-[#1F2937] max-w-112.5">
            {contactData.title}
          </h2>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <span className="text-xl">👉</span>
            <a 
              href={`mailto:${contactData.email}`}
              className="text-[#AF0C48] font-medium text-xl underline decoration-1 underline-offset-[6px]"
            >
              {contactData.email}
            </a>
          </div>

          <div className="flex gap-10 font-medium text-lg">
            <a href="#" className="text-[#0A0A14] hover:opacity-70 transition-opacity">
              {contactData.blog}
            </a>
            <a href="#" className="text-[#00AB6B] hover:opacity-70 transition-opacity">
              {contactData.github}
            </a>
            <a href="#" className="text-[#0077B5] hover:opacity-70 transition-opacity">
              {contactData.linkedin}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;