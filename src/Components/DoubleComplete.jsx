import React, { useState } from "react";
import close from "../images/CyberSaysPage/closeMenu.png";
import { useDesign } from "../Helpers/Design/DesignContext";
import congrats from "../images/CyberSaysPage/congrats.png";

function DoubleComplete({ setOpen, languageData, user, PartnerURL }) {
  const [pdfLoading, setPdfLoading] = useState(false);
  const [isLinkShared, setIsLinkShared] = useState(false);

  const { design } = useDesign();

  const shareRefferalLink = () => {
    if (navigator.share) {
      navigator
        .share({
          url: "/" + user?.referral_code,
        })
        .then(() => console.log("Successful share! 🎉"));
    } else {
      window.navigator.clipboard.writeText(window.location.host + "/" + user?.referral_code);
      setIsLinkShared(true);

      setTimeout(() => {
        setIsLinkShared(false);
      }, 3000);
    }
  };
  const [linkCopied, setLinkCopied] = useState(false);
  const copyPartnerLink = () => {
    navigator.clipboard.writeText(PartnerURL);
    setLinkCopied(true);
  };
  return (
    <div className="fixed top-0 z-[99999] flex h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md">
      <div className="relative m-auto w-full max-w-[600px]">
        <div className="absolute right-0 top-[-110px] flex justify-end md:my-4 lg:top-[-70px] lg:mb-10">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../images/NewDesign/closeBtn.png")} alt="close" />
        </div>
        <div className="  m-auto max-w-[600px] ">
          <p className="mx-2 text-center text-[24px] font-semibold leading-8 md:text-[32px] lg:leading-9">
            {languageData?.doubleCompleteTitle}{" "}
            {/* <span className=' truncate text-[24px] md:text-[32px] font-semibold ml-1 block lg:inline'>
                        {user?.email}
                    </span> {languageData?.doubleCompleteTitleSpan}*/}
          </p>
          <img className="m-auto my-4 mt-2 w-full max-w-[345px] md:max-w-[400px]" src={congrats} alt="congrats" />
          <p className="saira  text-center text-[20px] font-medium leading-6 lg:leading-[unset]">{languageData?.doubleCompleteSubTitle}</p>
          <div className="mx-2 flex justify-center">
            <button
              onClick={(e) => {
                shareRefferalLink();
                copyPartnerLink();
              }}
              className={` w-full border-[2px]  bg-white ${design === "0" ? " rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"} saira absolute mx-2 mt-2 flex justify-center py-2 text-[18px] font-semibold text-black lg:mt-4`}
            >
              {linkCopied === true ? languageData?.CopyLinkDone : languageData?.doubleCompleteBtn}
              <svg className="ml-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.5L14 5.5V9.5C7 10.5 4 15.5 3 20.5C5.5 17 9 15.4 14 15.4V19.5L21 12.5Z" fill="#1E1E1E" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoubleComplete;
