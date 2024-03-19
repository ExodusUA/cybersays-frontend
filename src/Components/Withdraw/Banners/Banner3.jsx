import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner3.png";

function Banner3({ languageData, setImLiveSelected, selectPayment, user, setOpen, handleButtonClick, disabled, countdown }) {
  const isButtonDisabled = countdown < 0;
  return (
    <div>
      <div onClick={(e) => selectPayment("imlive")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[600px] cursor-pointer ">
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

        <div className="  absolute right-[0px] top-[25px] z-50 max-w-[165px] w-full ">
          <p className="saira text-[11px] font-semibold leading-[12px] text-black text-center">Vibrations, gifts, top Hosts. They are waiting for you:</p>
          <p className="saira text-[20px] font-semibold leading-[24px] text-center px-2 my-2">Don’t be a FOOL</p>
          <p className="saira text-[11px] font-semibold leading-[12px] text-[#272727] text-center px-3">Take your 12 credits to enjoy
            25 minutes more
            with ( nickname ) and
            others 💃</p>
        </div>

      </div>
      <div className="mt-5 flex justify-center lg:mt-8">
        <button
          onClick={(e) => {
            setImLiveSelected(true);
            setOpen(false);
          }}
          disabled={isButtonDisabled}
          className={`saira w-full  max-w-[600px]  border-[2px] py-3 text-[18px] font-semibold text-black outline-none  rounded-[12px] uppercase  ${disabled ? ` bannerBtn3 border-none` : 'bg-transparent border-[2px] border-[#FC2D6D] gradient-timeCounter bannerTextBtn3'}`}
        >
          GET THE CREDITS
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleButtonClick}
          className={`saira w-full max-w-[600px] border-[1px] py-[2px] text-[18px] font-semibold outline-none  ${disabled ? "opacity-[0.4] border-[#DDBAFC] gradient-timeCounter bg-transparent" : "opacity-[1] bannerBtn3 text-black  border-none"} rounded-[12px] `}
          disabled={disabled}
        >
          {disabled ? `${countdown} seconds to continue` : 'Continue'}
        </button>
      </div>
    </div>
  );
}

export default Banner3;
