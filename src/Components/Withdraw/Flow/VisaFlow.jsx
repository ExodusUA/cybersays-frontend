import React, { useEffect, useState } from "react";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import OTPVerify from "../OTPVerify";

function VisaFlow({ languageData, setConfirm, setError }) {
  const { design } = useDesign();

  const [transfer, setTransfer] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [valueCard, setValueCard] = useState("");

  const [step, setStep] = useState(1);

  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (isVerified) {
      setConfirm(true);
    }
  }, [isVerified]);

  return (
    <div className={` relative m-auto mt-2 w-full  max-w-[600px] rounded-[12px] px-2 lg:px-4`}>
      {step === 1 ? (
        <>
          <p className="my-2 text-center text-[18px] font-semibold md:text-[32px] lg:leading-[40px]">{languageData?.visaFlowTitle}</p>

          <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === "0" ? "rounded-[30px]" : " rounded-[12px]"} px-8`}>
            <p className={`text-[14px]  ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble font-semibold"} saira mt-1 py-1  text-center font-bold`}>{languageData?.visaFlowSubTitle}</p>
          </div>

          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowSelectName1}</p>
          <select value={transfer} onChange={(e) => setTransfer(e.target.value)} className="custom-select saira h-[45px] w-full rounded-[12px] bg-white px-2  text-[#1E1E1E] outline-none focus:ring-0">
            <option className="saira text-black">{languageData?.visaFlowSelect1}</option>
          </select>
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowInput}</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="saira h-[45px] w-full rounded-[12px] bg-white px-3  text-[#1E1E1E] outline-none focus:ring-0"
            placeholder={languageData?.visaFlowPlaceholder}
            type="text"
          />
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowSelectName2}</p>
          <select value={card} onChange={(e) => setCard(e.target.value)} className="custom-select saira h-[45px] w-full rounded-[12px] bg-white px-2  text-[#1E1E1E] outline-none focus:ring-0">
            <option className="saira text-black">{languageData?.visaFlowSelect2}</option>
          </select>
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowSelectName3}</p>
          <select value={valueCard} onChange={(e) => setValueCard(e.target.value)} className="custom-select saira h-[45px] w-full rounded-[12px] bg-white px-2  text-[#1E1E1E] outline-none focus:ring-0">
            <option className="saira text-black">{languageData?.visaFlowSelect3}</option>
          </select>
          <div className="mt-2 flex justify-center lg:mt-4">
            <button
              className={`saira w-full  border-[2px]  bg-white py-2 text-[18px] font-semibold text-black outline-none  ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
            >
              {languageData?.visaFlowBtn}
            </button>
          </div>
        </>
      ) : (
        <>
          <OTPVerify languageData={languageData} setStep={setStep} email={email} isVerified={setIsVerified} />
        </>
      )}
    </div>
  );
}

export default VisaFlow;
