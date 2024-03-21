import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner3.png";
import bannerDesk from "../../../images/NewDesign/withdraw/Banners/bannerDesc3.png";
import { useState, useEffect } from "react";

function Banner3({ languageData, setPartnerSelected, selectPayment, user, setOpen, setBannerNumber, withdraw }) {
  const [disabled, setDisabled] = useState(true);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
      setCountdown(0);
    }, 10000);

    const countdownTimer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <div>
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] cursor-pointer sm:max-w-[370px] ">
        <p className="saira bannerTextBtn3 text-center text-[36px] font-extrabold">{languageData?.banner3text1}</p>
        <p className="saira bannerTextBtn3 text-center text-[13px] font-extrabold leading-4">{languageData?.banner3text2}</p>
        <img
          onClick={(e) => {
            setPartnerSelected(true);
          }}
          className=" relative z-10 m-auto mt-2 min-h-full w-full max-w-[345px] sm:max-w-[370px]"
          src={banner}
          alt="banner"
        />

        <p className="saira mt-4 text-center text-[12px] font-semibold leading-[14px]">{languageData?.banner3text3}</p>
        <p className="bannerTextBtn2 text-center text-[22px] font-semibold sm:text-[26px]">{languageData?.banner3text4}</p>
      </div>
      <div className="mt-2 flex justify-center lg:mt-8">
        <button
          onClick={(e) => {
            setPartnerSelected(true);
            setOpen(false);
          }}
          
          className={`saira w-full  rounded-[12px]  border-[2px] text-[18px]  font-semibold outline-none sm:max-w-[370px]  ${disabled ? ` bannerBtn3 border-none py-2 text-[#1E1E1E]` : "  border-[2px] border-[#515151] bg-transparent py-3 text-[#7f7f7f]"}`}
        >
          {languageData?.bannerBtn1}
          <p className="saira text-[18px] leading-5 text-white">{disabled ? `${countdown} ${languageData?.bannerBtn2} ⏱️` : ""} </p>
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={(e) => setBannerNumber(3)}
          className={`saira w-full border-[1px] py-3 text-[18px] font-semibold outline-none sm:max-w-[370px]  ${disabled ? "border-[#515151] bg-transparent text-[#7f7f7f]" : "bannerBtn3 border-none text-black"} rounded-[12px] `}
          disabled={disabled}
        >
          {languageData?.bannerBtn2Done}
        </button>
      </div>
    </div>
  );
}

export default Banner3;
