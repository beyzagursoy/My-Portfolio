import React, { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import data from '../data/data';

function Profile() {
  const { lang } = useContext(SiteContext);
  const { profileData } = data[lang];
  const profileDetails = profileData.profile[0];
  const aboutDetails = profileData.about[0];

  return (
    <section className="px-31.25 py-12 dark:bg-dark">
      <h2 className="text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10">{profileData.profileTitle}</h2>
      <div className="flex gap-20">
        <div className="flex-1">
          <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#BAB2E7] mb-8">{profileData.profileTitle}</h3>
          <div className="flex flex-col gap-4 text-lg">
            {[
              { label: lang === 'eng' ? 'Birth Date' : 'Doğum Tarihi', value: profileDetails.birthDate },
              { label: lang === 'eng' ? 'City' : 'İkamet Şehri', value: profileDetails.city },
              { label: lang === 'eng' ? 'Education Status' : 'Eğitim Durumu', value: profileDetails.education },
              { label: lang === 'eng' ? 'Preferred Role' : 'Tercih Ettiği Rol', value: profileDetails.role }
            ].map((item, idx) => (
              <div key={idx} className="flex">
                <span className="font-bold text-[#1F2937] dark:text-white w-48 shrink-0">{item.label}</span>
                <span className="text-[#1F2937] dark:text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#BAB2E7] mb-8">{profileData.aboutTitle}</h3>
          <div className="text-[#6B7280] dark:text-white text-lg space-y-6 leading-relaxed">
            <p>{aboutDetails.description1}</p>
            <p>{aboutDetails.description2}</p>
          </div>
        </div>
      </div>
      <hr className="mt-16 border-t border-[#BAB2E7] dark:border-[#3A3A3A]" />
    </section>
  );
}
export default Profile;