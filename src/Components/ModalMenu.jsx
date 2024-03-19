import React, { useEffect, useState } from "react";
import close from "../images/CyberSaysPage/closeMenu.png";
import link1 from "../images/CyberSaysPage/mobileMenuLink/link1.png";
import link2 from "../images/CyberSaysPage/mobileMenuLink/link2.png";
import link3 from "../images/CyberSaysPage/mobileMenuLink/link3.png";
import link4 from "../images/CyberSaysPage/mobileMenuLink/link4.png";
import link5 from "../images/CyberSaysPage/mobileMenuLink/link5.png";
import link6 from "../images/CyberSaysPage/mobileMenuLink/link6.png";
import link7 from "../images/CyberSaysPage/mobileMenuLink/link7.png";
import link8 from "../images/CyberSaysPage/mobileMenuLink/link8.png";
import link9 from "../images/CyberSaysPage/mobileMenuLink/link9.png";
import link10 from "../images/CyberSaysPage/mobileMenuLink/link10.png";
import link11 from "../images/NewDesign/modalMenu/link11.png";
import link12 from "../images/NewDesign/modalMenu/link12.png";
import link13 from "../images/NewDesign/modalMenu/link13.png";
import link14 from "../images/NewDesign/modalMenu/link14.png";
import link15 from "../images/NewDesign/modalMenu/link15.png";
import link16 from "../images/NewDesign/modalMenu/link16.png";
import toggleTheme1 from "../images/NewDesign/toggleTheme1.png";
import toggleTheme2 from "../images/NewDesign/toggleTheme2.png";
import NewLanguageButton from "./Language/NewLanguageButton";
import TourModal from "./DoubleMoneyPage/TourModal";
import MyReferralsModal from "./ProfileReferrals/MyReferralsModal";
import Withdraw from "./Transactions/Withdraw";
import TransactionHistory from "./Transactions/TransactionHistory";
import TicketsHistory from "./Transactions/TicketsHistory";
import ChatModal from "./ChatModal";
import About from "../Pages/CyberSaysPages/Modals/About";
import Legal from "../Pages/CyberSaysPages/Modals/Legal";
import Contact from "../Pages/CyberSaysPages/Modals/Contact";
import Settings from "../Pages/CyberSaysPages/Modals/Settings";
import { useNavigate } from "react-router-dom";
import { useDesign } from "../Helpers/Design/DesignContext";
import OurMission from "../Pages/CyberSaysPages/Modals/OurMission";
import WhyJoin from "../Pages/CyberSaysPages/Modals/WhyJoin";
import FAQ from "../Pages/CyberSaysPages/Modals/FAQ";
import mixpanel from "mixpanel-browser";
import Collaborate from "../Pages/CyberSaysPages/Modals/Collaborate";
import Influencer from "../Pages/CyberSaysPages/Modals/Influencer";
import money from "../images/CyberSaysPage/headerMoney.png";
import refferals from "../images/CyberSaysPage/headerRefferals.png";
import joker from "../images/CyberSaysPage/headerJoker.png";
import moengage from "@moengage/web-sdk";

function CyberSaysMobileMenu({ setMenuOpen, scrollToPage, user, siteData, setChatModal, chatModal, languageData, userCountry, setSelectedButton, selectedButton, setSocialLink, setPromoModal, PartnerURL }) {
  const { design, changeDesign } = useDesign();

  const [tourModal, setTourModal] = useState(false);
  const [referralsModal, setReferralsModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [transactionsModal, setTransactionsModal] = useState(false);
  const [ticketsModal, setTicketsModal] = useState(false);

  const [aboutModal, setAboutModal] = useState(false);
  const [legalModal, setLegalModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [ourModal, setOurModal] = useState(false);
  const [whyModal, setWhyModal] = useState(false);
  const [FAQModal, setFAQModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [whatAbout, setWhatAbout] = useState(false);
  const [earnings, setEarnings] = useState(false);
  const [collaborate, setCollaborate] = useState(false);
  const [influencer, setInfluencer] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const [checkBox, setCheckBox] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("design")) {
      setCheckBox(window.localStorage.getItem("design"));
    } else {
      setCheckBox("0");
    }
  }, [checkBox]);

  const navigate = useNavigate();

  const copyPartnerLink = () => {
    window.navigator.clipboard.writeText(window.location.host + "/" + user?.referral_code);
    setLinkCopied(true);
  };

  return (
    <div>
      <div className="fixed top-0 z-[60] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 px-4 pb-4 pt-2 backdrop-blur-md ">
        <div className="m-auto flex max-w-[1170px] items-center justify-between md:px-4 ">
          <img onClick={() => setMenuOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../images/NewDesign/closeBtn.png")} alt="close" />
          <div className="flex items-center justify-between">
            <p className="2 saira mt-[-10px] text-[12px] font-semibold text-white lg:mt-0 lg:text-[20px]">
              <img className="w-[24px] rounded-full lg:w-[40px]" src={toggleTheme2} alt="toggleTheme2" />
            </p>

            <label class="relative  mx-2 mt-[-10px] cursor-pointer items-center lg:mt-0">
              <input
                onClick={(e) => {
                  mixpanel.track("choose_design", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,
                    page_name: "Menu",
                  });
                  moengage.track_event("choose_design", {
                    distinct_id: user?.id,
                    is_referred: user?.referral_id ? "Yes" : "No",
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,
                    page_name: "Menu",
                  });
                  setCheckBox(design === "1" ? "0" : "1");
                  changeDesign(design === "1" ? "0" : "1");
                }}
                type="checkbox"
                checked={checkBox === "1" ? false : true}
                class="peer sr-only"
              />
              <div
                class={`peer h-8 w-[56px] rounded-full border-[2px]  after:absolute after:start-[4px] after:top-[4px]  after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none md:h-10 md:w-[72px] rtl:peer-checked:after:-translate-x-full  ${design === "0" ? "border-[#FFED63] after:bg-[#FFED63]" : "border-[#80d1ee] after:bg-[#80d1ee]"}   after:h-6 after:w-6 after:rounded-full after:transition-all md:after:h-8 md:after:w-8`}
              ></div>
              <p className="saira absolute left-[-25px] w-[110px] text-center text-[10px] font-medium lg:left-[-15px] lg:text-[12px]">{languageData?.ModalMenuToggle}</p>
            </label>
            <p className="saira mr-2 mt-[-10px] text-[12px] font-semibold text-white lg:mr-4 lg:mt-0 lg:text-[20px]">
              <img className="w-[24px] rounded-full lg:w-[40px]" src={toggleTheme1} alt="toggleTheme1" />
            </p>
            <NewLanguageButton />
            <div
              onClick={(e) => {
                setLogoutModal(true);
                mixpanel.track("log_out", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("log_out", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
              className={`ml-3 h-[28px] min-w-[28px] border-[2px] lg:h-[34px] lg:min-w-[34px] ${design === "0" ? " border-[#FFED63]" : "border-[#A2DBF0]"} flex cursor-pointer items-center justify-center rounded-full  bg-[#626161]`}
            >
              <svg className="ml-[-5px]" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15.75L15.75 12M15.75 12L12 8.25M15.75 12H2M8.25 6.06125V6C8.25 4.6 8.25 3.9 8.5225 3.365C8.7625 2.89375 9.14375 2.5125 9.615 2.2725C10.15 2 10.85 2 12.25 2H18C19.4 2 20.1 2 20.6337 2.2725C21.105 2.5125 21.4875 2.89375 21.7275 3.365C22 3.89875 22 4.59875 22 5.99625V18.005C22 19.4025 22 20.1013 21.7275 20.635C21.4874 21.1055 21.1045 21.4879 20.6337 21.7275C20.1 22 19.4012 22 18.0037 22H12.2462C10.8487 22 10.1487 22 9.615 21.7275C9.14462 21.4878 8.76218 21.1054 8.5225 20.635C8.25 20.1 8.25 19.4 8.25 18V17.9375"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="menuScroll menuHeight m-auto mt-2 h-screen w-full max-w-[365px]  overflow-auto iphone:max-h-[570px]  lg:max-h-[720px] lg:pb-4">
          <div className="rounded-[14px] border-[1px] border-white px-2 py-1">
            <p className="saira text-center text-[14px] font-normal leading-5">{languageData?.modalMenuCopyLinkTitle}</p>
            <p className="saira flex items-center justify-center text-center text-[12px] font-light leading-5">
              {" "}
              {languageData?.modalMenuCopyLinkSubTitle}
              <span className="saira flex items-center text-[10px] font-medium">
                {" "}
                <img className="mx-[5px] h-[12px] w-[12px]" src={design === "0" ? money : require("../images/NewDesign/header/dollar.png")} alt="refferals" /> 1
              </span>
              <span className="saira flex items-center text-[10px] font-medium">
                {" "}
                <img className="mx-[5px] h-[12px] w-[12px]" src={design === "0" ? joker : require("../images/NewDesign/header/ticket.png")} alt="refferals" /> 10
              </span>
              <span className="saira flex items-center text-[10px] font-medium">
                {" "}
                <img className="mx-[5px] h-[12px] w-[12px]" src={design === "0" ? refferals : require("../images/NewDesign/header/points.png")} alt="refferals" /> 30
              </span>
            </p>
            <div className="flex justify-center">
              <p
                onClick={(e) => {
                  setLinkCopied(true);
                  copyPartnerLink();
                }}
                className={`saira gradient-link cursor-pointer text-center text-[14px] font-bold underline`}
              >
                {linkCopied === true ? languageData?.CopyLinkDone : languageData?.CopyLink}
              </p>
            </div>
          </div>
          <div className="grid mac:mt-0 mac:!gap-2 se:gap-3 iphone:gap-3 lg:mt-2 ">
            <div
              className="flex items-center"
              onClick={(e) => {
                scrollToPage(0);
                mixpanel.track("home_Page", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("home_Page", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={design === "0" ? link1 : require("../images/NewDesign/modalMenu/link1.png")} alt="link1" />
              <p className="saira cursor-pointer text-[20px]  font-semibold">{languageData?.modalMenuLink1}</p>
            </div>
            <div
              className="flex cursor-pointer items-center"
              onClick={(e) => {
                scrollToPage(1);
                mixpanel.track("double_Your_Money", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("double_Your_Money", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={design === "0" ? link2 : require("../images/NewDesign/modalMenu/link2.png")} alt="link2" />
              <p className="saira text-[20px] font-semibold">{languageData?.modalMenuLink2}</p>
            </div>
            <div
              className="flex items-center"
              onClick={(e) => {
                scrollToPage(2);
                mixpanel.track("the_Vegas_Wknd", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("the_Vegas_Wknd", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={link3} alt="link3" />
              <p className="saira cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink3}</p>
            </div>
            <div
              className="flex items-center"
              onClick={(e) => {
                setTourModal(true);
                mixpanel.track("Vegas Weekend Tour", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("Vegas Weekend Tour", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={link13} alt="link10" />
              <p className="saira cursor-pointer text-[20px] font-semibold ">{languageData?.modalMenuBottom5}</p>
            </div>
            <div
              className="flex cursor-pointer items-center"
              onClick={(e) => {
                scrollToPage(3);
                mixpanel.track("refer_To_Get_Tickets", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("refer_To_Get_Tickets", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={link6} alt="link6" />
              <p className="saira cursor-pointer text-[20px] font-semibold">
                {languageData?.modalMenuLink6} {siteData?.currentDay} {languageData?.modalMenuLink6Span}
              </p>
            </div>
            <div
              className="flex items-center"
              onClick={(e) => {
                scrollToPage(4);
                mixpanel.track("the_12_daily_Competition", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("the_12_daily_Competition", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={design === "0" ? link4 : require("../images/NewDesign/modalMenu/link3.png")} alt="link4" />
              <p className="saira cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink4}</p>
            </div>
            {/*
            <div className='flex items-center' onClick={e => {
              setReferralsModal(true)
              mixpanel.track("your_Referrals", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? 'Yes' : 'No',
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: 'Menu'
              })
              moengage.track_event("your_Referrals", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? 'Yes' : 'No',
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: 'Menu'
              })
            }} >
              <img className='w-[32px] h-[32px] mr-2' src={design === '0' ? link5 : require('../images/NewDesign/modalMenu/link4.png')} alt="link5" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink5}</p>
            </div>
            */}
            {/*
            <div className='flex items-center' onClick={e => {
              setChatModal(true)
              mixpanel.track("chat_room", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? 'Yes' : 'No',
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: 'Menu'
              })
              moengage.track_event("chat_room", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? 'Yes' : 'No',
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: 'Menu'
              })
            }} >
              <img className='w-[32px] h-[32px] mr-2' src={link9} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink8}</p>
            </div>
*/}
            {/*
            <div className='flex items-center' onClick={e => {
              setTicketsModal(true)
              mixpanel.track("tickets_and_points", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? 'Yes' : 'No',
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: 'Menu'
              })
              moengage.track_event("tickets_and_points", {
                distinct_id: user?.id,
                is_referred: user?.referral_id ? 'Yes' : 'No',
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                page_name: 'Menu'
              })
            }} >
              <img className='w-[32px] h-[32px] mr-2' src={link10} alt="link10" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink10}</p>
            </div>
            */}
            {/*
            <div className='flex items-center' onClick={e => setInfluencer(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link15} alt="link15" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink15}</p>
            </div>
            <div className='flex items-center' onClick={e => setCollaborate(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link16} alt="link16" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink16}</p>
            </div>
            */}

            <div className=" cursor-pointer  " onClick={(e) => setEarnings(!earnings)}>
              <div className="flex  items-center">
                <div className="flex items-center">
                  <img className="mr-2 h-[32px] w-[32px]" src={link7} alt="link11" />
                  <p className="saira cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink17}</p>
                </div>

                <div className="ml-2">
                  {earnings ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 17L12 7L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 7L12 17L2 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              {earnings && (
                <>
                  <div className="mt-1">
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setTransactionsModal(true);
                        mixpanel.track("transaction_history", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("transaction_history", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink9}</p>
                    </div>
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setTicketsModal(true);
                        mixpanel.track("tickets_and_points", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("tickets_and_points", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink10}</p>
                    </div>
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setReferralsModal(true);
                        mixpanel.track("your_Referrals", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("your_Referrals", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink5}</p>
                    </div>
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setWithdrawModal(true);
                        mixpanel.track("way_to_get_paid", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("way_to_get_paid", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink7}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div
              className="flex items-center"
              onClick={(e) => {
                setSettingsModal(true);
                mixpanel.track("settings", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("settings", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={link12} alt="link10" />
              <p className="saira cursor-pointer text-[20px] font-semibold ">{languageData?.modalMenuBottom3}</p>
            </div>
            <div
              className="flex items-center"
              onClick={(e) => {
                setFAQModal(true);
                mixpanel.track("FAQ", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
                moengage.track_event("FAQ", {
                  distinct_id: user?.id,
                  is_referred: user?.referral_id ? "Yes" : "No",
                  vegas_tickets: user?.raffle_tickets,
                  points: user?.points,
                  user_id: user?.id,
                  USD_earned: user?.allTimeEarned,
                  page_name: "Menu",
                });
              }}
            >
              <img className="mr-2 h-[32px] w-[32px]" src={link11} alt="link11" />
              <p className="saira cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink11}</p>
            </div>

            <div className=" cursor-pointer  " onClick={(e) => setWhatAbout(!whatAbout)}>
              <div className="flex  items-center">
                <div className="flex items-center">
                  <img className="mr-2 h-[32px] w-[32px]" src={link14} alt="link11" />
                  <p className="saira cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink14}</p>
                </div>

                <div className="ml-2">
                  {whatAbout ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 17L12 7L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 7L12 17L2 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              {whatAbout && (
                <>
                  <div className="mt-1">
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setAboutModal(true);
                        mixpanel.track("about_us", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("about_us", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuBottom1}</p>
                    </div>
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setOurModal(true);
                        mixpanel.track("our_mission", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("our_mission", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink12}</p>
                    </div>

                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setWhyModal(true);
                        mixpanel.track("why_join_us", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("why_join_us", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuLink13}</p>
                    </div>
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setContactModal(true);
                        mixpanel.track("contact_us", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("contact_us", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuBottom4}</p>
                    </div>
                    <div
                      className="flex items-center"
                      onClick={(e) => {
                        setSocialLink(true);
                        mixpanel.track("legal", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                        moengage.track_event("legal", {
                          distinct_id: user?.id,
                          is_referred: user?.referral_id ? "Yes" : "No",
                          vegas_tickets: user?.raffle_tickets,
                          points: user?.points,
                          user_id: user?.id,
                          USD_earned: user?.allTimeEarned,
                          page_name: "Menu",
                        });
                      }}
                    >
                      <p className="saira ml-[40px] cursor-pointer text-[20px] font-semibold">{languageData?.modalMenuBottom2}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="fixed bottom-10 left-0 w-screen justify-center">
              <div className="flex justify-center  gap-4">
                <p onClick={(e) => setInfluencer(true)} className={`saira gradient-link cursor-pointer text-center text-[14px] font-bold leading-[24px] underline lg:text-[18px]`}>
                  {languageData?.modalMenuLink15}
                </p>
                <p onClick={(e) => setCollaborate(true)} className={`saira gradient-link cursor-pointer text-center text-[14px] font-bold leading-[24px] underline lg:text-[18px]`}>
                  {languageData?.modalMenuLink16}
                </p>
              </div>
              <div className="flex justify-center">
                <p onClick={(e) => setContactModal(true)} className={`saira gradient-link cursor-pointer text-center text-[14px] font-bold leading-[24px] underline lg:text-[18px]`}>
                  {languageData?.modalMenuLink18}
                </p>
              </div>
            </div>
          </div>
          {/*
          <div className=' absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-around items-center max-w-[420px] w-full '>
            <p className='saira text-[16px] font-semibold cursor-pointer text-center leading-4' onClick={e => setAboutModal(true)}>{languageData?.modalMenuBottom1}</p>
            <div className={`w-[2px] h-[20px]  ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setLegalModal(true)}>{languageData?.modalMenuBottom2}</p>
            <div className={`w-[2px] h-[20px]  ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setSettingsModal(true)}>{languageData?.modalMenuBottom3}</p>
            <div className={`w-[2px] h-[20px]  ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setContactModal(true)}>{languageData?.modalMenuBottom4}</p>
          </div>
          */}
        </div>

        {logoutModal === true ? (
          <div className="flex items-center justify-center">
            <div className={`fixed top-1/2 -translate-y-1/2 rounded-[20px] bg-black bg-opacity-60 p-6 backdrop-blur-xl ${design === "0" ? " border-[#FFD700]" : "  border-[#A2DBF0]"} border`}>
              <div className="mb-2 flex justify-end">
                <img onClick={(e) => setLogoutModal(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../images/NewDesign/closeBtn.png")} alt="close" />
              </div>
              <h1 className="w-full max-w-[320px] text-center text-[24px] font-semibold lg:mx-14">{languageData?.logoutConfirmTitle}</h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => setLogoutModal(false)}
                  className={`saira mt-4  w-full max-w-[350px] border bg-transparent p-2 px-6 py-3 text-[18px] font-semibold text-white ${design === "0" ? "  rounded-[50px] border-[#FFD700]" : " rounded-[12px] border-[#A2DBF0]"}`}
                >
                  {languageData?.logoutConfirmNo}
                </button>
                <button
                  onClick={(e) => {
                    window.localStorage.removeItem("token");
                    navigate("/login");
                  }}
                  className={`saira mt-4  w-full max-w-[350px] bg-[white] p-2 px-6 py-3 text-[18px] font-semibold text-[#5f5f5f] ${design === "0" ? "  rounded-[50px] border-[2px] bg-white " : " gradient-homepageBtn rounded-[12px] border-none"}`}
                >
                  {languageData?.logoutConfirmYes}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {tourModal && <TourModal languageData={languageData} setOpen={setTourModal} user={user} />}
      {referralsModal && <MyReferralsModal scrollToPage={scrollToPage} languageData={languageData} setOpen={setReferralsModal} user={user} />}
      {withdrawModal && <Withdraw setPromoModal={setPromoModal} languageData={languageData} setOpen={setWithdrawModal} user={user} userCountry={userCountry} />}
      {transactionsModal && <TransactionHistory scrollToPage={scrollToPage} languageData={languageData} setOpen={setTransactionsModal} user={user} setWithdrawModal={setWithdrawModal} userCountry={userCountry} />}
      {ticketsModal && <TicketsHistory scrollToPage={scrollToPage} languageData={languageData} setOpen={setTicketsModal} user={user} setSelectedButton={setSelectedButton} selectedButton={selectedButton} />}
      {chatModal && <ChatModal languageData={languageData} setOpen={setChatModal} user={user} />}

      {aboutModal && <About languageData={languageData} setOpen={setAboutModal} user={user} />}
      {ourModal && <OurMission languageData={languageData} setOpen={setOurModal} user={user} />}
      {whyModal && <WhyJoin languageData={languageData} setOpen={setWhyModal} user={user} />}
      {FAQModal && <FAQ languageData={languageData} setOpen={setFAQModal} user={user} setContactOpen={setContactModal} setReferralsOpen={setReferralsModal} />}
      {legalModal && <Legal languageData={languageData} setOpen={setLegalModal} user={user} />}
      {settingsModal && <Settings languageData={languageData} setOpen={setSettingsModal} user={user} />}
      {contactModal && <Contact languageData={languageData} setOpen={setContactModal} user={user} />}
      {collaborate && <Collaborate languageData={languageData} setOpen={setCollaborate} user={user} />}
      {influencer && <Influencer languageData={languageData} setOpen={setInfluencer} user={user} />}
    </div>
  );
}

export default CyberSaysMobileMenu;
