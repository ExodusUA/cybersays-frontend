import React, { useState, useEffect } from "react";
import close from "../../images/NewDesign/closeBtn.png";
import { useDesign } from "../../Helpers/Design/DesignContext";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";
import { withdrawPartner } from "../../Requests/withdraw";
import mixpanel from "mixpanel-browser";

function PartnerPromoModal({ setOpen, languageData, setPartnerSelected, user, closeAll, setConfirm, setError, setBannerNumber, bannerNumber }) {
  const { design } = useDesign();

  const getBannerMarkup = () => {
    switch (bannerNumber) {
      case 1:
        return (
          <Banner1
            withdraw={withDrawPartner}
            handleButtonClick={handleButtonClick}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
            setBannerNumber={setBannerNumber}
          />
        );

      case 3:
        return (
          <Banner2
            withdraw={withDrawPartner}
            handleButtonClick={handleButtonClick}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
            setBannerNumber={setBannerNumber}
          />
        );

      case 2:
        return (
          <Banner3
            withdraw={withDrawPartner}
            handleButtonClick={handleButtonClick}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
            setBannerNumber={setBannerNumber}
          />
        );

      default:
        return (
          <Banner1
            withdraw={withDrawPartner}
            handleButtonClick={handleButtonClick}
            setOpen={setOpen}
            languageData={languageData}
            setPartnerSelected={setPartnerSelected}
            selectPayment={() => {}}
            user={user}
            setBannerNumber={setBannerNumber}
          />
        );
    }
  };

  const withDrawPartner = async () => {
    try {
      const res = await withdrawPartner();

      mixpanel.track("Withdraw_request", { method: "Partner" });

      console.log(res.data);
      if (res.data.status === "success") {
        setConfirm(true);
        setOpen(false);
      } else {
        alert(res.data.message);
        setError(true);
      }
    } catch (error) {
      setError(true);
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
