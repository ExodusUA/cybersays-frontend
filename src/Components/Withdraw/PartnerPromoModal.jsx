import React, { useState, useEffect } from "react";
import close from "../../images/NewDesign/closeBtn.png";
import { useDesign } from "../../Helpers/Design/DesignContext";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";

function PartnerPromoModal({ setOpen, languageData, setPartnerSelected, user, closeAll }) {
  const { design } = useDesign();
  const [disabled, setDisabled] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [randomBanner, setRandomBanner] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * 3) + 1;
    setRandomBanner(random);

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

  const getBannerMarkup = () => {
    switch (randomBanner) {
      case 1:
        return (
          <Banner1
            handleButtonClick={handleButtonClick}
            disabled={disabled}
            countdown={countdown}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
          />
        );

      case 2:
        return (
          <Banner2
            handleButtonClick={handleButtonClick}
            disabled={disabled}
            countdown={countdown}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
          />
        );

      case 3:
        return (
          <Banner3
            handleButtonClick={handleButtonClick}
            disabled={disabled}
            countdown={countdown}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
          />
        );

      default:
        return (
          <Banner1
            handleButtonClick={handleButtonClick}
            disabled={disabled}
            countdown={countdown}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
          />
        );
    }
  };

  const handleButtonClick = () => {
    setOpen(false);
  };

  return (
    <div className="fixed top-0 z-[99999] flex h-screen w-screen items-center bg-[#1E1E1E] bg-opacity-60 bg-cover  bg-no-repeat p-4 backdrop-blur-md ">
      <div className="absolute left-1/2 top-2 my-1 flex w-full max-w-[600px] -translate-x-1/2 transform justify-end px-4 md:my-4">
        <img onClick={(e) => closeAll(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../images/NewDesign/closeBtn.png")} alt="close" />
      </div>
      <div className={`relative m-auto w-full max-w-[600px]   rounded-[12px] p-2 lg:px-4`}>{getBannerMarkup()}</div>
    </div>
  );
}

export default PartnerPromoModal;
