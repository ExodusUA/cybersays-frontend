import React from "react";
import close from "../../../images/CyberSaysPage/closeMenu.png";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import { withdrawImLive } from "../../../Requests/withdraw";
import mixpanel from "mixpanel-browser";

function ImLiveFlow({ languageData, setConfirm, setFlowStarted, setError, closeAll }) {
  const { design } = useDesign();

  const handleImLiveFlow = async () => {
    try {
      const res = await withdrawImLive();

      mixpanel.track("Withdraw_request", { method: "imLive" });

      setConfirm(true);
    } catch (error) {
      alert(error.response.data.message);
      setError(true);
    }
  };
  return (
    <div className="fixed top-0 z-[60] flex h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md">
      <div className=" m-auto w-full max-w-[600px]">
        <div className={` rounded-[20px] bg-black bg-opacity-60 p-4 backdrop-blur-xl ${design === "0" ? " border-[#FFD700]" : "  border-[#A2DBF0]"} border`}>
          <div className="mb-2 flex justify-end">
            <img onClick={(e) => closeAll(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
          </div>

          <h1 className="w-full text-center text-[18px] font-semibold">{languageData?.confirmLiveDesc}</h1>

          <div className="flex items-center gap-4">
            <button
              onClick={(e) => closeAll(false)}
              className={`saira mt-4  w-full max-w-[350px] border bg-transparent p-2 px-6 py-2 text-[18px] font-semibold text-white ${design === "0" ? "  rounded-[50px] border-[#FFD700]" : " rounded-[12px] border-[#A2DBF0]"}`}
            >
              {languageData?.logoutConfirmNo}
            </button>
            <button
              onClick={(e) => handleImLiveFlow()}
              className={`saira mt-4  w-full max-w-[350px] bg-[white] p-2 px-6 py-2 text-[18px] font-semibold text-[#5f5f5f] ${design === "0" ? "  rounded-[50px] border-[2px] bg-white " : " gradient-homepageBtn rounded-[12px] border-none"}`}
            >
              {languageData?.logoutConfirmYes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImLiveFlow;
