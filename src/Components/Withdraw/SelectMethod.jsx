import React from "react";
import { useDesign } from "../../Helpers/Design/DesignContext";
import withdrawLogo1 from "../../images/NewDesign/withdraw/withdrawLogo1.png";
import withdrawLogo2 from "../../images/NewDesign/withdraw/withdrawLogo2.png";
import withdrawLogo4 from "../../images/NewDesign/withdraw/withdrawLogo4.png";
import withdrawLogo5 from "../../images/NewDesign/withdraw/withdrawLogo5.png";
import withdrawLogo6 from "../../images/NewDesign/withdraw/withdrawLogo6.png";
import withdrawLogo7 from "../../images/NewDesign/withdraw/withdrawLogo7.png";
import withdrawLogo3 from "../../images/NewDesign/withdraw/withdrawLogo3.png";
import flag_pt from "../../images/flags/flag-pt.png";
import flag_mx from "../../images/NewDesign/chatFlag/MX_flag.png";
import flag_co from "../../images/NewDesign/chatFlag/CO_flag.png";
import flag_cl from "../../images/NewDesign/chatFlag/CL_flag.png";
import left from "../../images/CyberSaysPage/swiperBtnDesctopLeft.png";
import right from "../../images/CyberSaysPage/swiperBtnDesctopRight.png";
import banner from "../../images/NewDesign/withdraw/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function SelectMethod({ languageData, selectPayment, selectedPayment, userCountry, setImLiveSelected, setFlowStarted, user }) {
  const { design } = useDesign();

  const getLangFlag = () => {
    switch (userCountry) {
      case "BR":
        return <img className="ml-2 w-[20px]" src={flag_pt} alt="flag_pt" />;
      case "MX":
        return <img className="ml-2 w-[20px]" src={flag_mx} alt="flag_pt" />;
      case "CL":
        return <img className="ml-2 w-[20px]" src={flag_cl} alt="flag_pt" />;
      case "CO":
        return <img className="ml-2 w-[20px]" src={flag_co} alt="flag_pt" />;
      case "UA":
        return <img className="ml-2 w-[20px]" src={"https://flagsapi.com/UA/flat/64.png"} alt="flag_pt" />;
      default:
        return "";
    }
  };

  return (
    <div className="">
      <p className="my-2 text-center text-[18px] font-semibold md:text-[32px]">1{languageData?.withdrawTitle2}</p>
      <div className={` m-auto  max-w-[390px] md:max-w-[900px]`}>
        <div className="  relative  m-auto justify-center ">
          <div className="flex items-center">
            <img className="buttonPrevGif mr-3 hidden h-[44px] w-[44px] cursor-pointer lg:block" src={left} alt="Left" />
            {userCountry && (
              <Swiper
                style={{ zIndex: 0 }}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".buttonPrevGif",
                  nextEl: ".buttonNextGif",
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                  },
                  650: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  940: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                }}
              >
                {/* BRAZIL */}
                {(userCountry === "BR" || userCountry === "UA") && (
                  <SwiperSlide className="min-w-[150px] lg:min-w-[240px]">
                    {" "}
                    <div
                      onClick={(e) => selectPayment("pix")}
                      className={`withdrawBg4 relative m-auto my-2 mr-2 flex h-[140px] w-[150px] cursor-pointer items-center justify-center rounded-[14px] md:w-[240px] ${selectedPayment === "pix" && (design === "0" ? "outline outline-[2px] outline-[#FFED63]" : "outline outline-[2px] outline-[#A2DBF0]")} `}
                    >
                      <img className="w-[40px]" src={withdrawLogo4} alt="withdrawLogo4" />
                      <p className=" saira absolute bottom-1 text-center text-[14px] font-normal">Pix</p>
                    </div>
                  </SwiperSlide>
                )}
                {(userCountry === "BR" || userCountry === "UA") && (
                  <SwiperSlide className="min-w-[150px] lg:min-w-[240px]">
                    {" "}
                    <div
                      onClick={(e) => selectPayment("paxum")}
                      className={`withdrawBg2 relative m-auto my-2 mr-2 flex h-[140px] w-[150px] cursor-pointer items-center justify-center rounded-[14px] md:w-[240px] ${selectedPayment === "paxum" && (design === "0" ? "outline outline-[2px] outline-[#FFED63]" : "outline outline-[2px] outline-[#A2DBF0]")} `}
                    >
                      <img className="w-[115px]" src={withdrawLogo2} alt="withdrawLogo1" />
                      <p className=" saira absolute bottom-1 text-center text-[14px] font-normal">Paxum</p>
                    </div>
                  </SwiperSlide>
                )}

                {/* VISA */}

                <SwiperSlide className="min-w-[150px] lg:min-w-[240px]">
                  <div
                    onClick={(e) => selectPayment("visa")}
                    className={`withdrawBg3 relative m-auto my-2 flex h-[140px] w-[150px] cursor-pointer items-center justify-center rounded-[14px] md:w-[240px] ${selectedPayment === "visa" && (design === "0" ? "outline outline-[2px] outline-[#FFED63]" : "outline outline-[2px] outline-[#A2DBF0]")} `}
                  >
                    <img className="w-[68px]" src={withdrawLogo3} alt="withdrawLogo1" />
                    <p className=" saira absolute bottom-1 text-center text-[14px] font-normal">Visa prepaid card</p>
                  </div>
                </SwiperSlide>

                {/* MEXICO */}
                {(userCountry === "MX" || userCountry === "UA") && (
                  <SwiperSlide className="min-w-[150px] lg:min-w-[240px]">
                    {" "}
                    <div
                      onClick={(e) => selectPayment("spei")}
                      className={`withdrawBg5 relative m-auto my-2 flex h-[140px] w-[150px] cursor-pointer items-center justify-center rounded-[14px] md:w-[240px] ${selectedPayment === "spei" && (design === "0" ? "outline outline-[2px] outline-[#FFED63]" : "outline outline-[2px] outline-[#A2DBF0]")} `}
                    >
                      <img className="w-[100px]" src={withdrawLogo5} alt="withdrawLogo5" />
                      <p className=" saira absolute bottom-1 text-center text-[14px] font-normal">SPEI</p>
                    </div>
                  </SwiperSlide>
                )}

                {/* COLUMBIA */}
                {(userCountry === "CO" || userCountry === "UA") && (
                  <SwiperSlide className="min-w-[150px] lg:min-w-[240px]">
                    {" "}
                    <div
                      onClick={(e) => selectPayment("pse")}
                      className={`withdrawBg6 relative m-auto my-2 flex h-[140px] w-[150px] cursor-pointer items-center justify-center rounded-[14px] md:w-[240px] ${selectedPayment === "pse" && (design === "0" ? "outline outline-[2px] outline-[#FFED63]" : "outline outline-[2px] outline-[#A2DBF0]")} `}
                    >
                      <img className="w-[100px]" src={withdrawLogo6} alt="withdrawLogo6" />
                      <p className=" saira absolute bottom-1 text-center text-[14px] font-normal">PSE</p>
                    </div>
                  </SwiperSlide>
                )}

                {/* CHILE */}
                {(userCountry === "CL" || userCountry === "UA") && (
                  <SwiperSlide className="min-w-[150px] lg:min-w-[240px]">
                    {" "}
                    <div
                      onClick={(e) => selectPayment("servipag")}
                      className={`withdrawBg7 relative m-auto my-2 flex h-[140px] w-[150px] cursor-pointer items-center justify-center rounded-[14px] md:w-[240px] ${selectedPayment === "servipag" && (design === "0" ? "outline outline-[2px] outline-[#FFED63]" : "outline outline-[2px] outline-[#A2DBF0]")} `}
                    >
                      <img className="w-[150px]" src={withdrawLogo7} alt="withdrawLogo7" />
                      <p className=" saira absolute bottom-1 text-center text-[14px] font-normal">ServiPag</p>
                    </div>
                  </SwiperSlide>
                )}

                <SwiperSlide className="min-w-[150px] lg:min-w-[240px]">
                  <div
                    onClick={(e) => selectPayment("xoxoday")}
                    className={`withdrawBg1 relative m-auto my-2 flex h-[140px] w-[150px] cursor-pointer items-center justify-center rounded-[14px] md:w-[240px] ${selectedPayment === "xoxoday" && (design === "0" ? "outline outline-[2px] outline-[#FFED63]" : "outline outline-[2px] outline-[#A2DBF0]")} `}
                  >
                    <img className="w-[50px]" src={withdrawLogo1} alt="withdrawLogo1" />
                    <p className=" saira absolute bottom-1 flex items-center text-center text-[14px] font-normal">
                      {languageData?.withdrawGiftTitle} {getLangFlag()}
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            )}

            <img className="buttonNextGif ml-3 hidden h-[44px] w-[44px] cursor-pointer lg:block" src={right} alt="Right" />
          </div>
        </div>
        <div className="mt-2 flex justify-center lg:mt-4">
          <button
            onClick={(e) => setFlowStarted(true)}
            className={`saira w-full  max-w-[390px]  border-[2px] bg-white py-2 text-[18px] font-semibold text-black outline-none  ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
          >
            {languageData?.withdrawBtn}
          </button>
        </div>

        {user?.earned.toFixed(0) !== "0" && (
          <>
            <p className="mt-1 text-center text-[14px] font-semibold">{languageData?.withdrawBannerTitle}</p>
            <div onClick={(e) => selectPayment("imlive")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[390px] cursor-pointer">
              {/*
                                <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                            </div>
                                */}
              <img
                onClick={(e) => {
                  setImLiveSelected(true);
                }}
                className=" relative z-10 m-auto w-full max-w-[400px]"
                src={banner}
                alt="banner"
              />
              <p className=" saira absolute right-[5px] top-[20px] z-50 w-[140px] text-[9px] font-medium leading-[12px] text-[#A533FF] iphone:right-[15px] iphone:top-[25px]">
                {" "}
                <span className="saira font-extrabold text-[#A533FF]"></span>
                {languageData?.withdrawBannerMessage}
              </p>
              <div className=" absolute right-[10px] top-[75px] z-10 w-[150px] iphone:right-[15px] iphone:top-[90px]">
                <p className="saira text-center text-[12px] font-bold leading-4 text-[#9430E3]">
                  {languageData?.withdrawBannerSpan1} <span className="saira text-center text-[12px] font-normal text-[#9430E3]"></span> {languageData?.withdrawBannerSpan2}{" "}
                  <span className="saira text-center text-[12px] font-medium text-black">{languageData?.withdrawBannerSpan3}</span>
                </p>
                <button className="saira mt-1 w-full cursor-pointer rounded-[9px] border-2 border-[#9430E3] py-[2px] text-[12px] font-extrabold text-[#9430E3]">{languageData?.withdrawBannerBtn}</button>
              </div>
              <p className="saira mt-2 text-center text-[10px] font-semibold leading-[12px] text-[#A533FF]">{languageData?.withdrawBannerSubtitle}</p>
              {/*
                        <div onClick={e => selectPayment('imlive')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] bg-new-bg-promo bg-no-repeat bg-cover m-auto flex justify-center items-center relative ${selectedPayment === 'imlive' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                            <div>
                                <div className='flex items-center justify-center lg:mt-4'>
                                    <img className='w-[38px]' src={promoGirl} alt="promoGirl" />
                                    <img className='w-[111px]' src={imLiveLogo} alt="imLiveLogo" />
                                </div>
                                <p className=' text-center saira font-normal text-[14px] leading-[15px] mt-2 lg:mb-1'>ImLive</p>
                                <p className=' text-center saira font-normal text-[10px] px-1 lg:px-0 lg:text-[12px] gradient-linkDouble leading-[15px]'>{languageData?.promoImLiveDesc}</p>
                            </div>
                        </div>
                        */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SelectMethod;
