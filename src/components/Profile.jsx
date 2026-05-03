import React, { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import data from "../data/data";

function Profile() {
  const { lang } = useContext(SiteContext);
  const { profileData } = data[lang];

  const profileDetails = profileData.profile[0];
  const aboutDetails = profileData.about[0];

  return (
    <section className="px-6 md:px-20 lg:px-[125px] py-12 dark:bg-dark">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {profileData.profileTitle}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          <div className="flex-1">

            <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#BAB2E7] mb-8">
              {profileData.profileTitle}
            </h3>

            <div className="flex flex-col gap-6">

              {[
                { label: lang === "eng" ? "Birth Date" : "Doğum Tarihi", value: profileDetails.birthDate },
                { label: lang === "eng" ? "City" : "Şehir", value: profileDetails.city },
                { label: lang === "eng" ? "Education" : "Eğitim", value: profileDetails.education },
                { label: lang === "eng" ? "Role" : "Rol", value: profileDetails.role }
              ].map((item, idx) => (

                <div key={idx} className="flex flex-col sm:flex-row sm:gap-4">

                  <span className="font-bold text-[#1F2937] dark:text-white w-full sm:w-44">
                    {item.label}
                  </span>

                  <span className="text-[#1F2937] dark:text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 ">

            <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#BAB2E7] mb-8">
              {profileData.aboutTitle}
            </h3>

            <div className="text-[#6B7280] dark:text-white text-lg space-y-6 leading-relaxed">

              <p>{aboutDetails.description1}</p>
              <p>{aboutDetails.description2}</p>
              <p>{aboutDetails.description3}</p>
              <p>{aboutDetails.description4}</p>

            </div>
          </div>
        </div>

        <hr className="mt-16 border-t border-[#BAB2E7] dark:border-[#3A3A3A]" />
      </div>
    </section>
  );
}

export default Profile;