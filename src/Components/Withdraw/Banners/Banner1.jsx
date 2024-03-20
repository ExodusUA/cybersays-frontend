import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner1.png";
import bannerDesk from "../../../images/NewDesign/withdraw/Banners/bannerDesc1.png";

function Banner1({ languageData, setPartnerSelected, selectPayment, user, setOpen, handleButtonClick, disabled, countdown }) {
  const isButtonDisabled = countdown < 0;
  const getBannerSrc = () => {
    if (window.innerWidth < 640) {
      return banner;
    } else {
      return bannerDesk;
    }
  };
  return (
    <div>
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] sm:max-w-[600px] cursor-pointer">
        {/*
                                <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                            </div>
                                */}
        <img
          onClick={(e) => {
            setPartnerSelected(true);
          }}
          className=" relative z-10 m-auto min-h-full w-full max-w-[345px] sm:max-w-[600px]"
          src={getBannerSrc()}
          alt="banner"
        />
        <div className="absolute left-[10px] sm:left-[20px] top-[30px] sm:top-[60px] z-10 w-[160px] sm:w-[250px]">
          <p className=" saira text-center text-[11px] sm:text-[20px] font-medium leading-[12px] sm:leading-5 text-[#A533FF]">{languageData?.banner1text1}</p>
          <p className=" saira my-4 sm:my-6 px-4 sm:px-0 text-center text-[11px] sm:text-[20px] font-medium leading-[12px] sm:leading-5 text-black sm:text-center">{languageData?.banner1text2}</p>
          <p className=" saira text-center text-[11px] sm:text-[20px] font-extrabold leading-[12px] sm:leading-5 text-[#9430E3]">{languageData?.banner1text3} {user.imlive_username} {languageData?.banner1text3Span}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-center lg:mt-8">
        <button
          onClick={(e) => {
            setPartnerSelected(true);
            setOpen(false);
          }}
          disabled={isButtonDisabled}
          className={`saira w-full  max-w-[600px]  rounded-[12px] border-[2px] py-3 text-[18px] font-semibold uppercase text-black outline-none ${disabled ? `gradient-homepageBtn border-none` : " gradient-timeCounter border-[2px] border-[#DDBAFC] bg-transparent"}`}
        >
          {languageData?.bannerBtn1}
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={handleButtonClick}
          className={`saira w-full max-w-[600px] border-[1px] py-[2px] text-[18px] font-semibold text-black outline-none ${disabled ? "gradient-timeCounter border-[1px] border-[#DDBAFC] bg-transparent opacity-[0.4] " : "gradient-homepageBtn border-none opacity-[1]"} rounded-[12px] `}
          disabled={disabled}
        >
          {disabled ? `${countdown} ${languageData?.bannerBtn2}` : languageData?.bannerBtn2Done}
        </button>
      </div>
    </div>

  );

}

export default Banner1;
