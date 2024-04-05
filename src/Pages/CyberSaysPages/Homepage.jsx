import React, { useEffect, useState } from "react";
import logoCyber from "../../images/NewDesign/homepageLogo.png";
import newlogoCyber from "../../images/NewDesign/newLogo_main.png";
import girlOK from "../../images/NewDesign/Homepage/message3.png";
import TimeCounter from "../../Components/TimeCounter";
import { Link } from "react-router-dom";
import { useDesign } from "../../Helpers/Design/DesignContext";
import doubleIcon from "../../images/NewDesign/doubleIcon.svg";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";
import point1 from "../../images/NewDesign/Homepage/point_1.png";
import point2 from "../../images/NewDesign/Homepage/point_2.png";
import point3 from "../../images/NewDesign/Homepage/point_3.png";
import logoIM from "../../images/NewDesign/Homepage/logoIm2.png";
import stepsDesk from "../../images/NewDesign/homepageStepDesk.svg";
import stepsPT from "../../images/NewDesign/homepageStepPT.svg";
import stepsES from "../../images/NewDesign/homepageStepES.svg";

function Homepage({ user, PartnerURL, languageData, scrollToPage, userCountry }) {
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
          <Link to={"/choose-promotions"}>
            <button
              onClick={(e) => handleEvent()}
              className={`saira    flex  w-full items-center justify-center border-[#FFED63] text-[18px] font-semibold text-black ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
            >
              {languageData?.homepageBtnNew1}
              {/*<img className="ml-1" src={doubleIcon} alt="doubleIcon" />*/}
            </button>
          </Link>
        );
      case 1:
        return (
          <Link to={"/choose-promotions"}>
            <button
              onClick={(e) => handleEvent()}
              className={`saira  flex   w-full  items-center justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black  ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-2 md:py-2"}`}
            >
              {languageData?.homepageBtnNew1}
            </button>
          </Link>
        );
      case 2:
        return (
          <Link to={"/choose-promotions"}>
            <button
              onClick={(e) => handleEvent()}
              className={`saira   flex   w-full  items-center justify-center border-[#FFED63] bg-white text-[14px] font-semibold text-black lg:text-[18px]  ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-2 md:py-2"}`}
            >
              {languageData?.homepageBtnNew1}
            </button>
          </Link>
        );
      case 3:
        return (
          <Link to={"/choose-promotions"}>
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
        <img className="relative  z-50 m-auto w-[170px] mac2:w-[170px] se:mb-[0px] se:w-[170px]   iphone:w-[240px] md:w-[450px]" src={logoCyber} alt="logoCyber" />
        <div>
          <div className="homepageSE contentHomepage relative   mt-0 items-end iphone2:mt-[30px] md:mt-[70px] md:items-center lg:flex">
            <div className="mb-2 flex w-full items-center lg:hidden">
              {/*
              <div className=" text-center">
                <div className="flex items-start">
                  <img className="mr-2 w-[17px]" src={point1} alt="point1" />
                  <p className="saira text-left text-[14px] font-semibold">
                    {languageData?.homepageNewPoint1}
                    {languageData?.homepageNewPoint1_1}
                    <img className="inline-image ml-2 !w-[75px]" src={logoIM} alt="logoIM" />

                  </p>
                </div>
                <div className="flex items-center ">
                  <img className="mr-2 w-[17px]" src={point2} alt="point2" />
                  <p className="saira text-[14px] font-semibold">{languageData?.homepageNewPoint2}</p>
                </div>
                <div className="mt-[5px] flex items-center">
                  <img className="mr-2 w-[17px]" src={point3} alt="point3" />
                  <p className="saira text-[14px] font-semibold">{languageData?.homepageNewPoint3}</p>
                </div>
              </div>
*/}
              <div className="relative  block w-full sm:hidden">
                <img
                  className="m-auto mt-1 w-full max-w-[300px] sm:max-w-[500px] 2xl:max-w-[630px]"
                  src={(language === "en" && stepsDesk) || (language === "es" && stepsES) || (language === "pt" && stepsPT)}
                  alt="stepsDesk"
                />
                <div className="m-auto flex w-full max-w-[350px] items-center justify-between sm:max-w-[550px] sm:items-start 2xl:max-w-[720px] 2xl:items-center ">
                  <p className="saira w-[150px] text-center text-[12px] font-extrabold sm:pr-[20px] sm:text-[14px] sm:leading-4 2xl:pr-0 2xl:text-[24px] 2xl:leading-6">
                    {languageData?.homepageStep1}
                    {userCountry === "BR" || userCountry === "UA" ? " R$25" : " $5"}
                  </p>
                  <p className="saira w-[200px] pl-[10px] text-center text-[12px] font-extrabold sm:text-[14px] sm:leading-4 2xl:pl-[30px] 2xl:text-[24px] 2xl:leading-6">{languageData?.homepageStep2}</p>
                  <p className="saira w-[200px] text-center text-[12px] font-extrabold sm:pl-[20px] sm:text-[14px] sm:leading-4 2xl:text-[24px] 2xl:leading-6">
                    {languageData?.homepageStep3} {userCountry === "BR" || userCountry === "UA" ? " R$50" : " $10"}
                  </p>
                  <p className="saira w-[200px] pl-[10px] text-center text-[12px] font-extrabold sm:pl-[40px] sm:text-[14px] sm:leading-4 2xl:text-[24px] 2xl:leading-6">
                    {languageData?.homepageStep4} {userCountry === "BR" || userCountry === "UA" ? " R$100" : " $20"}
                  </p>
                </div>
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
              className={`relative ${design === "0" ? " rounded-[24px] border-[#FFD700] lg:rounded-[32px]" : "  homepageMainBlock rounded-[16px] border-[#A2DBF0]"}  m-auto mt-24 border-2 px-1 pb-1  pt-8 sm:mt-0 lg:m-[unset] lg:pt-0`}
            >
              <div className=" relative m-auto flex w-full max-w-[380px] items-center md:max-w-[470px]">
                <img
                  className={`m-auto ${design === "0" ? "mt-[-25px] w-[380px] md:w-[470px] lg:mt-[10px]" : "mt-[-30px] w-[380px] md:mt-0 md:w-[470px]"}`}
                  src={design === "0" ? girlOK : require("../../images/NewDesign/Homepage/message2.png")}
                  alt="girlOK"
                />
                {/*<Link to={PartnerURL} target='_blank'><img className={`w-[160px] md:w-[240px] md:mt-5 mac:!mt-6 mb-10 ${design === '0' ? 'block' : 'hidden'}`} src={PartnerLogo} alt="PartnerLogo" /></Link>*/}
                <p
                  className={` saira absolute font-medium ${design === "0" ? " right-[20px] mt-[35px] w-[110px] text-[14px] leading-4 text-[#FFED63] iphone:right-[25px] lg:right-[40px] lg:mt-[90px] lg:w-[150px] lg:text-[20px] lg:leading-7" : `gradient-linkDouble  right-[20px] mt-[10px] w-[200px] text-[18px] leading-5  iphone:right-[30px] lg:mt-[60px] lg:w-[270px] lg:text-[22px] lg:leading-7 ${language === "es" ? "mac:!right-[-15px] lg:right-[-35px]" : "lg:right-[20px]"}`}`}
                >
                  {languageData?.homepageMessageTitle}
                </p>
              </div>
              <div className=" relative ">{getButtonMarkup(lastTask)}</div>
            </div>

            <div className="mb-4 ml-1 hidden w-[200px] sm:w-[unset] md:mb-[unset]  md:ml-[100px]  lg:block">
              {/*
              <div className=" w-full max-w-[300px] items-center md:max-w-[560px]">
                <div className="flex items-start">
                  <img className="mr-2 w-[33px]" src={point1} alt="point1" />
                  <p className={`saira font-semibold ${language === "es" ? "text-[22px]" : "text-[24px]"}`}>
                    {languageData?.homepageNewPoint1}
                    <br />
                    {languageData?.homepageNewPoint1_1}
                    <img className="inline-image ml-2 w-[130px]" src={logoIM} alt="logoIM" />
                  </p>
                </div>
                <div className="mt-[30px] flex items-center">
                  <img className="mr-2 w-[33px]" src={point2} alt="point2" />
                  <p className={`saira font-semibold ${language === "es" ? "text-[22px]" : "text-[24px]"}`}>{languageData?.homepageNewPoint2}</p>
                </div>
                <div className="mt-[50px] flex items-center">
                  <img className="mr-2 w-[33px]" src={point3} alt="point3" />
                  <p className={`saira font-semibold ${language === "es" ? "text-[22px]" : "text-[24px]"}`}>{languageData?.homepageNewPoint3}</p>
                </div>
              </div>
              */}
              <div className=" hidden justify-center sm:flex">
                <div>
                  <p className="saira m-auto flex w-[49px] justify-center rounded-full border-[2px] border-[#FFED63] bg-[#610057] text-[20px] font-semibold">1</p>
                  <p className="saira m-auto w-[150px] text-center text-[26px] font-extrabold leading-7">
                    {languageData?.homepageStep1}
                    {userCountry === "BR" || userCountry === "UA" ? " R$25" : " $5"}
                  </p>
                  <hr className="m-auto my-2 h-[40px] w-[2px] border-none bg-[#FF00E5]" />
                  <p className="saira m-auto flex w-[49px] justify-center rounded-full border-[2px] border-[#FFED63] bg-[#610057] text-[20px] font-semibold">2</p>
                  <p className="saira m-auto w-[150px] text-center text-[26px] font-extrabold leading-7">{languageData?.homepageStep2}</p>
                  <svg className="m-auto mt-4" width="125" height="28" viewBox="0 0 125 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M40.5133 2.94656C41.0361 2.64474 41.2152 1.97627 40.9134 1.4535C40.6115 0.930733 39.9431 0.751619 39.4203 1.05344L40.5133 2.94656ZM0.943956 23.6374C0.787721 24.2205 1.13374 24.8198 1.71682 24.9761L11.2186 27.522C11.8016 27.6783 12.401 27.3323 12.5572 26.7492C12.7134 26.1661 12.3674 25.5668 11.7843 25.4105L3.33834 23.1475L5.60144 14.7015C5.75767 14.1184 5.41165 13.5191 4.82858 13.3628C4.2455 13.2066 3.64618 13.5526 3.48994 14.1357L0.943956 23.6374ZM34.6744 3.79348C34.1516 4.0953 33.9725 4.76377 34.2744 5.28654C34.5762 5.80931 35.2446 5.98842 35.7674 5.6866L34.6744 3.79348ZM26.2756 11.1667C26.7984 10.8649 26.9775 10.1964 26.6757 9.67362C26.3739 9.15085 25.7054 8.97174 25.1826 9.27356L26.2756 11.1667ZM15.6909 14.7536C15.1681 15.0555 14.989 15.7239 15.2908 16.2467C15.5926 16.7695 16.2611 16.9486 16.7839 16.6468L15.6909 14.7536ZM7.29209 22.1268C7.81486 21.825 7.99398 21.1565 7.69215 20.6338C7.39033 20.111 6.72187 19.9319 6.1991 20.2337L7.29209 22.1268ZM39.4203 1.05344L34.6744 3.79348L35.7674 5.6866L40.5133 2.94656L39.4203 1.05344ZM25.1826 9.27356L15.6909 14.7536L16.7839 16.6468L26.2756 11.1667L25.1826 9.27356ZM6.1991 20.2337L1.45321 22.9738L2.5462 24.8669L7.29209 22.1268L6.1991 20.2337Z"
                      fill="#FF00E5"
                    />
                    <path
                      d="M84.4535 2.94656C83.9307 2.64474 83.7516 1.97627 84.0534 1.4535C84.3553 0.930733 85.0237 0.751619 85.5465 1.05344L84.4535 2.94656ZM124.023 23.6374C124.179 24.2205 123.833 24.8198 123.25 24.9761L113.748 27.522C113.165 27.6783 112.566 27.3323 112.41 26.7492C112.253 26.1661 112.599 25.5668 113.182 25.4105L121.628 23.1475L119.365 14.7015C119.209 14.1184 119.555 13.5191 120.138 13.3628C120.721 13.2066 121.321 13.5526 121.477 14.1357L124.023 23.6374ZM90.2924 3.79348C90.8152 4.0953 90.9943 4.76377 90.6924 5.28654C90.3906 5.80931 89.7222 5.98842 89.1994 5.6866L90.2924 3.79348ZM98.6912 11.1667C98.1684 10.8649 97.9893 10.1964 98.2911 9.67362C98.5929 9.15085 99.2614 8.97174 99.7842 9.27356L98.6912 11.1667ZM109.276 14.7536C109.799 15.0555 109.978 15.7239 109.676 16.2467C109.374 16.7695 108.706 16.9486 108.183 16.6468L109.276 14.7536ZM117.675 22.1268C117.152 21.825 116.973 21.1565 117.275 20.6338C117.576 20.111 118.245 19.9319 118.768 20.2337L117.675 22.1268ZM85.5465 1.05344L90.2924 3.79348L89.1994 5.6866L84.4535 2.94656L85.5465 1.05344ZM99.7842 9.27356L109.276 14.7536L108.183 16.6468L98.6912 11.1667L99.7842 9.27356ZM118.768 20.2337L123.514 22.9738L122.421 24.8669L117.675 22.1268L118.768 20.2337Z"
                      fill="#FF00E5"
                    />
                  </svg>
                  <div className="mt-3 flex justify-between">
                    <div>
                      <p className="saira m-auto flex w-[80px] justify-center rounded-full border-[2px] border-[#FFED63] bg-[#610057] px-2 text-[20px] font-semibold">200%</p>
                      <p className="saira mt-1 w-[200px] text-center text-[26px] font-extrabold leading-7">
                        {languageData?.homepageStep3} {userCountry === "BR" || userCountry === "UA" ? " R$50" : " $10"}
                      </p>
                    </div>
                    <div>
                      <p className="saira m-auto flex w-[80px] justify-center rounded-full border-[2px] border-[#FFED63] bg-[#610057] px-2 text-[20px] font-semibold">400%</p>
                      <p className="saira mt-1 w-[200px] text-center text-[26px] font-extrabold leading-7">
                        {languageData?.homepageStep4} {userCountry === "BR" || userCountry === "UA" ? " R$100" : " $20"}
                      </p>
                    </div>
                  </div>
                </div>
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
          {/*
          <div className="flex items-start max-w-[320px] sm:max-w-[600px] w-full m-auto mt-2">
            <div className="m-auto w-[150px] ">
              <p className="w-[24px] h-[24px] bg-[#610057] border-[1px] border-[#FFED63] rounded-full flex items-center justify-center m-auto text-[10px] saira">1</p>

            </div>
            <hr className="max-w-[100px] h-[2px] w-full bg-[#FF00E5] border-none mt-[10px] mx-1" />
            <div className="m-auto w-[150px] ">
              <p className="w-[24px] h-[24px] bg-[#610057] border-[1px] border-[#FFED63] rounded-full flex items-center justify-center m-auto  text-[10px] saira">2</p>

            </div>
            <hr className="max-w-[100px] h-[2px] w-full bg-[#FF00E5] border-none mt-[10px] mx-1" />
            <div className="m-auto w-[150px] ">
              <p className="w-[24px] h-[24px] bg-[#610057] border-[1px] border-[#FFED63] rounded-full flex items-center justify-center m-auto  text-[10px] saira">3</p>

            </div>
            <hr className="max-w-[100px] h-[2px] w-full bg-[#FF00E5] border-none mt-[10px] mx-1" />
            <div className="m-auto w-[150px] ">
              <p className="w-[24px] h-[24px] bg-[#610057] border-[1px] border-[#FFED63] rounded-full flex items-center justify-center m-auto  text-[10px] saira">4</p>

            </div>
          </div>
          <div className="flex justify-between items-center max-w-[350px] sm:max-w-[590px] w-full m-auto"> 
            <p className="text-[12px] sm:text-[14px] saira font-extrabold text-center max-w-[100px] ml-1">{languageData?.homepageStep1}</p>
            <p className="text-[12px] sm:text-[14px] saira font-extrabold text-center max-w-[100px]">{languageData?.homepageStep2}</p>
            <p className="text-[12px] sm:text-[14px] saira font-extrabold text-center max-w-[100px]">{languageData?.homepageStep3}</p>
            <p className="text-[12px] sm:text-[14px] saira font-extrabold text-center max-w-[100px]">{languageData?.homepageStep4}</p>
          </div>
          */}
        </div>
      </div>
      <div className="absolute left-1/2 m-auto flex w-full -translate-x-1/2 transform justify-center  se:bottom-[140px] iphone2:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] ">
        {
          // <TimeCounter title={languageData?.timeCounterTitle} left={"m-auto"} leftTitle={"text-center"} languageData={languageData} block={"hidden"} />
        }
      </div>
    </div>
  );
}

export default Homepage;
