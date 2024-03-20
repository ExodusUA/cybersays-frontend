import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner2.png";
import bannerDesk from "../../../images/NewDesign/withdraw/Banners/bannerDesc2.png";

function Banner2({ languageData, setPartnerSelected, selectPayment, user, setOpen, handleButtonClick, disabled, countdown }) {

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
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] sm:max-w-[600px] cursor-pointer ">
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

        <div className="absolute bottom-[10px] sm:bottom-[15px] left-[0px] z-50 w-full max-w-[345px] sm:max-w-[600px]">
          <p className="saira px-16 sm:px-[80px] text-center text-[13px] sm:text-[24px] font-extrabold leading-[14px] sm:leading-6 text-[#9430E3]">
          {languageData?.banner2text1} <span className="saira">{languageData?.banner2text1Span}</span> {languageData?.banner2text2}{" "}
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-center lg:mt-8">
        <button
          onClick={(e) => {
            setPartnerSelected(true);
            setOpen(false);
          }}
          disabled={isButtonDisabled}
          className={`saira w-full  max-w-[600px]  rounded-[12px] border-[2px] py-3 text-[18px]  font-semibold  uppercase  outline-none ${disabled ? "bannerBtn2 border-none text-black" : "bannerTextBtn2 border-[2px] border-[#FBC711] bg-transparent"}`}
        >
          {languageData?.bannerBtn1}
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={handleButtonClick}
          className={`saira w-full max-w-[600px] border-[1px] py-[2px] text-[18px] font-semibold text-black outline-none ${disabled ? "gradient-timeCounter border-[#DDBAFC] bg-transparent opacity-[0.4]" : "bannerBtn2 border-none opacity-[1]"} rounded-[12px] `}
          disabled={disabled}
        >
          {disabled ? `${countdown} ${languageData?.bannerBtn2}` : languageData?.bannerBtn2Done}
        </button>
      </div>
    </div>
  );
}

export default Banner2;
