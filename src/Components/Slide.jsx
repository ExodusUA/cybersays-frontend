import React from "react";
import netflix from "../images/product.jpeg";
import coin from "../images/coin.png";
var mixpanel = require("mixpanel-browser");
import moengage from "@moengage/web-sdk";
function Slide({ languageData, targetURL, uid }) {
  const [isLinkCopied, setIsLinkCopied] = React.useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(targetURL);
    setIsLinkCopied(true);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  }

  return (
    <div className="m-auto mt-[10px] max-w-[1135px] rounded-[14px] border-[1px] border-[#088CD9] bg-gray/25 px-5 py-2 md:mt-[50px] md:py-5">
      <div className="flex items-center gap-3">
        <img className=" h-[45px]" src={netflix} alt="Image" />
        <p className="text-[17px] font-bold text-white sm:text-[18px]">{languageData?.OfferTitle}</p>
      </div>

      <div className="gradient-line my-4 h-[2px] w-full"></div>

      <ul>
        {languageData?.listTexts.map((item, index) => (
          <li key={index} className="mb-1 flex items-center gap-1">
            <p className="font-regular saira text-[18px] text-white">
              <span className="mr-1">✅ </span> {item}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="flex gap-2">
            <img src={coin} className="h-6 w-6" alt="Coin" />
            <p className="text-[18px] font-bold text-white">1,000</p>
          </div>
          <p className="saira text-[20px]">{languageData?.TreatCoins}</p>
        </div>

        <div>
          <a
            href={targetURL}
            onClick={(e) => {
              let utmData = {
                utm_source: window.localStorage.getItem("utm_source"),
                utm_medium: window.localStorage.getItem("utm_medium"),
                utm_campaign: window.localStorage.getItem("utm_campaign"),
                utm_term: window.localStorage.getItem("utm_term"),
                utm_content: window.localStorage.getItem("utm_content"),
              };

              e.preventDefault();
              mixpanel.track("cyber_says_click", {
                distinct_id: uid,
                ...utmData,
              });
              moengage.track_event("cyber_says_click", {
                distinct_id: uid,
                ...utmData,
              });
              window.location.replace(targetURL);
            }}
          >
            {" "}
            <button className="saira gradient px-[25px] py-[10px] text-[20px]">{languageData?.OfferButton}</button>
          </a>
          <p onClick={(e) => handleCopy()} className={`saira mt-2 cursor-pointer text-center text-[16px] text-white underline duration-300 ${isLinkCopied === true ? "text-[#088CD9]" : "text-white"}`}>
            {isLinkCopied === true ? languageData?.LinkCopied : languageData?.CopyLink}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
