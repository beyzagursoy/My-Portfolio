import React from 'react';
import data from '../data/data';

function Profile() {
  const lang = 'eng'; 
  const { profileData } = data[lang];
  const profileDetails = profileData.profile[0];
  const aboutDetails = profileData.about[0];

  return (
    <section className="px-31.25 py-12">
      <h2 className="text-5xl font-bold text-[#1F2937] mb-10">
        {profileData.profileTitle}
      </h2>
      
      <div className="flex gap-20">
        <div className="flex-1">
          <h3 className="text-3xl font-medium text-[#4338CA] mb-8">
            {profileData.profileTitle}
          </h3>
          
          <div className="flex flex-col gap-4 text-lg">
            <div className="flex">
              <span className="font-bold text-[#1F2937] w-48 shrink-0">
                {lang === 'eng' ? 'Birth Date' : 'Doğum Tarihi'}
              </span>
              <span className="text-[#1F2937]">{profileDetails.birthDate}</span>
            </div>

            <div className="flex">
              <span className="font-bold text-[#1F2937] w-48 shrink-0">
                {lang === 'eng' ? 'City' : 'İkamet Şehri'}
              </span>
              <span className="text-[#1F2937]">{profileDetails.city}</span>
            </div>

            <div className="flex">
              <span className="font-bold text-[#1F2937] w-48 shrink-0">
                {lang === 'eng' ? 'Education Status' : 'Eğitim Durumu'}
              </span>
              <span className="text-[#1F2937]">{profileDetails.education}</span>
            </div>

            <div className="flex">
              <span className="font-bold text-[#1F2937] w-48 shrink-0">
                {lang === 'eng' ? 'Preferred Role' : 'Tercih Ettiği Rol'}
              </span>
              <span className="text-[#1F2937]">{profileDetails.role}</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-medium text-[#4338CA] mb-8">
            {profileData.aboutTitle}
          </h3>
          <div className="text-[#6B7280] text-lg space-y-6 leading-relaxed">
            <p>{aboutDetails.description1}</p>
            <p>{aboutDetails.description2}</p>
          </div>
        </div>
      </div>
      
      <hr className="mt-16 border-t border-[#BAB2E7]" />
    </section>
  );
}

export default Profile;