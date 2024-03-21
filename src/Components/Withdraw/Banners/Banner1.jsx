import React from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner1.png";
import { useState, useEffect } from "react";

function Banner1({ languageData, setPartnerSelected, selectPayment, user, setOpen, setBannerNumber, withdraw }) {
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
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] cursor-pointer sm:max-w-[370px]">
        <p className="bannerTextBtn4 text-center text-[17px] font-extrabold leading-5">
          {languageData?.banner1text1} {user?.imlive_username || ""} {languageData?.banner1text1span} <span>👸</span>
        </p>
        <img
          onClick={(e) => {
            setPartnerSelected(true);
          }}
          className=" relative z-10 m-auto mt-2 min-h-full w-full max-w-[345px] rounded-xl sm:max-w-[370px]"
          src={user?.imlive_image || banner}
          alt="banner"
        />
        <p className="saira mt-2 text-center text-[16px] font-medium">{languageData?.banner1text2}</p>
        <p className="saira bannerTextBtn2 my-3 text-center text-[40px] font-extrabold leading-7">{languageData?.banner1text3}</p>
        <p className="saira bannerTextBtn3 mt-2 text-center text-[20px] font-extrabold leading-6">
          {languageData?.banner1text4} {user?.imlive_username || ""} {languageData?.banner1text4span}
        </p>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={(e) => {
            withdraw();
          }}
          disabled={!disabled}
          className={`saira w-full  max-w-[370px]  rounded-[12px] border-[2px] text-[18px] font-semibold outline-none ${disabled ? `gradient-homepageBtn border-none py-2 text-[#1E1E1E]` : " border-[2px] border-[#515151] bg-transparent py-3 text-[#7f7f7f]"}`}
        >
          {languageData?.bannerBtn1}
          <p className="saira text-[18px] leading-5 text-white">{disabled ? `${countdown} ${languageData?.bannerBtn2} ⏱️` : ""}</p>
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={(e) => setBannerNumber(2)}
          className={`saira w-full max-w-[370px] border-[1px] py-3 text-[18px] font-semibold  outline-none ${disabled ? " border-[1px] border-[#515151] bg-transparent text-[#7f7f7f] " : "gradient-homepageBtn border-none text-black"} rounded-[12px] `}
          disabled={disabled}
        >
          {languageData?.bannerBtn2Done}
        </button>
      </div>
    </div>
  );
}

export default Banner1;
