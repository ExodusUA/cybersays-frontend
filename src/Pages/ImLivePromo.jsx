import React, { useState } from "react";
import close from "../images/NewDesign/closeBtn.png";
import PartnerLogo from "../images/NewDesign/PartnerLogo.png";
import { useDesign } from "../Helpers/Design/DesignContext";
import promoGirl from "../images/NewDesign/promoGirl.png";
import promoGirlMessage from "../images/NewDesign/promoGirl-message.png";
import promoGirlMessage2 from "../images/NewDesign/promoGirl-message2.png";

function PartnerPromo({ languageData }) {
  const { design } = useDesign();

  return (
    <div className="fixed top-0 z-[99999] flex h-screen w-screen items-center bg-[#1E1E1E] bg-opacity-60 bg-new-bg-promo bg-cover bg-no-repeat p-4 backdrop-blur-md lg:bg-new-bg-promo-des ">
      <div className={`relative m-auto w-full max-w-[600px]   rounded-[12px] lg:px-4`}>
        <div className="m-auto w-full max-w-[370px] lg:max-w-[600px]">
          <div className="flex justify-around lg:justify-center">
            <p className="gradient-linkDouble text-[24px] font-semibold lg:text-[32px]">{languageData?.promoModalTitle}</p>
            <img className="w-[70px] lg:ml-[10px] lg:w-[95px]" src={PartnerLogo} alt="PartnerLogo" />
          </div>
          <div className="relative mt-2 flex items-center justify-around lg:mt-[40px]">
            <img className="w-[140px] lg:w-[235px]" src={promoGirl} alt="promoGirl" />

            <img className="ml-[-20px] h-[140px] w-[220px] lg:h-[246px] lg:w-[370px]" src={promoGirlMessage2} alt="promoGirlMessage" />
            <p className=" saira absolute right-[25px] top-[60px] w-[170px] text-[14px] font-medium leading-4 lg:right-[28px] lg:top-[110px] lg:w-[285px] lg:text-[22px] lg:leading-6">{languageData?.PartnerPromoDesc}</p>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            className={`saira w-full max-w-[370px] border-[2px]  bg-white  py-1.5 text-[18px] font-semibold text-black outline-none lg:max-w-[600px]  ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
          >
            {languageData?.PartnerPromoVtn}
          </button>
        </div>
        <div className="flex justify-center">
          <p className="gradient-link2 saira mt-1 cursor-pointer text-[14px] font-semibold">{languageData?.promoModalLink}</p>
        </div>
      </div>
    </div>
  );
}

export default PartnerPromo;
