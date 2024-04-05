import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Language from "../Components/Language/Language";
import "swiper/css";
import "swiper/css/navigation";
import Slider from "./Auth/Slider";
import LoginForm from "./Auth/LoginForm";
import logoCyber from "../images/logoLogin.png";
import { useSwipeable } from "react-swipeable";
import SocialLink from "../Components/SocialLink";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../Helpers/Languages/LanguageContext";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";

function Auth({ languageData }) {
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    /* MIXPANEL */

    let utmData = {
      utm_source: urlParams.get("utm_source") || window.localStorage.getItem("utm_source"),
      utm_medium: urlParams.get("utm_medium") || window.localStorage.getItem("utm_medium"),
      utm_campaign: urlParams.get("utm_campaign") || window.localStorage.getItem("utm_campaign"),
      utm_term: urlParams.get("utm_term") || window.localStorage.getItem("utm_term"),
      utm_content: urlParams.get("utm_content") || window.localStorage.getItem("utm_content"),
    };

    // delete nulls

    mixpanel.track("page_view", {
      distinct_id: "not_set",
      ...utmData,
      page_name: "Login",
    });
    moengage.track_event("page_view", {
      distinct_id: "not_set",
      ...utmData,
      page_name: "Login",
    });
  }, []);

  const navigate = useNavigate();
  let { language } = useLanguage();

  if (window.localStorage.getItem("token")) {
    navigate("/");
  } else {
    window.localStorage.removeItem("double");
  }

  const params = new URLSearchParams(window.location.search);

  let referralID = window.localStorage.getItem("ref") === "login" ? null : window.localStorage.getItem("ref");

  const [currentSlide, setCurrentSlide] = useState(0);
  const [socialLink, setSocialLink] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);

  const slideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
    console.log(swiper.realIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => swiperRef?.slideNext(),
    onSwipedRight: () => swiperRef?.slidePrev(),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section {...handlers} className="relative h-screen w-screen overflow-hidden bg-[#0B1628]">
        <div className="h-full lg:flex">
          <Slider swiperRef={swiperRef} setSwiperRef={setSwiperRef} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} onSlideChange={slideChange} />
          <div className="align-start absolute right-0 top-5 z-10 flex items-center lg:right-[20px]">
            <Language />
          </div>
          <div className="top-10 h-full w-full bg-dark text-center lg:absolute lg:left-10 lg:w-[620px]">
            <div className="z-10 m-auto w-[95%] lg:relative lg:w-[640px]">
              <div className="relative z-[10]  w-full rounded-[32px] border-[#DDBBFD] bg-opacity-20 pt-[1px] iphone:pt-[10px] lg:border-2 lg:bg-[#0D0D0D73] lg:px-10 lg:pb-5 lg:pt-10">
                <div className=" lg:max-w-[600px]">
                  <img className="logoLogin  m-auto mt-[-30px] w-[100px] lg:mt-0 lg:w-[200px]" src={logoCyber} alt="Logotype" />
                  <p
                    className={`h-[220px] w-full pb-2 text-center text-[20px] font-bold leading-7 text-white se:mt-[0px] lg:w-[100%] lg:text-left lg:text-[26px] lg:leading-9 ${language === "es" && "md:min-h-[210px]"} md:min-h-[240px]`}
                  >
                    {currentSlide === 0 && (
                      <>
                        {languageData?.authSlide1}

                        <div className=" mt-2 leading-6">
                          <p className="text-[14px] font-bold lg:mt-1 lg:text-[20px]">{languageData?.authSlide1li1}</p>

                          <p className="text-[14px] font-bold lg:mt-1 lg:text-[20px]">{languageData?.authSlide1li2}</p>

                          <p className="text-[14px] font-bold lg:mt-1 lg:text-[20px]">{languageData?.authSlide1li3}</p>
                        </div>
                      </>
                    )}
                    {currentSlide === 1 && (
                      <>
                        {languageData?.authSlide2}

                        <div className=" mt-2 leading-6">
                          <p className="text-[13px] font-bold lg:text-[16px]">{languageData?.authSlide2li1}</p>
                          <p className="text-[13px] font-bold lg:text-[16px]">{languageData?.authSlide2li2}</p>
                          <p className="text-[13px] font-bold lg:text-[16px]">{languageData?.authSlide2li3}</p>
                        </div>
                      </>
                    )}
                    {currentSlide === 2 && (
                      <>
                        {languageData?.authSlide3}

                        <div className=" mt-2 leading-6">
                          <p className="text-[16px] font-bold lg:text-[20px]">{languageData?.authSlide3li1}</p>
                        </div>
                      </>
                    )}
                    {currentSlide === 3 && (
                      <>
                        {languageData?.authSlide4}

                        <div className=" mt-2 leading-6">
                          <p className="text-[16px] font-bold lg:text-[20px]">{languageData?.authSlide4li1}</p>
                        </div>
                      </>
                    )}
                  </p>
                </div>
                <LoginForm languageData={languageData} referralID={referralID} />

                <div className="mt-2 hidden items-center justify-center gap-2 text-left sm:flex lg:mt-4 lg:items-start">
                  <p className="saira w-full cursor-pointer  select-none text-[8px] font-normal leading-4 text-[#CACACA]">
                    {languageData?.loginTermsTitle}

                    <Link target="_blank" to="https://www.cyber-says.club/terms" className="saira ml-1 text-[8px] font-semibold ">
                      <span className=" saira text-[8px] font-normal underline">Terms of Use</span> &
                    </Link>

                    <Link target="_blank" to={"https://www.cyber-says.club/privacy"} className="saira text-[8px] font-semibold underline">
                      <span className=" saira text-[8px] font-normal underline"> Privacy Policy</span>,
                    </Link>
                    {/*
                                        <Link target='_blank' to={'/terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Terms of Use</span>,
                                        </Link>
                                        <Link target='_blank' to={'/contest-terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Contest Terms</span>,
                                        </Link>
                                        <Link  className='saira text-[12px] font-semiboldunderline'>
                                            <span className=' saira text-[12px] font-normal underline'></span>,
                                        </Link>
                                        <Link target='_blank' to={'/promotion-terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Promotion Terms</span>,
                                        </Link>
                                        <Link target='_blank' to={'/affiliation-terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Affliation Terms</span>
                                        </Link>
                                        */}
                  </p>
                </div>

                <div className=" fixed bottom-6 left-2 mt-2 flex max-w-[60vw] items-center justify-center gap-2 text-left sm:block md:bottom-0 md:left-0 md:hidden md:max-w-none lg:mt-4 lg:items-start">
                  <p className="saira w-full cursor-pointer  select-none text-[8px] font-normal leading-4 text-[#a9a9a9]">
                    {languageData?.loginTermsTitle}

                    <Link target="_blank" to="https://www.cyber-says.club/terms" className="saira ml-1 text-[8px] font-semibold ">
                      <span className=" saira text-[8px] font-normal underline">Terms of Use</span> &
                    </Link>

                    <Link target="_blank" to={"https://www.cyber-says.club/privacy"} className="saira text-[8px] font-semibold underline">
                      <span className=" saira text-[8px] font-normal underline"> Privacy Policy</span>,
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {socialLink && <SocialLink setOpen={setSocialLink} />}
      </section>
    </>
  );
}

export default Auth;
