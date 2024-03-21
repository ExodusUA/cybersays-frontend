import React, { useState } from "react";
import close from "../images/CyberSaysPage/closeMenu.png";
import { useDesign } from "../Helpers/Design/DesignContext";
import LeaderboardList from "./LeaderboardList";

function LeaderboardModal({ setOpen, leaderboardData, loading, languageData, user }) {
  const { design } = useDesign();

  const [dayOffset, setDayOffset] = useState(0);

  const handleClick = (offset) => {
    let newOffset = dayOffset + offset;
    if (newOffset < -2) {
      newOffset = 0;
    } else if (newOffset > 0) {
      newOffset = -2;
    }
    setDayOffset(newOffset);
  };

  const getDateLabel = (offset) => {
    if (offset === 0) {
      return <LeaderboardList leaderboardData={leaderboardData.todayUsers} languageData={languageData} day={languageData?.leaderSheetToday} />;
    } else if (offset === -1) {
      return <LeaderboardList leaderboardData={leaderboardData.yesterdayUsers} languageData={languageData} day={languageData?.leaderSheetYesterday} />;
    } else if (offset === -2) {
      return <LeaderboardList leaderboardData={leaderboardData.dayBeforeYesterdayUsers} languageData={languageData} day={languageData?.leaderSheetDayAgo} />;
    }
  };

  return (
    <div className="fixed top-0 z-[99999] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md ">
      <div className="m-auto max-w-[600px]">
        <div className="flex justify-end md:my-4">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../images/NewDesign/closeBtn.png")} alt="close" />
        </div>
        {leaderboardData?.userRankData && (
          <div className="m-auto flex max-w-[380px] justify-between rounded-[12px] bg-[#EAEAEA]  bg-opacity-20 p-1 px-1 backdrop-blur-md md:max-w-[100%]">
            <div className=" m-auto text-left leading-4">
              <p className="gradient-linkDouble saira text-[14px] font-bold lg:text-[18px]">
                {languageData?.leaderSheetYou} <span className="saira text-[14px] font-bold lg:text-[18px]"> #{leaderboardData?.userRankData?.position || 0},</span> {languageData?.leaderSheetPoints}{" "}
                <span className="saira text-[14px] font-bold lg:text-[18px]">{Number(user?.points).toFixed(0)}</span>
              </p>
            </div>
          </div>
        )}
        {loading === true ? (
          "Loading..."
        ) : (
          <>
            {leaderboardData.userData && (
              <div className={`bg-[#EAEAEA] ${design === "0" ? "bg-opacity-40 " : "bg-opacity-20 "} mx-3 mt-3 flex items-center justify-between rounded-[30px] px-4 py-2 text-center backdrop-blur-lg sm:mt-10`}>
                <p className={`saira text-[16px] font-bold  ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble"}`}>#{leaderboardData?.userData.position}</p>
                <div className="leading-3">
                  <p className={`saira mt-[-3px] text-[12px] font-bold text-[#FFED63] md:text-[14px] ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble"}`}>{leaderboardData?.userData?.points?.toFixed(0)}</p>
                  <p className="saira mt-[3px] text-[12px] font-medium md:text-[14px]">{languageData?.leaderboardsPoints}</p>
                </div>
              </div>
            )}
            <p className={` mt-3 text-center text-[18px] font-semibold md:text-[32px]`}>{languageData?.leaderboardsTitle}</p>
            <div className="my-4 flex items-center justify-between">
              <svg
                onClick={() => handleClick(-1)}
                className={`cursor-pointer ${dayOffset === -2 ? "pointer-events-none opacity-[0.4]" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 22L7 12L17 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="saira gradient-linkDouble text-[16px] font-bold"></p>
              <svg
                onClick={() => handleClick(1)}
                className={`cursor-pointer ${dayOffset === 0 ? "pointer-events-none opacity-[0.4]" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 2L17 12L7 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>{getDateLabel(dayOffset)}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default LeaderboardModal;
