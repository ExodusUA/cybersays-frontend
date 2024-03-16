import React, { useState } from "react";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import { withdrawD24 } from "../../../Requests/withdraw";
import userAPI from "../../../Requests/user";
import mixpanel from "mixpanel-browser";

function PixFlow({ languageData, setConfirm, setError, email, userCountry }) {
  const { design } = useDesign();
  const [PIX, setPIX] = useState(null);
  const [CPF, setCPF] = useState(null);
  const [pixType, setPixType] = useState(null);
  const [pixTypeOption, setPixTypeOption] = useState(null);
  const selectedPixType = [
    {
      option: languageData?.pixTypeOption1,
    },
    {
      option: languageData?.pixTypeOption2,
    },
    {
      option: languageData?.pixTypeOption3,
    },
    {
      option: languageData?.pixTypeOption4,
    },
  ];

  async function creteWithdraw() {
    if ((PIX === null || PIX === undefined || PIX.length === "") && pixTypeOption !== languageData?.pixTypeOption1) return alert("Please enter a valid PIX");
    if (CPF === null || CPF === undefined || CPF.length === "") return alert("Please enter a valid CPF");
    try {
      //await withdrawD24(PIX, CPF, userCountry)
      let pixType =
        (pixTypeOption === languageData?.pixTypeOption1 && "CPF") ||
        (pixTypeOption === languageData?.pixTypeOption2 && "PHONE") ||
        (pixTypeOption === languageData?.pixTypeOption3 && "EMAIL") ||
        (pixTypeOption === languageData?.pixTypeOption4 && "EVP");
      console.log(pixType === "CPF" ? CPF : PIX, CPF, email, pixType);
      await userAPI.createPixWithdraw(pixType === "CPF" ? CPF : PIX, CPF, email, pixType);

      mixpanel.track("Withdraw_request", { method: "PIX (RoyalPag)" });
      setConfirm(true);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="m-auto w-full max-w-[600px]">
      <p className="mt-2 text-center text-[18px] font-semibold md:text-[32px]">{languageData?.PIXTitle}</p>
      <div>
        <p className="saira my-1 text-[12px] font-medium">{languageData?.pixType}</p>
        <div className={` relative mt-1 border bg-white px-3 py-2 lg:py-3 ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}>
          <div onClick={(e) => setPixType(!pixType)} className={`flex  cursor-pointer items-center justify-between`}>
            <div className="flex items-center">
              <p className="saira text-[16px] font-normal text-[#1E1E1E]">{pixTypeOption || languageData?.pixTypeSelectMain}</p>
            </div>
            <div className="ml-2">
              {pixType ? (
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

        {pixType && (
          <>
            <div className={`absolute mt-2 w-full max-w-[600px] border bg-white px-3 py-2 shadow-sm lg:py-3 ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}>
              {selectedPixType.map((item, index) => (
                <div
                  key={index}
                  className="flex h-[50px] cursor-pointer items-center gap-1 rounded-[12px] hover:bg-slate-200"
                  onClick={(e) => {
                    setPixTypeOption(item.option);
                    setPixType(false);
                  }}
                >
                  <label className=" ml-2 flex items-center">
                    <p className="saira cursor-pointer text-[16px] font-normal text-[#1E1E1E]" id={item.option} name={item.option} value={item.option} checked={pixTypeOption === item.option}>
                      {item.option}
                    </p>
                  </label>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {(pixTypeOption === languageData?.pixTypeOption2 || pixTypeOption === languageData?.pixTypeOption3 || pixTypeOption === languageData?.pixTypeOption4) && (
        <div>
          <p className="saira my-1 text-[12px] font-medium">
            {(pixTypeOption === languageData?.pixTypeOption2 && languageData?.pixTypeSelectName2) ||
              (pixTypeOption === languageData?.pixTypeOption3 && languageData?.pixTypeSelectName3) ||
              (pixTypeOption === languageData?.pixTypeOption4 && "Pix Key")}
          </p>
          <div className="flex justify-center">
            <input
              className={`saira font-regular w-full max-w-[600px] bg-white p-3 text-[16px] text-black outline-none ${design === "0" ? "  rounded-[50px]" : " rounded-[12px] "}`}
              type="text"
              value={PIX}
              onChange={(e) => setPIX(e.target.value)}
              placeholder={
                (pixTypeOption === languageData?.pixTypeOption2 && "(XX)XXXXX-XXXX") ||
                (pixTypeOption === languageData?.pixTypeOption3 && "username@cybersays.com") ||
                (pixTypeOption === languageData?.pixTypeOption4 && "Pix Key")
              }
            />
          </div>
        </div>
      )}

      {(pixTypeOption === languageData?.pixTypeOption1 || pixTypeOption === languageData?.pixTypeOption2 || pixTypeOption === languageData?.pixTypeOption3 || pixTypeOption === languageData?.pixTypeOption4) && (
        <div>
          <p className="saira my-1 text-[12px] font-medium">{languageData?.pixTypeSelectName1}</p>
          <div className="flex justify-center">
            <input
              className={`saira font-regular w-full max-w-[600px] bg-white p-3 text-[16px] text-black outline-none ${design === "0" ? "  rounded-[50px]" : " rounded-[12px] "}`}
              type="text"
              value={CPF}
              onChange={(e) => setCPF(e.target.value)}
              placeholder={"000.000.000-00"}
            />
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-center">
        <button
          onClick={(e) => creteWithdraw()}
          className={`saira w-full  max-w-[600px]  border-[2px] bg-white py-3 text-[18px] font-semibold text-black  ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
        >
          {languageData?.withdrawContinue}
        </button>
      </div>
    </div>
  );
}

export default PixFlow;
