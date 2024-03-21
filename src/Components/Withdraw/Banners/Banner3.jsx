import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner3.png";
import bannerDesk from "../../../images/NewDesign/withdraw/Banners/bannerDesc3.png";

function Banner3({ languageData, setPartnerSelected, selectPayment, user, setOpen, handleButtonClick, disabled, countdown }) {
  const isButtonDisabled = countdown < 0;



  return (
    <div>
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] sm:max-w-[370px] cursor-pointer ">
        {/*
                                <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                            </div>
                                */}

        <p className="text-[36px] font-extrabold saira text-center bannerTextBtn3">{languageData?.banner3text1}</p>
        <p className="text-[13px] font-extrabold saira text-center bannerTextBtn3 leading-4">{languageData?.banner3text2}</p>
        <img
          onClick={(e) => {
            setPartnerSelected(true);
          }}
          className=" relative z-10 m-auto min-h-full w-full max-w-[345px] sm:max-w-[370px] mt-2"
          src={banner}
          alt="banner"
        />

        <p className="text-[12px] font-semibold saira text-center leading-[14px] mt-4">{languageData?.banner3text3}</p>
        <p className="text-[22px] sm:text-[26px] font-semibold bannerTextBtn2 text-center">{languageData?.banner3text4}</p>


      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={(e) => {
            setPartnerSelected(true);
            setOpen(false);
          }}
          
          className={`saira w-full  sm:max-w-[370px]  rounded-[12px] border-[2px]  text-[18px] font-semibold outline-none  ${disabled ? ` bannerBtn3 border-none text-[#1E1E1E] py-2` : "  border-[2px] text-[#7f7f7f] border-[#515151] bg-transparent py-3"}`}
        >
          {languageData?.bannerBtn1}
          <p className="saira text-white text-[18px] leading-5">{disabled ? `${countdown} ${languageData?.bannerBtn2} ⏱️` : ''} </p>
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={handleButtonClick}
          className={`saira w-full sm:max-w-[370px] border-[1px] py-3 text-[18px] font-semibold outline-none  ${disabled ? "text-[#7f7f7f] border-[#515151] bg-transparent" : "bannerBtn3 border-none text-black"} rounded-[12px] `}
          disabled={disabled}
        >
          {languageData?.bannerBtn2Done}
        </button>
      </div>
    </div>
  );
}

export default Banner3;
