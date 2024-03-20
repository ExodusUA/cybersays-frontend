import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner3.png";
import bannerDesk from "../../../images/NewDesign/withdraw/Banners/bannerDesc3.png";

function Banner3({ languageData, setPartnerSelected, selectPayment, user, setOpen, handleButtonClick, disabled, countdown }) {
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

        <div className="  absolute right-[0px] sm:right-[10px] top-[5px] sm:top-[45px] z-50 w-full max-w-[165px] sm:max-w-[265px] ">
        <p className="saira my-2 px-2 text-center text-[14px] sm:text-[24px] font-semibold leading-[14px] sm:leading-[24px]">{languageData?.banner3text1}</p>
          <p className="saira text-center text-[11px] sm:text-[18px] font-semibold leading-[12px] sm:leading-4 px-4 text-black sm:mt-4">{languageData?.banner3text2}</p>
          <p className="saira my-2 px-2 text-center text-[24px] sm:text-[34px] font-semibold leading-[24px] sm:my-4">{languageData?.banner3text3}</p>
          <p className="saira text-center text-[11px] sm:text-[18px] font-semibold leading-[12px] sm:leading-5 px-3 text-black">{languageData?.banner3text4}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-center lg:mt-8">
        <button
          onClick={(e) => {
            setPartnerSelected(true);
            setOpen(false);
          }}
          disabled={isButtonDisabled}
          className={`saira w-full  max-w-[600px]  rounded-[12px] border-[2px] py-3 text-[18px] font-semibold uppercase  text-black outline-none  ${disabled ? ` bannerBtn3 border-none` : "gradient-timeCounter bannerTextBtn3 border-[2px] border-[#FC2D6D] bg-transparent"}`}
        >
          {languageData?.bannerBtn1}
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={handleButtonClick}
          className={`saira w-full max-w-[600px] border-[1px] py-[2px] text-[18px] font-semibold outline-none  ${disabled ? "gradient-timeCounter border-[#DDBAFC] bg-transparent opacity-[0.4]" : "bannerBtn3 border-none text-black  opacity-[1]"} rounded-[12px] `}
          disabled={disabled}
        >
          {disabled ? `${countdown} ${languageData?.bannerBtn2}` : languageData?.bannerBtn2Done}
        </button>
      </div>
    </div>
  );
}

export default Banner3;
