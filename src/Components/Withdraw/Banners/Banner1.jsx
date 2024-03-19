import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner1.png";

function Banner1({ languageData, setPartnerSelected, selectPayment, user, setOpen, handleButtonClick, disabled, countdown }) {
  const isButtonDisabled = countdown < 0;
  return (
    <div>
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] cursor-pointer">
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
          className=" relative z-10 m-auto min-h-full w-full max-w-[400px]"
          src={banner}
          alt="banner"
        />
        <div className="absolute left-[10px] top-[30px] z-10 w-[160px] ">
          <p className=" saira text-center text-[11px] font-medium leading-[12px] text-[#A533FF]">Don't let her wait she wants to take the connection forward</p>
          <p className=" saira my-4 px-4 text-center text-[11px] font-medium leading-[12px] text-black">You can’t finish the job... Or can you? 🙄</p>
          <p className=" saira text-center text-[11px] font-extrabold leading-[12px] text-[#9430E3]">Get your 50$R as 12 credits in our prime partner’s site to get back to ( nickname ) now.</p>
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
          GET THE CREDITS
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={handleButtonClick}
          className={`saira w-full max-w-[600px] border-[1px] py-[2px] text-[18px] font-semibold text-black outline-none ${disabled ? "gradient-timeCounter border-[1px] border-[#DDBAFC] bg-transparent opacity-[0.4] " : "gradient-homepageBtn border-none opacity-[1]"} rounded-[12px] `}
          disabled={disabled}
        >
          {disabled ? `${countdown} seconds to continue` : "Continue"}
        </button>
      </div>
    </div>
  );
}

export default Banner1;
