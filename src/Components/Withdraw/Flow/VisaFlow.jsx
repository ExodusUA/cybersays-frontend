import React, { useEffect, useState } from "react";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import OTPVerifyVisa from "../OTPVerifyVisa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { withdrawVisa } from "../../../Requests/withdraw";
import mixpanel from "mixpanel-browser";
import { useLanguage } from "../../../Helpers/Languages/LanguageContext";

function VisaFlow({ languageData, setConfirm, setError, user, userCountry }) {
  const { design } = useDesign();
  const { language } = useLanguage();
  const [transfer, setTransfer] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [citizenship, setCitizenship] = useState(null);
  const [citizenshipOption, setCitizenshipOption] = useState(null);
  const [date, setDate] = useState(null);
  const [checkmark, setCheckmark] = useState(false);

  const selectedCitizenship = [
    {
      option: "Brazil",
    },
    {
      option: "Ukraine",
    },
    {
      option: "United States",
    },
    {
      option: "Canada",
    },
    {
      option: "Australia",
    },
    {
      option: "United Kingdom",
    },
  ];

  const [step, setStep] = useState(1);

  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (isVerified) {
      setConfirm(true);
    }
  }, [isVerified]);

  const handleCreateTransaction = async () => {
    if (user?.earned === 0) {
      alert("You don't have enough money to withdraw");
      return;
    }
    if (withdrawBlocked === true) {
      alert("Withdraw blocked!");
      return;
    }
    try {
      const response = await withdrawVisa(fullName, email, citizenshipOption, date, language);
      //mixpanel.track("Withdraw_request", { method: "Visa" });

      if (response.data === "OTP sended") {
        setStep(2);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const [hasCard, setHasCard] = useState(false);
  const [withdrawBlocked, setWithdrawBlocked] = useState(false);

  useEffect(() => {
    if (!user) return;

    if (user.visa_id === null) {
      setHasCard(false);
    } else {
      setHasCard(true);
    }

    if (user?.earned < 25 && user?.visa_id === 0) {
      setWithdrawBlocked(true);
    }
  }, [user]);

  return (
    <div className={` m-auto w-full max-w-[600px]`}>
      {step === 1 ? (
        <>
          <p className="my-2 text-center text-[18px] font-semibold md:text-[32px] lg:leading-[40px]">{languageData?.visaFlowTitle}</p>
          <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === "0" ? "rounded-[30px]" : " rounded-[12px]"} px-8`}>
            <p className={`text-[14px]  ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble font-semibold"} saira mt-1 py-1  text-center font-bold`}>
              {languageData?.visaFlowSubTitle + `${userCountry === "BR" || userCountry === "UA" ? "R$125" : "$25"}` + languageData?.visaFlowSubTitle2}
            </p>
          </div>
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.newVisaFlowInput1}</p>
          <input
            readOnly={withdrawBlocked}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="saira h-[45px] w-full rounded-[12px] bg-white px-3  text-[#1E1E1E] outline-none focus:ring-0"
            placeholder={languageData?.newVisaFlowInput1}
            type="text"
          />
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.newVisaFlowInput2}</p>
          <input
            readOnly={withdrawBlocked}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="saira h-[45px] w-full rounded-[12px] bg-white px-3  text-[#1E1E1E] outline-none focus:ring-0"
            placeholder={languageData?.newVisaFlowInput2}
            type="text"
          />
          <p className="saira my-1 text-[12px] font-medium">{languageData?.newVisaFlowSelect1}</p>
          <div className={` relative mt-1 border bg-white px-3 py-2 lg:py-3 ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}>
            <div onClick={(e) => setCitizenship(!citizenship)} className={`flex  cursor-pointer items-center justify-between ${withdrawBlocked && "pointer-events-none opacity-70"}`}>
              <div className="flex items-center">
                <p className="saira text-[16px] font-normal text-[#1E1E1E]">{citizenshipOption || "Select Citizenship"}</p>
              </div>
              <div className="ml-2">
                {citizenship ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {citizenship && (
            <>
              <div
                className={`absolute left-1/2 z-10 mt-2 h-[150px] w-[93%] max-w-[600px] -translate-x-1/2 transform overflow-y-auto border bg-white px-3 py-2 shadow-sm sm:w-full ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}
              >
                {selectedCitizenship.map((item, index) => (
                  <div
                    key={index}
                    className="flex h-[25px] cursor-pointer items-center gap-1 rounded-[8px] hover:bg-slate-200"
                    onClick={(e) => {
                      setCitizenshipOption(item.option);
                      setCitizenship(false);
                    }}
                  >
                    <label className=" ml-2 flex items-center ">
                      <p className="saira cursor-pointer text-[16px] font-normal text-[#1E1E1E]" id={item.option} name={item.option} value={item.option} checked={citizenshipOption === item.option}>
                        {item.option}
                      </p>
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}
          <p className="saira my-1 text-[12px] font-medium">{languageData?.newVisaFlowInput3}</p>
          <DatePicker
            className={"saira saira w-full rounded-[12px] bg-white px-3 py-3 text-black outline-none focus:ring-0"}
            onChange={setDate}
            value={date}
            disabled={withdrawBlocked}
            disableCalendar={true}
            clearIcon={true}
            monthPlaceholder={"MM"}
            dayPlaceholder={"DD"}
            yearPlaceholder={"YYYY"}
          />
          <div className="mt-2 flex  items-center gap-2 lg:mt-4">
            <div className="flex h-[22px] w-[23px] cursor-pointer items-center justify-center rounded-[4px] border-2 border-white align-middle" onClick={(e) => setCheckmark(!checkmark)}>
              {checkmark === true && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <path d="M10 3.65088L4.66667 9.65088L2 6.65088" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              )}
            </div>
            <label className="saira my-2 w-full cursor-pointer select-none text-[12px] font-normal leading-4 lg:text-[14px]" htmlFor="notification">
              {languageData?.newVisaFlowCheckbox}{" "}
              <Link to={"/privacy"} target="_blank">
                <span className="saira underline">{languageData?.newVisaFlowCheckboxSpan}</span>
              </Link>
            </label>
            <input type="checkbox" name="notification" id="notification" hidden onChange={(e) => setCheckmark(!checkmark)} />
          </div>
          <div className="mt-2 flex justify-center lg:mt-4">
            <button
              onClick={(e) => handleCreateTransaction()}
              disabled={!checkmark}
              className={`saira w-full  border-[2px]  bg-white py-2 text-[18px] font-semibold text-black outline-none ${checkmark ? "opacity-[1]" : "opacity-[0.5]"} ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
            >
              {languageData?.visaFlowBtn}
            </button>
          </div>
        </>
      ) : (
        <>
          <OTPVerifyVisa languageData={languageData} setStep={setStep} email={email} isVerified={setIsVerified} />
        </>
      )}
    </div>
  );
}

export default VisaFlow;
