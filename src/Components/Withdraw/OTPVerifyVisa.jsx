import React, { useState } from "react";
import { useDesign } from "../../Helpers/Design/DesignContext";
import CodeInput from "../Transactions/CodeInput";
import { verifyOTPVisa, withdrawVisa } from "../../Requests/withdraw";
import mixpanel from "mixpanel-browser";

function OTPVerifyVisa({ languageData, isVerified, email }) {
  const { design } = useDesign();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  async function verifyOTP() {
    let codeNumber = code.join("");

    const res = await verifyOTPVisa(codeNumber, email);
    if (res.data.isValid === true) {
      isVerified(true);
    } else {
      alert("Invalid code");
      isVerified(false);
    }
  }

  return (
    <div>
      <p className="mt-2 text-center text-[18px] font-semibold md:text-[32px]">{languageData?.verificationTitle}</p>
      <p className="saira text-center text-[14px] font-semibold">{languageData?.verificationSubTitle}</p>
      <p className="saira gradient-linkDouble mt-4 text-center text-[14px] font-medium">0:45</p>
      <CodeInput setCode={setCode} code={code} />
      <div className="mt-4 flex justify-center">
        <button
          onClick={(e) => verifyOTP()}
          className={`saira w-full  max-w-[600px]  border-[2px] bg-white py-2 text-[18px] font-semibold text-black  ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
        >
          {languageData?.withdrawContinue}
        </button>
      </div>
    </div>
  );
}

export default OTPVerifyVisa;
