import React, { useState } from "react";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import { Link } from "react-router-dom";
import { withdrawPaxum } from "../../../Requests/withdraw";
import { useQueryClient } from "@tanstack/react-query";

function PaxumFlow({ languageData, setConfirm, setError }) {
  const { design } = useDesign();
  const queryClient = useQueryClient();

  const [paxumID, setPaxumID] = useState("");
  const [checkmark, setCheckmark] = useState(false);

  const handlePaxumFlow = async () => {
    if (!checkmark) return;
    if (paxumID === "") return alert("Please enter your Paxum ID");

    try {
      const res = await withdrawPaxum({ paxumID });
      setConfirm(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    queryClient.invalidateQueries("userData");
  };

  return (
    <div className={` relative m-auto  w-full max-w-[600px] rounded-[12px]  px-2 lg:px-4`}>
      <p className="my-2 text-center text-[18px] font-semibold md:text-[32px] lg:leading-[40px]">{languageData?.paxumFlowTitle}</p>
      <p className="saira mb-1 mt-3 text-[12px]">{languageData?.paxumFlowInput}</p>
      <input
        value={paxumID}
        onChange={(e) => setPaxumID(e.target.value)}
        className="saira h-[45px] w-full rounded-[12px] bg-white px-3  text-[#1E1E1E] outline-none focus:ring-0"
        placeholder={languageData?.paxumFlowPlaceholder}
        type="text"
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
          {languageData?.paxumFlowCheckbox}{" "}
        </label>
        <input type="checkbox" name="notification" id="notification" hidden onChange={(e) => setCheckmark(!checkmark)} />
      </div>
      <div className="mt-2 flex justify-center lg:mt-4">
        <button
          disabled={!checkmark}
          onClick={(e) => handlePaxumFlow()}
          className={`saira w-full  border-[2px]  bg-white py-2 text-[18px] font-semibold text-black outline-none ${checkmark ? "opacity-[1]" : "opacity-[0.5]"} ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
        >
          {languageData?.paxumFlowBtn}
        </button>
      </div>
      <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === "0" ? "rounded-[30px]" : " rounded-[12px]"} mt-4 px-8 py-1`}>
        <p className={`saira text-center text-[14px] font-normal leading-3`}>{languageData?.paxumFlowLink1}</p>
        <div className="flex justify-center">
          <Link to={"https://portal.paxum.com/register/personal"} target="_blank">
            <p className={`saira gradient-link cursor-pointer text-center text-[14px] font-normal `}>{languageData?.paxumFlowLink2}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaxumFlow;
