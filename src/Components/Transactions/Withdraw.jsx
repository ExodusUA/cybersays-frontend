import React, { useEffect, useState } from "react";
import Confirm from "./Confirm";
import Error from "./Error";
import ImLivePromoModal from "../Withdraw/PartnerPromoModal";
import ImLiveFlow from "../Withdraw/Flow/ImLiveFlow";
import PixFlow from "../Withdraw/Flow/PixFlow";
import WithdrawMain from "../Withdraw/WithdrawMain";
import { useDesign } from "../../Helpers/Design/DesignContext";
import close from "../../images/CyberSaysPage/closeMenu.png";
import PaxumFlow from "../Withdraw/Flow/PaxumFlow";
import VisaFlow from "../Withdraw/Flow/VisaFlow";
import XoxodayFlow from "../Withdraw/XoxodayFlow";
import PSEFlow from "../Withdraw/Flow/PSEFlow";
import ServiPagFlow from "../Withdraw/Flow/ServiPagFlow";
import SPEIFlow from "../Withdraw/Flow/SPEIFlow";
import mixpanel from "mixpanel-browser";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";
import moengage from "@moengage/web-sdk";

function Withdraw({ user, setOpen, languageData, userCountry }) {
  const { design } = useDesign();
  const { language } = useLanguage();

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [email, setEmail] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userCountry === null || userCountry === undefined) return;
  }, [userCountry]);

  const [flowStarted, setFlowStarted] = useState(false);
  const [promoModal, setPromoModal] = useState(true);
  const [imLiveSelected, setImLiveSelected] = useState(false);

  useEffect(() => {
    mixpanel.track("withdraw_modal", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      language: language,
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      language: language,
      number_referrals: user?.referral_id ? user?.referral_id.length : 0,
    });
    moengage.track_event("withdraw_modal", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      language: language,
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      language: language,
      number_referrals: user?.referral_id ? user?.referral_id.length : 0,
    });
  }, []);

  const getMethodComponent = (selectedPayment) => {
    switch (selectedPayment) {
      case "xoxoday":
        return <XoxodayFlow languageData={languageData} setConfirm={setConfirm} setError={setError} email={email} />;
      case "pix":
        return <PixFlow languageData={languageData} setConfirm={setConfirm} setError={setError} email={user?.email} />;
      case "paxum":
        return <PaxumFlow languageData={languageData} setConfirm={setConfirm} setSelectedPayment={setSelectedPayment} setError={setError} />;
      case "visa":
        return <VisaFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />;
      case "imlive":
        return <ImLiveFlow setConfirm={setConfirm} setOpen={setImLiveSelected} languageData={languageData} closeAll={setOpen} setFlowStarted={setFlowStarted} setError={setError} />;
      case "pse":
        return <PSEFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />;
      case "servipag":
        return <ServiPagFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />;
      case "spei":
        return <SPEIFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />;
      default:
        return "Please select a payment method to continue.";
    }
  };

  return (
    <div>
      {user?.earned !== 0 && user?.earned > 0 && promoModal && <ImLivePromoModal closeAll={setOpen} setImLiveSelected={setImLiveSelected} setOpen={setPromoModal} languageData={languageData} user={user} />}

      {imLiveSelected ? (
        <ImLiveFlow setFlowStarted={setFlowStarted} setConfirm={setConfirm} setOpen={setImLiveSelected} languageData={languageData} closeAll={setOpen} setError={setError} />
      ) : (
        <div className="fixed top-0 z-[60] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md">
          <div className=" absolute left-1/2 top-4 z-10 w-[95%] max-w-[600px] -translate-x-1/2 transform lg:top-0 lg:w-full">
            <div className={`m-auto flex w-full justify-between md:my-4`}>
              <svg onClick={(e) => setFlowStarted(false)} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 22L7 12L17 2" stroke="url(#paint0_linear_26_11821)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_26_11821" x1="17" y1="11.8039" x2="7" y2="11.8039" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8FE5EC" />
                    <stop offset="1" stop-color="#DDBAFC" />
                  </linearGradient>
                </defs>
              </svg>
              <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../images/NewDesign/closeBtn.png")} alt="close" />
            </div>
          </div>
          {flowStarted ? (
            <div className="flex h-screen items-center">{getMethodComponent(selectedPayment)}</div>
          ) : (
            <WithdrawMain
              setImLiveSelected={setImLiveSelected}
              setFlowStarted={setFlowStarted}
              selectPayment={setSelectedPayment}
              selectedPayment={selectedPayment}
              userCountry={userCountry}
              user={user}
              languageData={languageData}
            />
          )}
        </div>
      )}
      {confirm && <Confirm selectPayment={setSelectedPayment} selectedPayment={selectedPayment} setOpen={setConfirm} languageData={languageData} closeAll={setOpen} />}

      {error && <Error setOpen={setError} languageData={languageData} closeAll={setOpen} />}
    </div>
  );
}

export default Withdraw;
