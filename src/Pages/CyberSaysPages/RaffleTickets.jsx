import React, { useEffect, useState } from "react";
import newlogoCyber from "../../images/NewDesign/newLogo_main.png";
import logoCyber from "../../images/CyberSaysPage/logoMain.png";
import hero from "../../images/CyberSaysPage/heroRaffle.png";
import TimeCounter from "../../Components/TimeCounter";
import notReady from "../../images/CyberSaysPage/offerFalse.png";
import { Link } from "react-router-dom";
import { useDesign } from "../../Helpers/Design/DesignContext";
import doubleIcon from "../../images/NewDesign/doubleIcon.svg";
import mixpanel from "mixpanel-browser";
import weekendCoin from "../../images/CyberSaysPage/weekendCoin.png";
import moengage from "@moengage/web-sdk";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";

function RaffleTickets({ setTourModal, user, PartnerURL, languageData, setWinModal, scrollToPage, setWinTicketModal }) {
  let { language } = useLanguage();
  const { design } = useDesign();

  const [isOpen, setIsOpen] = useState(false);

  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [lastTask, setLastTask] = useState(0);

  useEffect(() => {
    if (user === null) return;
    let tasks = JSON.parse(user?.completed_tasks);
    if (tasks === null) {
      setLastTask(0);
      return;
    } else {
      let sortedTasks = tasks.sort((a, b) => a - b);
      let lastTask = sortedTasks[sortedTasks.length - 1];
      setLastTask(lastTask);

      if (tasks.includes(4)) {
        setIsTaskCompleted(true);
      }
    }
  }, [user]);

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const shareRefferalLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
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

  const getButtonMarkup = (task) => {
    switch (task) {
      case 0:
        return (
          <button
            onClick={(e) => scrollToPage(1)}
            className={`saira flex w-full  items-center justify-center border-[2px] border-[#FFED63] bg-white text-[18px] font-semibold text-black md:w-[380px] ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
          >
            {languageData?.homepageBtn1}
            <img className="ml-1" src={doubleIcon} alt="doubleIcon" />
          </button>
        );
      case 1:
        return (
          <button
            onClick={(e) => scrollToPage(1)}
            className={`saira w-full border-[2px]  border-[#FFED63] bg-white text-[18px] font-semibold text-black mobMax:text-[16px] md:w-[380px] ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
          >
            {languageData?.homepageBtn2}
          </button>
        );
      case 2:
        return (
          <button
            onClick={(e) => scrollToPage(1)}
            className={`saira w-full border-[2px]  border-[#FFED63] bg-white text-[18px] font-semibold text-black mobMax:text-[16px] md:w-[380px] ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
          >
            {languageData?.homepageBtn3}
          </button>
        );
      case 3:
        return (
          <button
            onClick={(e) => scrollToPage(1)}
            className={`saira w-full border-[2px]  border-[#FFED63] bg-white  text-[18px] font-semibold text-black md:w-[380px] ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
          >
            {languageData?.homepageBtn4}
          </button>
        );
    }
  };

  const handlePartnerRedirect = () => {
    window.location.replace(PartnerURL);
    window.open(window.location.href + "#vegas", "_blank");
  };

  return (
    <div
      className={` h-screen w-screen ${design === "0" ? "bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] md:bg-[url(./images/CyberSaysPage/bg-raffle.jpg)]" : "bg-[#200527]"}  relative z-10 bg-cover bg-center bg-no-repeat mac-center:flex`}
      onClick={() => setIsOpen(false)}
    >
      <div className="m-auto  max-w-[970px] px-4 pt-[57px] mac-center:!pt-0 md:pt-[80px]">
        <img
          className="mac-img-bottom  relative z-50 m-auto w-[170px] mac2:w-[170px] se:mb-[3%] se:w-[170px]  iphone:mb-[1%] iphone:w-[240px] md:w-[320px] lg:mb-[-10px]"
          src={design === "0" ? logoCyber : newlogoCyber}
          alt="logoCyber"
        />

        <div className="competitionSE flex flex-col-reverse iphone2:mt-[40px]  md:mt-[0px]">
          <div className="iphone:mt-[50px] md:mt-0">
            <img
              className={`se:w-[380px] iphone:w-[395px]  ${design === "0" ? "raffleTicketsSE2 mac-img-width2 mb-6 mt-[-110px] mac2:mt-[-110px] iphone:mt-[-30px] md:w-[770px]" : "raffleTicketsSE mac-img-width mt-[-110px] mac2:mt-[-110px] iphone:mt-[-30px] md:w-[990px]"} m-auto mt-[0px] mob:mt-0 mac2:mt-[-50px] se:mt-[-30px] iphone:mt-[-90px] md:mt-[-90px]  `}
              src={design === "0" ? hero : require("../../images/NewDesign/RaffleTicket/hero_image.png")}
              alt="heroRaffle"
            />

            <div
              className={`flex rounded-[14px] bg-[#EAEAEA] bg-opacity-20 px-2 py-1 text-center backdrop-blur-md md:py-3   lg:rounded-[30px]  ${isTaskCompleted === false && " mac-overflow-fix se:mt-[-30px] iphone:mt-[-20px] md:mt-[-125px]"} z-1 relative justify-center`}
            >
              {isTaskCompleted === false ? (
                <div className="w-full">
                  <p
                    className={`  raffleTicketOverBtn saira text-center ${language !== "en" && "!text-[14px] leading-5 iphone:!text-[16px]"} text-[18px] font-medium mac:!mb-1 se:mb-0 iphone:mb-2 iphone:px-4  md:text-center md:!text-[22px] `}
                  >
                    {languageData?.raffleUnderBtn}{" "}
                  </p>
                  <div className="flex w-full items-start justify-between ">
                    <div className="w-full text-center">
                      <Link
                        onClick={(e) => {
                          // e.preventDefault()
                          // handlePartnerRedirect()
                        }}
                        target="_blank"
                        to={PartnerURL}
                      >
                        <button
                          className={` saira  w-[97%] border-[2px]  border-[#FFED63] bg-white p-0 text-[14px] font-semibold text-black md:w-[95%] md:py-2 lg:text-[18px] ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
                        >
                          {languageData?.raffleLeftBtn}
                        </button>
                      </Link>
                      <p className="saira mt-1 text-[12px] font-medium md:text-[14px]">
                        {languageData?.raffleLeftSection1} {languageData?.raffleLeftSection2}
                      </p>
                    </div>
                    <div className="w-full text-center">
                      <button
                        onClick={(e) => shareRefferalLink()}
                        className={` saira  w-[97%] border-[2px]  border-[#FFED63] bg-white p-0 !text-[14px] font-semibold text-black md:w-[95%] md:py-2 lg:!text-[18px] ${language !== "en" && "px-2 !text-[12px]"} ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
                      >
                        {isLinkCopied === false ? languageData?.raffleRightBtn : languageData?.raffleRightBtn2}
                      </button>
                      <p className="saira mt-1 text-[12px] font-medium md:text-[14px]">
                        {languageData?.raffleRightSection1} {languageData?.raffleRightSection2}
                      </p>
                    </div>
                  </div>
                  <p className="saira cursor-pointer pt-1 text-center text-[10px] md:text-[12px]">
                    {languageData?.raffleRulesDesc} -{" "}
                    <span
                      onClick={(e) => {
                        setWinModal(true);
                        mixpanel.track("raffle_rules", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          user_email: user?.email,
                          page_name: "Vegas Weekend",
                        });
                        moengage.track_event("raffle_rules", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          user_email: user?.email,
                          page_name: "Vegas Weekend",
                        });
                      }}
                      className="saira cursor-pointer text-center text-[10px] underline md:text-[12px]"
                    >
                      {languageData?.raffleRulesDescSpan}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div>
                    <p className="saira mx-4 text-center text-[18px] font-medium mac:!mb-1 se:mb-0 iphone:mb-2 md:text-center  md:text-[24px]">{languageData?.raffleUnderBtn} </p>

                    <div className="flex justify-center">{getButtonMarkup(lastTask)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {isTaskCompleted === false ? (
            <div className=" z-1  relative text-center mac2:!mt-[-20px] md:mx-0 md:py-2 ">
              <div className="raffleTicketsTitlePX mt-[10px] rounded-[14px] bg-[#EAEAEA] bg-opacity-20 px-1 py-2 backdrop-blur-md md:mt-0 lg:rounded-[24px] lg:px-[60px]">
                <p className={` raffleTicketsTitle ${language !== "en" && "!text-[14px]"} !text-[18px] font-semibold  leading-5 md:!text-[32px] lg:leading-9`}>{languageData?.raffleTitle1}</p>
                <div className="flex justify-around sm:justify-center">
                  <p
                    onClick={(e) => setTourModal(true)}
                    className={`${design === "0" ? "bg-[#FFED63]" : "gradient-tourToggle"} ${language !== "en" && "mr-1 px-1 text-[11px] leading-3"} saira mt-2 cursor-pointer rounded-[14px] px-2 py-[4px] text-[12px] font-semibold text-[#1E1E1E] sm:mr-6 lg:px-4 lg:text-[14px]`}
                  >
                    {languageData?.raffleSubTitleLink2}
                  </p>
                  <p
                    onClick={(e) => setWinModal(true)}
                    className={`${design === "0" ? "bg-[#FFED63]" : "gradient-tourToggle"} ${language !== "en" && "px-2 text-[11px] leading-3"} saira mt-2 cursor-pointer rounded-[14px] px-2 py-[4px] text-[12px] font-semibold text-[#1E1E1E] lg:px-4 lg:text-[14px] `}
                  >
                    {languageData?.raffleSubTitleLink}
                  </p>
                </div>
              </div>
              {/*
                                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[14px] lg:rounded-[30px] text-center flex  mt-1 justify-center items-center'>
                                    <p className='text-[16px] lg:text-[32px] font-semibold mr-2'>Vegas weekend</p>
                                    <img className={`w-[32px] sm:w-[50px] h-[32px] sm:h-[50px] cursor-pointer `} src={design === '0' ? weekendCoin : require('../../images/NewDesign/header/cup.png')} alt="weekendCoin" />
                                </div>
*/}
              {/* 
                               <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[14px] lg:rounded-[24px] mt-2 py-1 lg:py-3'>
                                    
                                    <p className='text-[12px] md:text-[14px] font-medium saira flex justify-center items-center mx-4 iphone:leading-4 se:leading-[14px]'>
                                        {languageData?.raffleSubTitle1}
                                        <img className='w-[12px] md:w-[24px] h-[12px] md:h-[24px] mr-[2px]' src={ready} alt="ready" />


                                        <div className='relative'>
                                            
                                            <svg onClick={e => setToolTip(true)} className=' cursor-pointer relative' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_55928)">
                                                    <path d="M5.9 9H7.1V5.4H5.9V9ZM6.5 4.2C6.67 4.2 6.8126 4.1424 6.9278 4.0272C7.043 3.912 7.1004 3.7696 7.1 3.6C7.1 3.43 7.0424 3.2876 6.9272 3.1728C6.812 3.058 6.6696 3.0004 6.5 3C6.33 3 6.1876 3.0576 6.0728 3.1728C5.958 3.288 5.9004 3.4304 5.9 3.6C5.9 3.77 5.9576 3.9126 6.0728 4.0278C6.188 4.143 6.3304 4.2004 6.5 4.2ZM6.5 12C5.67 12 4.89 11.8424 4.16 11.5272C3.43 11.212 2.795 10.7846 2.255 10.245C1.715 9.705 1.2876 9.07 0.9728 8.34C0.658 7.61 0.5004 6.83 0.5 6C0.5 5.17 0.6576 4.39 0.9728 3.66C1.288 2.93 1.7154 2.295 2.255 1.755C2.795 1.215 3.43 0.7876 4.16 0.4728C4.89 0.158 5.67 0.0004 6.5 0C7.33 0 8.11 0.1576 8.84 0.4728C9.57 0.788 10.205 1.2154 10.745 1.755C11.285 2.295 11.7126 2.93 12.0278 3.66C12.343 4.39 12.5004 5.17 12.5 6C12.5 6.83 12.3424 7.61 12.0272 8.34C11.712 9.07 11.2846 9.705 10.745 10.245C10.205 10.785 9.57 11.2126 8.84 11.5278C8.11 11.843 7.33 12.0004 6.5 12ZM6.5 10.8C7.84 10.8 8.975 10.335 9.905 9.405C10.835 8.475 11.3 7.34 11.3 6C11.3 4.66 10.835 3.525 9.905 2.595C8.975 1.665 7.84 1.2 6.5 1.2C5.16 1.2 4.025 1.665 3.095 2.595C2.165 3.525 1.7 4.66 1.7 6C1.7 7.34 2.165 8.475 3.095 9.405C4.025 10.335 5.16 10.8 6.5 10.8Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_55928">
                                                        <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>

                                            </svg>
                                            {
                                                toolTip && <svg className=" absolute top-[10px] right-[-14px]" width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 0L37.3205 36L2.67949 36L20 0Z" fill="#F5F5F5" />
                                                </svg>
                                            }

                                            {
                                                toolTip && <ToolTip1 languageData={languageData} setToolTip={setToolTip} />
                                            }


                                        </div>

                                    </p>
                                    
                                </div>
                                */}
              {/*<p  className={`text-[14px] font-medium underline cursor-pointer saira  ${design === '0' ? 'text-[#FFED63]' : 'gradient-link'}`}>{languageData?.raffleLink1}</p>*/}
              {/*
                                <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Hello world!"
                                    data-tooltip-place="top"
                                >
                                    ◕‿‿◕
                                </a>
                                <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!">
                                    ◕‿‿◕
                                </a>
                                <Tooltip id="my-tooltip" className='!rounded-full' />
                                */}
            </div>
          ) : (
            <div className="rounded-[14px] bg-[#EAEAEA] bg-opacity-20 text-center backdrop-blur-sm md:mx-0 md:rounded-[100px] md:py-2">
              <p className="font-semibold mac2:!text-[24px] se:text-[14px] iphone:text-[18px] md:text-[32px]">{languageData?.raffleTitle2}</p>
              <p className="saira flex items-center justify-center text-[12px] font-medium se:leading-[14px] md:my-1 md:text-[14px]">
                {languageData?.raffleSubTitle2}
                <img className="mx-[2px] h-[12px] w-[12px] md:ml-1 md:h-[24px] md:w-[24px]" src={notReady} alt="notReady" />
                <a data-tooltip-id="my-tooltip-inline">
                  <svg className=" cursor-pointer md:h-[24px] md:w-[24px]" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_55928)">
                      <path
                        d="M5.9 9H7.1V5.4H5.9V9ZM6.5 4.2C6.67 4.2 6.8126 4.1424 6.9278 4.0272C7.043 3.912 7.1004 3.7696 7.1 3.6C7.1 3.43 7.0424 3.2876 6.9272 3.1728C6.812 3.058 6.6696 3.0004 6.5 3C6.33 3 6.1876 3.0576 6.0728 3.1728C5.958 3.288 5.9004 3.4304 5.9 3.6C5.9 3.77 5.9576 3.9126 6.0728 4.0278C6.188 4.143 6.3304 4.2004 6.5 4.2ZM6.5 12C5.67 12 4.89 11.8424 4.16 11.5272C3.43 11.212 2.795 10.7846 2.255 10.245C1.715 9.705 1.2876 9.07 0.9728 8.34C0.658 7.61 0.5004 6.83 0.5 6C0.5 5.17 0.6576 4.39 0.9728 3.66C1.288 2.93 1.7154 2.295 2.255 1.755C2.795 1.215 3.43 0.7876 4.16 0.4728C4.89 0.158 5.67 0.0004 6.5 0C7.33 0 8.11 0.1576 8.84 0.4728C9.57 0.788 10.205 1.2154 10.745 1.755C11.285 2.295 11.7126 2.93 12.0278 3.66C12.343 4.39 12.5004 5.17 12.5 6C12.5 6.83 12.3424 7.61 12.0272 8.34C11.712 9.07 11.2846 9.705 10.745 10.245C10.205 10.785 9.57 11.2126 8.84 11.5278C8.11 11.843 7.33 12.0004 6.5 12ZM6.5 10.8C7.84 10.8 8.975 10.335 9.905 9.405C10.835 8.475 11.3 7.34 11.3 6C11.3 4.66 10.835 3.525 9.905 2.595C8.975 1.665 7.84 1.2 6.5 1.2C5.16 1.2 4.025 1.665 3.095 2.595C2.165 3.525 1.7 4.66 1.7 6C1.7 7.34 2.165 8.475 3.095 9.405C4.025 10.335 5.16 10.8 6.5 10.8Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_55928">
                        <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </p>
              <p className={`saira cursor-pointer text-[14px] font-medium underline  ${design === "0" ? "text-[#FFED63]" : "gradient-link"}`}>{languageData?.raffleLink2}</p>
            </div>
          )}
        </div>
        <div className="contentForCompetitions mt-1 rounded-[14px] bg-[#EAEAEA] bg-opacity-20 py-1 backdrop-blur-md lg:rounded-[24px] ">
          <p className={`saira text-center ${language !== "en" && "!text-[10px]"} !text-[11px] font-semibold text-[#FBC215] md:!text-[14px] `}>{languageData?.raffleBotLink1}</p>

          <p
            onClick={(e) => {
              setWinTicketModal(true);
              mixpanel.track("how_vegas_weekend", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? "Yes" : "No",
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                user_email: user?.email,
                page_name: "Vegas Weekend",
              });
              moengage.track_event("how_vegas_weekend", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? "Yes" : "No",
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                user_email: user?.email,
                page_name: "Vegas Weekend",
              });
            }}
            className={`saira cursor-pointer text-center text-[11px] font-semibold text-[#FD9C36]  md:text-[14px]`}
          >
            🤑<span className="saira text-[12px] text-[#FD9C36] underline md:text-[14px]">{languageData?.raffleBotLink2}</span> 🤑{" "}
          </p>
        </div>
        {/*
                <p className='text-[14px] md:text-[16px] saira text-center cursor-pointer py-1'>
                    {languageData?.raffleRulesDesc}
                    <span onClick={e => setWinModal(true)} className={`saira  underline ml-2 ${design === '0' ? 'text-[#FFED63]' : 'gradient-link'}`}>{languageData?.raffleRulesLink}</span>
                </p>
                */}
        <div className="absolute left-1/2 m-auto flex w-full -translate-x-1/2 transform justify-center  se:bottom-[140px] iphone2:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] ">
          <TimeCounter setWinModal={setWinModal} left={"m-auto"} leftTitle={"text-center"} title={languageData?.timeCounterTitle} languageData={languageData} block={"block"} />
        </div>
      </div>
    </div>
  );
}

export default RaffleTickets;
