import React, { useState } from "react";
import close from "../../images/NewDesign/closeBtn.png";
import imLiveLogo from "../../images/NewDesign/imLiveLogo.png";
import { useDesign } from "../../Helpers/Design/DesignContext";
import promoGirl from "../../images/NewDesign/promoGirl.png";
import promoGirlMessage from "../../images/NewDesign/promoGirl-message.png";
import banner from "../../images/NewDesign/withdraw/banner.png";
import ImLiveBanner from "./ImLiveBanner";

function ImLivePromoModal({ setOpen, languageData, setImLiveSelected, user }) {
  const { design } = useDesign();

  return (
    <div onClick={(e) => setOpen(false)} className="fixed top-0 z-[99999] flex h-screen w-screen items-center bg-new-bg-promo bg-cover bg-no-repeat p-4 lg:bg-new-bg-promo-des ">
      <div className="absolute left-1/2 top-2 my-1 flex w-full max-w-[600px] -translate-x-1/2 transform justify-end px-4 md:my-4">
        <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../images/NewDesign/closeBtn.png")} alt="close" />
      </div>
      <div onClick={(e) => e.stopPropagation()} className={`relative m-auto w-full max-w-[600px]   rounded-[12px] p-2 lg:px-4 `}>
        <ImLiveBanner languageData={languageData} setImLiveSelected={setImLiveSelected} selectPayment={() => {}} user={user} />
        {/*
                    <div className='max-w-[350px] w-full m-auto'>
                    <div className='flex justify-around '>
                        <p className='gradient-linkDouble text-[24px] font-semibold'>{languageData?.promoModalTitle}</p>
                        <img className='w-[70px]' src={imLiveLogo} alt="imLiveLogo" />
                    </div>
                    <div className='flex items-center justify-around mt-2'>
                        <img className='w-[120px]' src={promoGirl} alt="promoGirl" />
                        <div className=' relative'>
                            <img className='w-[220px] h-[120px] ml-[-20px]' src={promoGirlMessage} alt="promoGirlMessage" />
                            <p className=' absolute top-[45px] left-[-15px] saira text-[12px] font-medium w-[180px] leading-4 text-center'>{languageData?.promoModalMessage}</p>
                        </div>
                    </div>
                </div>
                    */}
        <div className="flex justify-center ">
          <button
            onClick={(e) => {
              setImLiveSelected(true);
              setOpen(false);
            }}
            className={`saira w-full  max-w-[390px]  border-[2px] bg-white py-1.5 text-[18px] font-semibold text-black outline-none ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
          >
            {languageData?.withdrawBtn}
          </button>
        </div>
        <div className="flex justify-center">
          <p onClick={(e) => setOpen(false)} className="gradient-link2 saira mt-1 cursor-pointer text-[14px] font-semibold">
            {languageData?.promoModalLink}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImLivePromoModal;
