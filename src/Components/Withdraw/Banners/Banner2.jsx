import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner2.png";

function Banner2({ languageData, setImLiveSelected, selectPayment, user, setOpen, handleButtonClick, disabled, countdown }) {
  const isButtonDisabled = countdown < 0;
  return (
    <div>
      <div onClick={(e) => selectPayment("imlive")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] cursor-pointer ">
        {/*
                                <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                            </div>
                                */}
        <img
          onClick={(e) => {
            setImLiveSelected(true);
          }}
          className=" relative z-10 m-auto w-full max-w-[400px] min-h-full"
          src={banner}
          alt="banner"
        />

        <div className="  absolute left-[0px] bottom-[10px] z-50 max-w-[345px] w-full ">
          <p className="saira text-[13px] font-extrabold leading-[14px] text-[#9430E3] text-center px-16">Buying more credits in our partner
            you <span className="saira">get more points</span> for the
            daily competition on CyberSays </p>
        </div>

      </div>
      <div className="mt-5 flex justify-center lg:mt-8">
        <button
          onClick={(e) => {
            setImLiveSelected(true);
            setOpen(false);
          }}
          disabled={isButtonDisabled}
          className={`saira w-full  max-w-[600px]  border-[2px] py-3 text-[18px] font-semibold  outline-none  rounded-[12px]  uppercase ${disabled ? "bannerBtn2 text-black border-none" : "bg-transparent border-[2px] border-[#FBC711] bannerTextBtn2"}`}
        >
          GET THE CREDITS
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleButtonClick}
          className={`saira w-full max-w-[600px] border-[1px] py-[2px] text-[18px] font-semibold text-black outline-none ${disabled ? "opacity-[0.4] bg-transparent border-[#DDBAFC] gradient-timeCounter" : "opacity-[1] bannerBtn2 border-none"} rounded-[12px] `}
          disabled={disabled}
        >
          {disabled ? `${countdown} seconds to continue` : 'Continue'}
        </button>
      </div>
    </div>
  );
}

export default Banner2;