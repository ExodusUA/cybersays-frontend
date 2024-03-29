import React, { useEffect, useState } from "react";
import logoCyber from "../../images/CyberSaysPage/logoMain.png";
import newlogoCyber from "../../images/NewDesign/newLogo_main.png";
import girlOK from "../../images/NewDesign/Homepage/message3.png";
import TimeCounter from "../../Components/TimeCounter";
import { Link } from "react-router-dom";
import { useDesign } from "../../Helpers/Design/DesignContext";
import doubleIcon from "../../images/NewDesign/doubleIcon.svg";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";

function Homepage({ user, PartnerURL, languageData, scrollToPage }) {
  let swiperRef;
  const dataTitle = [
    {
      desc: languageData?.homepageTitle1,
    },
    {
      desc: languageData?.homepageTitle2,
    },
    {
      desc: languageData?.homepageTitle3,
    },
  ];

  const { language } = useLanguage();

  const { design } = useDesign();

  const [lastTask, setLastTask] = useState(0);

  const handleEvent = (e) => {
    mixpanel.track("Homepage_button_click", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      language: language,
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      number_referrals: user?.referral_id ? user?.referral_id.length : 0,
    });

    moengage.track_event("Homepage_button_click", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      language: language,
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      number_referrals: user?.referral_id ? user?.referral_id.length : 0,
    });
  };

  const getButtonMarkup = (task) => {
    switch (task) {
      case 0:
      case null:
      case undefined:
        return (
          <Link to={PartnerURL} target="_blank">
            <button
              onClick={(e) => handleEvent()}
              className={`saira    flex  w-full items-center justify-center border-[#FFED63] text-[18px] font-semibold text-black ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
            >
              {languageData?.homepageBtnNew}
              {/*<img className="ml-1" src={doubleIcon} alt="doubleIcon" />*/}
            </button>
          </Link>
        );
      case 1:
        return (
          <Link to={PartnerURL} target="_blank">
            <button
              onClick={(e) => handleEvent()}
              className={`saira  flex   w-full  items-center justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black  ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-2 md:py-2"}`}
            >
              {languageData?.homepageBtnNew}
            </button>
          </Link>
        );
      case 2:
        return (
          <Link to={PartnerURL} target="_blank">
            <button
              onClick={(e) => handleEvent()}
              className={`saira   flex   w-full  items-center justify-center border-[#FFED63] bg-white text-[14px] font-semibold text-black lg:text-[18px]  ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-2 md:py-2"}`}
            >
              {languageData?.homepageBtnNew}
            </button>
          </Link>
        );
      case 3:
        return (
          <Link to={PartnerURL} target="_blank">
            <button
              onClick={(e) => handleEvent()}
              className={`saira  flex   w-full  items-center justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-2 md:py-2"}`}
            >
              {languageData?.homepageFinishCTA}
              <img className="ml-1" src={doubleIcon} alt="doubleIcon" />
            </button>
          </Link>
        );
    }
  };

  useEffect(() => {
    if (user === null) return setLastTask(0);

    let tasks = JSON.parse(user?.completed_tasks);
    if (tasks === null) return setLastTask(0);
    let lastTask = tasks[tasks.length - 1];
    setLastTask(lastTask);
  }, [user]);

  return (
    <div
      className={` h-screen w-screen ${design === "0" ? "bg-[url(./images/CyberSaysPage/mobile-bg-homepage.jpg)] md:bg-[url(./images/CyberSaysPage/bg-homepage.jpg)]" : " bg-[#200527]"}  relative z-10 bg-cover bg-center bg-no-repeat mac-center:flex`}
    >
      <div className="m-auto  max-w-[1170px] px-4 pb-12 pt-[57px] mac-center:!pt-0 md:pt-[80px]">
        <div className="m-auto max-w-[300px]">
          <p className=" text-[18px] font-semibold md:text-[32px]"></p>
        </div>
        <img className="relative  z-50 m-auto w-[170px] mac2:w-[170px] se:mb-[0px] se:w-[170px] iphone:mb-[-10px]  iphone:w-[240px] md:w-[320px]" src={design === "0" ? logoCyber : newlogoCyber} alt="logoCyber" />
        <div>
          <div className="homepageSE contentHomepage mt-0 items-end justify-between iphone2:mt-[30px] md:mt-[70px] md:items-center lg:flex">
            <div className="mb-2 flex w-full items-center lg:hidden">
              <div className="m-auto text-center">
                <p className=" text-[14px] font-semibold">{languageData?.homepageNewTitle1}</p>
                <p className="m-auto text-[14px] font-semibold">{languageData?.homepageNewTitle2}</p>
                <p className="m-auto text-[14px] font-semibold">{languageData?.homepageNewTitle3}</p>
                <p className="m-auto text-[14px] font-semibold">{languageData?.homepageNewTitle4}</p>
              </div>
              {/*
              <div
                className="buttonPrevText w-[60px]"
                onClick={(e) => {
                  mixpanel.track("arrow_text_click", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    language: language,
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,

                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                  });
                  moengage.track_event("arrow_text_click", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    language: language,
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,
                    language: language,
                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                  });
                }}
              >
                <svg className=" mr-[10px] w-[20px]  cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M22.6665 29.3333L9.33326 16L22.6665 2.66676" stroke="url(#paint0_linear_518_191)" stroke-width="2.66665" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_518_191" x1="15.9999" y1="29.3333" x2="15.9999" y2="2.66676" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FAD604" />
                      <stop offset="1" stop-color="#FE804D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".buttonPrevText",
                  nextEl: ".buttonNextText",
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
              >
                {dataTitle.map((item, index) => (
                  <SwiperSlide key={item}>
                    <p className="font-semibold se:text-[16px] iphone:my-3 iphone:text-[18px]">{item.desc}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                className="buttonNextText w-[60px]"
                onClick={(e) => {
                  mixpanel.track("arrow_text_click", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    language: language,
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,

                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                  });
                  moengage.track_event("arrow_text_click", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    language: language,
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,
                    language: language,
                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                  });
                }}
              >
                <svg className=" ml-[20px] w-[20px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M9.3335 2.66675L22.6667 16L9.33349 29.3332" stroke="url(#paint0_linear_518_196)" stroke-width="2.66665" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_518_196" x1="16.0001" y1="2.66675" x2="16.0001" y2="29.3332" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FAD604" />
                      <stop offset="1" stop-color="#FE804D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              */}
            </div>

            <div
              className={`relative ${design === "0" ? " rounded-[24px] border-[#FFD700] lg:rounded-[32px]" : "  homepageMainBlock rounded-[16px] border-[#A2DBF0]"}  m-auto border-2 px-1 pb-1 pt-8  lg:m-[unset] lg:pt-0`}
            >
              <div className="relative m-auto flex w-full max-w-[380px] items-center md:max-w-[470px]">
                <img
                  className={`m-auto ${design === "0" ? "mt-[-25px] w-[380px] md:w-[470px] lg:mt-[10px]" : "mt-[-30px] w-[380px] md:mt-0 md:w-[470px]"}`}
                  src={design === "0" ? girlOK : require("../../images/NewDesign/Homepage/message2.png")}
                  alt="girlOK"
                />
                {/*<Link to={PartnerURL} target='_blank'><img className={`w-[160px] md:w-[240px] md:mt-5 mac:!mt-6 mb-10 ${design === '0' ? 'block' : 'hidden'}`} src={PartnerLogo} alt="PartnerLogo" /></Link>*/}
                <p
                  className={` saira absolute font-medium ${design === "0" ? "right-[10px] mt-[35px] w-[135px] text-[16px] leading-6 text-[#FFED63] iphone:right-[25px] lg:right-[10px] lg:mt-[90px] lg:w-[200px] lg:text-[20px] lg:leading-8" : "gradient-linkDouble right-[10px] mt-[20px] w-[185px] text-[22px] leading-6 iphone:right-[30px] lg:right-[10px] lg:mt-[50px] lg:w-[280px] lg:text-[27px] lg:leading-10"}`}
                >
                  {languageData?.homepageMessageTitle}
                </p>
              </div>
              <div className=" relative ">{getButtonMarkup(lastTask)}</div>
            </div>
            <div className="mb-4 ml-1 w-[200px] sm:w-[unset] md:mb-[unset] md:ml-10">
              <div className="hidden w-full max-w-[300px] items-center md:max-w-[580px] lg:block">
                <p className="text-[20px] font-semibold">{languageData?.homepageNewTitle1}</p>
                <p className="text-[20px] font-semibold">{languageData?.homepageNewTitle2}</p>
                <p className="text-[20px] font-semibold">{languageData?.homepageNewTitle3}</p>
                <p className="text-[20px] font-semibold">{languageData?.homepageNewTitle4}</p>
              </div>
              {/*
              <div className="hidden w-full max-w-[300px] items-center md:max-w-[580px] lg:flex">
                <div className="buttonPrev2 mr-[20px] cursor-pointer">
                  <img className="h-[32px] w-[100px]" src={arrowTextLeft} alt="arrowTextLeft" />
                </div>
                
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    prevEl: ".buttonPrev2",
                    nextEl: ".buttonNext2",
                  }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                  }}
                >
                  {dataTitle.map((item, index) => (
                    <SwiperSlide key={item}>
                      <p className="text-[16px] font-semibold md:text-[32px] lg:leading-9">{item.desc}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <div className="buttonNext2 ml-[20px] cursor-pointer">
                  <img className="h-[32px] w-[100px]" src={arrowTextRight} alt="arrowTextRight" />
                </div>
              </div>
*/}
              {/*
                        <div className='md:block hidden mt-[100px] mac:mt-[150px]'>
                            <TimeCounter title={languageData?.timeCounterTitle2} languageData={languageData} block={'hidden'}  />
                        </div>
                        */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 m-auto flex w-full -translate-x-1/2 transform justify-center  se:bottom-[140px] iphone2:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] ">
        <TimeCounter title={languageData?.timeCounterTitle} left={"m-auto"} leftTitle={"text-center"} languageData={languageData} block={"hidden"} />
      </div>
    </div>
  );
}

export default Homepage;
