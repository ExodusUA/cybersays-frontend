import React, { useState } from "react";
import close from "../images/CyberSaysPage/closeMenu.png";
import { useDesign } from "../Helpers/Design/DesignContext";
import { Link } from "react-router-dom";
import PartnerLogo from "../images/CyberSaysPage/PartnerLogo.png";
import doubleIcon from "../images/NewDesign/doubleIcon.svg";

function WinTicketModal({ setOpen, languageData, user, scrollToPage }) {
  const [pdfLoading, setPdfLoading] = useState(false);

  const { design } = useDesign();

  return (
    <div className="fixed top-0 z-[99999] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md lg:flex">
      <div className="relative m-auto max-w-[600px]">
        <div className="right-0 top-[-70px] flex justify-end md:my-4 lg:absolute lg:mb-10">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../images/NewDesign/closeBtn.png")} alt="close" />
        </div>
        <div>
          <p className=" m-auto text-center text-[18px] font-semibold lg:text-[24px]">{languageData?.winTicketTitle}</p>
          <p className="gradient-linkDouble saira text-center text-[14px] font-medium leading-4 ">{languageData?.winTicketSubTitle}</p>
          <div className="mt-2 rounded-[14px] bg-[#EAEAEA] bg-opacity-40 p-2 backdrop-blur-md lg:rounded-[24px] ">
            <div className="flex items-center">
              <img className="mr-2 w-[100px]" src={PartnerLogo} alt="PartnerLogo" />
              <p className="saira w-[200px] text-[16px] font-semibold">{languageData?.winTicketLiTitle}</p>
            </div>
            <ul className="ml-[20px] mt-1 list-disc">
              <li className="saira text-[12px] font-medium lg:text-[14px]">{languageData?.winTicketLi1}</li>
              <li className="saira text-[12px] font-medium lg:text-[14px]">{languageData?.winTicketLi2}</li>
              <li className="saira text-[12px] font-medium lg:text-[14px]">{languageData?.winTicketLi3}</li>
            </ul>
          </div>

          <button
            onClick={(e) => {
              scrollToPage(1);
              setOpen(false);
            }}
            className={`mod:text-[18px] saira m-auto   mt-3  flex w-full items-center justify-center border-[#FFED63] text-[16px] font-semibold text-black sm:w-[350px] ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
          >
            {languageData?.winTicketBtn}
            <img className="ml-1" src={doubleIcon} alt="doubleIcon" />
          </button>

          <p className="gradient-linkDouble mt-2 text-center text-[18px] font-semibold  lg:text-[24px]">{languageData?.winTicketEnd}</p>
        </div>
      </div>
      <div className=" absolute bottom-2 left-1/2 w-full max-w-[235px] -translate-x-1/2 transform">
        <Link onClick={(e) => setOpen(false)} to="/terms" target="_blank">
          <p className="gradient-link mt-2 text-center text-[12px] font-semibold text-[#D9D9D9] underline ">{languageData?.winTicketLink}</p>
        </Link>
      </div>
    </div>
  );
}

export default WinTicketModal;
