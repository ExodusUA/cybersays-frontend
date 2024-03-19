import React, { useState, useEffect } from "react";
import close from "../../images/NewDesign/closeBtn.png";
import imLiveLogo from "../../images/NewDesign/imLiveLogo.png";
import { useDesign } from "../../Helpers/Design/DesignContext";
import promoGirl from "../../images/NewDesign/promoGirl.png";
import promoGirlMessage from "../../images/NewDesign/promoGirl-message.png";
import banner from "../../images/NewDesign/withdraw/banner.png";
import ImLiveBanner from "./PartnerBanner";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";

function PartnerPromoModal({ setOpen, languageData, setImLiveSelected, user, closeAll }) {
  const { design } = useDesign();
  const [disabled, setDisabled] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const [randomBanner, setRandomBanner] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
      setCountdown(0);
    }, 10000);


    const countdownTimer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);


    const random = Math.floor(Math.random() * 3) + 1;
    let randomBanner;
    switch (random) {
      case 1:
        randomBanner = <Banner1 handleButtonClick={handleButtonClick} disabled={disabled} countdown={countdown} setOpen={setOpen} languageData={languageData} setImLiveSelected={setImLiveSelected} selectPayment={() => { }} user={user} />;
        break;
      case 2:
        randomBanner = <Banner2 handleButtonClick={handleButtonClick} disabled={disabled} countdown={countdown} setOpen={setOpen} languageData={languageData} setImLiveSelected={setImLiveSelected} selectPayment={() => { }} user={user} />;
        break;
      case 3:
        randomBanner = <Banner3 handleButtonClick={handleButtonClick} disabled={disabled} countdown={countdown} setOpen={setOpen} languageData={languageData} setImLiveSelected={setImLiveSelected} selectPayment={() => { }} user={user} />;
        break;
      default:
        randomBanner = <Banner1 handleButtonClick={handleButtonClick} disabled={disabled} countdown={countdown} setOpen={setOpen} languageData={languageData} setImLiveSelected={setImLiveSelected} selectPayment={() => { }} user={user} />;
        break;
    }
    setRandomBanner(randomBanner);

    console.log(random)

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleButtonClick = () => {
    setOpen(false);
  };

  return (
    <div className="fixed top-0 z-[99999] flex h-screen w-screen items-center bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md  bg-cover bg-no-repeat p-4 ">
      <div className="absolute left-1/2 top-2 my-1 flex w-full max-w-[600px] -translate-x-1/2 transform justify-end px-4 md:my-4">
        <img onClick={(e) => closeAll(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../images/NewDesign/closeBtn.png")} alt="close" />
      </div>
      <div className={`relative m-auto w-full max-w-[600px]   rounded-[12px] p-2 lg:px-4 `}>
        {randomBanner}
      </div>
    </div>
  );
}

export default PartnerPromoModal;
