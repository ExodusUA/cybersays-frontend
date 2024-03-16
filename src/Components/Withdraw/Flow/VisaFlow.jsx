import React, { useEffect, useState } from "react";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import OTPVerify from "../OTPVerify";

function VisaFlow({ languageData, setConfirm, setError }) {
  const { design } = useDesign();

  const [transfer, setTransfer] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [citizenship, setCitizenship] = useState(null);
  const [citizenshipOption, setCitizenshipOption] = useState(null);
  const [card, setCard] = useState("");
  const [valueCard, setValueCard] = useState("");

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

  return (
    <div className={` relative m-auto mt-2 w-full  max-w-[600px] rounded-[12px] px-2 lg:px-4`}>
      <div className={` m-auto w-full max-w-[600px]`}>
        {step === 1 ? (
          <>
            <p className="my-2 text-center text-[18px] font-semibold md:text-[32px] lg:leading-[40px]">{languageData?.visaFlowTitle}</p>
            <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === "0" ? "rounded-[30px]" : " rounded-[12px]"} px-8`}>
              <p className={`text-[14px]  ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble font-semibold"} saira mt-1 py-1  text-center font-bold`}>{languageData?.visaFlowSubTitle}</p>
            </div>
            <p className="saira mb-1 mt-3 text-[12px]">Full Name</p>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="saira h-[45px] w-full rounded-[12px] bg-white px-3  text-[#1E1E1E] outline-none focus:ring-0"
              placeholder="Full Name"
              type="text"
            />
            <p className="saira mb-1 mt-3 text-[12px]">Email Adress</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="saira h-[45px] w-full rounded-[12px] bg-white px-3  text-[#1E1E1E] outline-none focus:ring-0"
              placeholder="Email Adress"
              type="text"
            />
            <p className="saira my-1 text-[12px] font-medium">{languageData?.pixType}</p>
            <div className={` relative mt-1 border bg-white px-3 py-2 lg:py-3 ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}>
              <div onClick={(e) => setCitizenship(!citizenship)} className={`flex  cursor-pointer items-center justify-between`}>
                <div className="flex items-center">
                  <p className="saira text-[16px] font-normal text-[#1E1E1E]">{citizenshipOption || languageData?.pixTypeSelectMain}</p>
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
                <div className={`absolute mt-2 h-[150px] w-full max-w-[600px] overflow-y-auto border bg-white px-3 py-2 shadow-sm ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}>
                  {selectedCitizenship.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-[25px] cursor-pointer items-center gap-1 rounded-[8px] hover:bg-slate-200"
                      onClick={(e) => {
                        setCitizenshipOption(item.option);
                        setCitizenship(false);
                      }}
                    >
                      <label className=" ml-2 flex items-center">
                        <p className="saira cursor-pointer text-[16px] font-normal text-[#1E1E1E]" id={item.option} name={item.option} value={item.option} checked={citizenshipOption === item.option}>
                          {item.option}
                        </p>
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}
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
    </div>
  );
}

export default VisaFlow;
