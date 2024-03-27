import React, { useState, useEffect } from "react";
import logoCyber from "../../images/CyberSaysPage/logoMain.png";
import infoAPI from "../../Requests/info";
import { Link } from "react-router-dom";
import { useDesign } from "../../Helpers/Design/DesignContext";
import newlogoCyber from "../../images/NewDesign/newLogo_main.png";
import crown from "../../images/CyberSaysPage/crown1st.png";
import TimeCounterDay from "../../Components/TimeCounterDay";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";

function Competition({ PartnerURL, user, setLeaderboardModal, loading, setLoading, leaderboardData, setLeaderboardData, siteData, languageData, setRulesModal, setSocialLink }) {
  const { design } = useDesign();
  let { language } = useLanguage();
  useEffect(() => {
    const fetchData = async () => {
      const res = await infoAPI.getLeaderboardData();
      console.log(res.data);
      setLeaderboardData(res.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const shareRefferalLink = () => {
    mixpanel.track("refer_friends", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
    });
    moengage.track_event("refer_friends", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
    });

    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Sharing",
          url: "/" + user?.referral_code,
        })
        .then(() => console.log("Successful share! 🎉"));
    } else {
      window.navigator.clipboard.writeText(window.location.host + "/" + user?.referral_code);
      setIsLinkCopied(true);

      setTimeout(() => {
        setIsLinkCopied(false);
      }, 3000);
    }
  };

  const handlePartnerRedirect = () => {
    window.location.replace(PartnerURL);
    window.open(window.location.href + "#competition", "_blank");
  };

  return (
    <div
      className={` h-screen w-screen ${design === "0" ? "bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] md:bg-[url(./images/CyberSaysPage/bg-raffle.jpg)]" : "bg-[#200527]"} relative z-10 bg-cover bg-center bg-no-repeat mac-center:flex`}
    >
      <div className="m-auto  max-w-[1170px] px-4 pt-[57px] mac-center:!pt-0 md:pt-[80px]">
        <img
          className="double-img-width  relative z-50 m-auto w-[170px] se:mb-[-3%] se:w-[170px] iphone:mb-[-13px] iphone:w-[240px]  md:w-[320px] lg:mb-[-10px]"
          src={design === "0" ? logoCyber : newlogoCyber}
          alt="logoCyber"
        />
        <div className=" competitionSE contentForCompetitions m-auto rounded-[14px] px-2 text-center mac:!py-0 mac-center:w-[600px]  se:py-1 iphone2:mt-[40px] sm:max-w-[600px] md:mt-[60px]">
          <p className={`text-center  ${language === "es" && "text-[14px]"} mb-2 flex items-center  justify-center gap-2 text-[16px] font-semibold lg:text-[30px]`}>
            {languageData?.competitionTitle}
            <span className="saira competitionPlaceBG rounded-[8px] border-[2px] border-[#FCBC1B] px-2 text-[12px] lg:rounded-[12px] lg:text-[24px]">$69</span>
            {languageData?.competitionTitle2}
          </p>
        </div>
        <div className="m-auto rounded-[14px] bg-[#EAEAEA] bg-opacity-10 px-2 text-center backdrop-blur-lg  mac-center:w-[600px] se:py-1 iphone:py-2 sm:max-w-[600px] ">
          {/*<p className='text-center text-[14px] sm:text-[32px] mac:!text-[24px] font-semibold'>{languageData?.competitionTitle} {siteData?.currentDay}</p>*/}

          {leaderboardData?.userRankData && (
            <div className=" m-auto mt-1 flex  max-w-[380px] justify-between rounded-[12px] p-1 px-1 md:max-w-[100%]">
              <div className=" m-auto text-left leading-4">
                <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble"} saira ${language === "es" && "text-[12px]"} text-[12px] font-bold  lg:text-[14px]`}>
                  {languageData?.leaderSheetYou}{" "}
                  <span className="saira text-[12px]  font-bold">
                    {" "}
                    <span className="saira competitionPlaceBG ml-1 mr-[20px] rounded-[8px] border-[2px] border-[#FCBC1B] px-2 text-[12px]">#{user?.points == 0 ? 0 : leaderboardData?.userRankData?.user_rank || 0}</span>
                  </span>{" "}
                  {languageData?.leaderSheetPoints} <span className="saira competitionPlaceBG ml-1 rounded-[8px] border-[2px] border-[#FCBC1B] px-2 text-[12px]">{Number(user?.points).toFixed(0)}</span>
                </p>
              </div>
            </div>
          )}

          {loading === false && (
            <div className="m-auto flex w-full max-w-[300px]  items-center justify-around sm:max-w-[350px] lg:mt-2">
              {
                <div className="mt-[20px] ">
                  {/*<img className='w-[26px] h-[26px] sm:w-[40px] sm:h-[40px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto mt-[2px]' src={cup2} alt="cup2" />*/}
                  <div className="m-auto mt-[2px] flex h-[47px] w-[47px] items-center justify-center  rounded-full border-[3px] border-[#5F7571] bg-[#A1B3B0] sm:h-[54px] sm:w-[54px]">
                    <p className="saira text-[10px] font-bold text-white lg:text-[12px]">$69</p>
                  </div>
                  <p className="saira mt-1 text-[8px] font-bold leading-3">#2</p>
                  <p className={`saira text-[12px] font-medium  ${design === "0" ? "text-[#FFED63]" : "text-[#A1B3B0]"}`}>
                    {leaderboardData.todayUsers[1]?.points || 0} <span className="saira text-[12px] font-medium">{languageData?.competitionPoints}</span>
                  </p>
                </div>
              }
              <div>
                <div className="flex justify-center">
                  <img className="h-[28px] w-[28px]" src={crown} alt="crown" />
                </div>
                {/* <img className='w-[34px] h-[34px] sm:w-[56px] sm:h-[56px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto mt-[2px]' src={cup1} alt="cup2" />*/}
                <div className="m-auto mt-[2px] flex h-[50px] w-[50px] items-center justify-center  rounded-full border-[3px] border-[#E5A200] bg-[#F8C100] sm:h-[64px] sm:w-[64px]">
                  <p className="saira text-[14px] font-bold text-white lg:text-[18px]">$69</p>
                </div>
                <p className="saira mt-1 text-center text-[8px] font-bold leading-3">#1</p>
                <p className={`saira mt-1 text-[12px] font-medium ${design === "0" ? "text-[#FFED63]" : "text-[#F2BB02]"}`}>
                  {" "}
                  {leaderboardData.todayUsers[0]?.points || 0} <span className="saira text-[12px] font-medium">{languageData?.competitionPoints}</span>
                </p>
              </div>
              {
                <div className="mt-[20px] ">
                  {/*<img className='w-[26px] h-[26px] sm:w-[40px] sm:h-[40px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto mt-[2px]' src={cup3} alt="cup2" />*/}
                  <div className="m-auto mt-[2px] flex h-[47px] w-[47px] items-center justify-center  rounded-full border-[3px] border-[#DC6900] bg-[#F28300] sm:h-[54px] sm:w-[54px]">
                    <p className="saira text-[10px] font-bold text-white lg:text-[12px]">$6.90</p>
                  </div>
                  <p className="saira mt-1 text-[8px] font-bold leading-3">#3 - #10</p>
                  <p className={`saira mt-1 text-[12px] font-medium ${design === "0" ? "text-[#FFED63]" : "text-[#E87001]"}`}>
                    {leaderboardData.todayUsers[2]?.points || 0} <span className="saira text-[12px] font-medium">{languageData?.competitionPoints}</span>
                  </p>
                </div>
              }
            </div>
          )}
          {/*<p className='text-center text-[12px] sm:text-[12px] font-medium my-1 lg:my-0'>{languageData?.competitionOverBtn}</p>*/}
          <div className="m-auto mt-2 flex sm:mt-1 sm:max-w-[400px] md:max-w-[unset]">
            <div className="w-full text-center md:mx-2">
              <Link
                target="_blank"
                onClick={(e) => {
                  mixpanel.track("enjoy_Partner", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,
                    page_name: "Refferals",
                  });
                  moengage.track_event("enjoy_Partner", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,
                    page_name: "Refferals",
                  });
                  //e.preventDefault()
                  //handlePartnerRedirect()
                }}
                to={PartnerURL}
              >
                <button
                  className={` border-[2px]  border-[#FFED63] bg-white text-black ${language === "es" && "!text-[10px]"} saira w-[98%] p-2 text-[11px] font-semibold sm:px-6 md:w-full lg:text-[18px] ${design === "0" ? " rounded-[50px] border-[2px] bg-white p-2 sm:px-6 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
                >
                  {languageData?.competitionLeftBtn}
                </button>
              </Link>
              <p className="saira mt-1 text-[12px] font-medium sm:text-[12px]">
                {languageData?.competitionLeftSection1} {languageData?.competitionLeftSection2}
              </p>
            </div>
            <div className="w-full text-center md:mx-2">
              <button
                onClick={(e) => shareRefferalLink()}
                className={` border-[2px]  border-[#FFED63] bg-white  text-black ${language === "es" && "!text-[10px]"}  saira w-[98%] text-[11px] font-semibold md:w-full  lg:text-[18px]  ${design === "0" ? " rounded-[50px] border-[2px] bg-white p-2 sm:px-6 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
              >
                {isLinkCopied === false ? languageData?.competitionRightBtn : languageData?.competitionRightBtn2}
              </button>
              <p className="saira mt-1 text-[12px] font-medium sm:text-[12px]">
                {languageData?.competitionRightSection1} {languageData?.competitionRightSection2}
              </p>
            </div>
          </div>
          {/*<p className={`text-center text-[12px] sm:text-[14px]  saira font-semibold mt-2 ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} `}>{languageData?.competitionSubtitle}</p>*/}
        </div>
        <div className="mt-2 flex justify-center">
          <p
            className={`saira cursor-pointer text-center text-[12px] font-semibold underline mac:!mt-0 se:mt-0 iphone:mt-0  sm:text-[14px] ${design === "0" ? "text-white" : "gradient-link "}`}
            onClick={(e) => {
              setLeaderboardModal(true);
              mixpanel.track("leaderboard", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? "Yes" : "No",
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: "Refferals",
              });
              moengage.track_event("leaderboard", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? "Yes" : "No",
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: "Refferals",
              });
            }}
          >
            {languageData?.competitionRightLink1}
          </p>
        </div>
        <div className="flex justify-center">
          <p onClick={(e) => setRulesModal(true)} className={`saira cursor-pointer text-center  text-[12px] font-semibold underline se:mt-2  sm:text-[14px] ${design === "0" ? "text-[#FFED63]" : "gradient-link "}`}>
            {languageData?.competitionRightRules}
          </p>
        </div>

        <div className="absolute left-1/2 m-auto flex w-full -translate-x-1/2 transform justify-center  se:bottom-[140px] iphone2:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] ">
          <TimeCounterDay setSocialLink={setSocialLink} left={"m-auto"} leftTitle={"text-center"} title={languageData?.timeCounterTitle} languageData={languageData} block={"block"} user={user} />
        </div>
      </div>
    </div>
  );
}

export default Competition;
