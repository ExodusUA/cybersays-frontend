import React, { useEffect } from "react";
import { useDesign } from "../Helpers/Design/DesignContext";
import oneSt from "../images/CyberSaysPage/cup1st.png";
import twoSt from "../images/CyberSaysPage/cup2st.png";
import threeSt from "../images/CyberSaysPage/cup3st.png";
import crown from "../images/CyberSaysPage/crown1st.png";
import no_avatar from "../images/CyberSaysPage/no_avatar.png";
import LeaderboardUser from "./LeaderboardUser";

function LeaderboardList({ leaderboardData, languageData, day }) {
  const { design } = useDesign();

  useEffect(() => {
    console.log("leaderboardData", leaderboardData);
  }, [leaderboardData]);

  const displayedUsers = leaderboardData.slice(0, 10);

  const maskEmail = (email) => {
    ///mask email like exo*******@gmail.com

    let emailArray = email.split("@");
    let maskedEmail = emailArray[0].substring(0, 3) + "******@" + emailArray[1];

    return maskedEmail;
  };

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-[-40px] -translate-x-1/2 transform">
        <p className="saira gradient-linkDouble select-none text-[16px] font-bold">{day}</p>
      </div>
      <div className=" flex items-end justify-center">
        {leaderboardData[1] && (
          <div className="mr-[-15px] w-[80px] md:mr-[30px] md:w-[100px]">
            <p className="saira text-center text-[16px] font-bold">2</p>
            <img className={`m-auto h-[80px] w-[80px] rounded-full border-[2px] object-cover ${design === "0" ? "border-[#FFED63]" : "border-[#A1B3B0]"}`} src={twoSt} alt="twoSt" />
            <p className="saira mx-2 truncate text-center text-[12px] font-medium md:mx-1 md:text-[14px]">{maskEmail(leaderboardData[1].email)}</p>
            <p className={`saira text-center text-[14px] font-medium md:text-[16px] ${design === "0" ? "text-[#FFED63]" : "text-[#A1B3B0]"}`}>$69</p>
            <p className="saira text-center text-[14px] font-medium text-[#FFED63] md:text-[14px]">
              {Number(leaderboardData[1].points).toFixed(0)} {languageData?.leaderboardsPoints}{" "}
            </p>
          </div>
        )}

        {leaderboardData[0] && (
          <div className="relative z-20 mb-[20px] w-[120px] md:w-[140px]">
            <p className="saira text-center text-[16px] font-bold">1</p>
            <img className="m-auto mb-2 h-[32px] w-[32px]" src={crown} alt="crown" />
            <img className={`m-auto h-[120px] w-[120px] rounded-full border-[2px] border-[#FFED63] object-cover ${design === "0" ? "border-[#FFED63]" : "border-[#F2BB02]"}`} src={oneSt} alt="twoSt" />
            <p className="saira mx-3 truncate text-center text-[12px] font-medium md:mx-2 md:text-[14px]">{maskEmail(leaderboardData[0].email)}</p>
            <p className={`saira text-center text-[14px] font-medium text-[#FFED63] md:text-[16px] ${design === "0" ? "text-[#FFED63]" : "text-[#F2BB02]"}`}>$69</p>
            <p className="saira text-center text-[14px] font-medium text-[#FFED63] md:text-[14px]">
              {Number(leaderboardData[0].points).toFixed(0)} {languageData?.leaderboardsPoints}{" "}
            </p>
          </div>
        )}

        {leaderboardData[2] && (
          <div className="relative z-10 ml-[-15px] w-[80px] md:ml-[30px] md:w-[100px]">
            <p className="saira text-center text-[16px] font-bold">3</p>
            <img className={`m-auto h-[80px] w-[80px] rounded-full border-[2px] border-[#FFED63] object-cover ${design === "0" ? "border-[#FFED63]" : "!border-[#E87001]"}`} src={threeSt} alt="twoSt" />
            <p className="saira mx-2 truncate text-center text-[12px] font-medium md:mx-1 md:text-[14px]">{maskEmail(leaderboardData[2].email)}</p>
            <p className={`saira text-center text-[14px] font-medium text-[#FFED63] md:text-[16px] ${design === "0" ? "text-[#FFED63]" : "text-[#E87001]"}`}>$6.90</p>
            <p className="saira text-center text-[14px] font-medium text-[#FFED63] md:text-[14px]">
              {Number(leaderboardData[2].points).toFixed(0)} {languageData?.leaderboardsPoints}{" "}
            </p>
          </div>
        )}
      </div>
      <div className="leaderboardsHeight leaderboardsScroll h-[240px] overflow-y-auto iphone:h-[unset] md:h-[250px] lg:overflow-y-visible">
        {leaderboardData.length < 4 ? (
          <div className="my-8 flex w-full justify-center">
            <p>{languageData?.leaderboardsNotUser}</p>
          </div>
        ) : (
          displayedUsers.slice(3).map((user, index) => {
            console.log("user", user);
            return <LeaderboardUser user={user} index={index} languageData={languageData} maskEmail={maskEmail} />;
          })
        )}
      </div>
    </div>
  );
}

export default LeaderboardList;
