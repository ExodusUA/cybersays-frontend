import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logoCyber from "../../images/CyberSaysPage/logoMain.png";
import left from "../../images/CyberSaysPage/swiperBtnDesctopLeft.png";
import right from "../../images/CyberSaysPage/swiperBtnDesctopRight.png";
import { Navigation } from "swiper/modules";
import { useDesign } from "../../Helpers/Design/DesignContext";
import newlogoCyber from "../../images/NewDesign/newLogo_main.png";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";

function Refferals({
  user,
  languageData,
  setReferralsOpen,
  dataMessage,
  setOpenMassege,
  setOpenAvatar,
  selectedMessage,
  setSelectedMassege,
  copyToMessage,
  message,
  uploadedPhotos,
  imageModal,
  setImageModal,
  selectedImage,
  setSelectedImage,
  setInfoOffer,
}) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  let swiperRef;

  const { language } = useLanguage();

  const [blobImage, setBlobImage] = useState(null);
  const [selectedGif, setSelectedGif] = useState(0);
  const [toolTip, setToolTip] = useState(false);

  const { design } = useDesign();

  const [isLinkShared, setIsLinkShared] = useState(false);

  useEffect(() => {
    getBlob();
    async function getBlob() {
      const blob = await fetch(uploadedPhotos[selectedGif]).then((r) => r.blob());
      setBlobImage(blob);
    }
  }, [selectedGif]);

  useEffect(() => {
    console.log(selectedGif);
  }, [selectedGif]);

  const shareRefferalLink = () => {
    mixpanel.track("referral_share", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
    });
    moengage.track_event("referral_share", {
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
          //text: dataMessage[selectedMessage]?.desc + '. Image Link: ' + 'https://' + window.location.host + uploadedPhotos[selectedGif],
          text: dataMessage[selectedMessage]?.desc + " Referral link: " + "https://" + window.location.host + `/share/${language}-${selectedGif + 1}/index.html?ref=` + user?.referral_code,
        })
        .then(() => console.log("Successful share! 🎉"));
    } else {
      window.navigator.clipboard.writeText(window.location.host + "/" + user?.referral_code);
      setIsLinkShared(true);

      setTimeout(() => {
        setIsLinkShared(false);
      }, 3000);
    }
  };

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handlePhotoClick = (index, e) => {
    e.preventDefault();
    setSelectedImage(uploadedPhotos[index]);
  };

  const [photoLoading, setPhotoLoading] = useState(false);

  const downloadPhoto = async (avatar) => {
    if (photoLoading) return;
    setPhotoLoading(true);
    try {
      const response = await fetch(uploadedPhotos[avatar]);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", "photo.jpg");
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading photo:", error);
    }
    console.log(uploadedPhotos[avatar]);
    setPhotoLoading(false);
  };

  const [linkShareCopied] = useState(false);

  const copyShareLink = () => {
    mixpanel.track("referral_link", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
    });
    moengage.track_event("referral_link", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
    });
    window.navigator.clipboard.writeText(window.location.host + "/" + user?.referral_code);
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateSlidesPerView = () => {
    const { width, height } = dimensions;
    if (height < 800 && width > 1200) {
      return 5;
    }
    if (width < 1200) {
      return 2.4;
    }
    return 4;
  };

  return (
    <div
      className={` h-screen w-screen ${design === "0" ? "bg-[url(./images/CyberSaysPage/mobile-bg-terms.jpg)] md:bg-[url(./images/CyberSaysPage/bg-terms.jpg)]" : "bg-[#200527]"}  relative z-10 bg-cover bg-center bg-no-repeat mac-center:flex`}
    >
      <div className="m-auto  w-full max-w-[1170px] px-4 pt-[57px] mac-center:w-[1170px] mac-center:!pt-0 md:pt-[80px]">
        <img
          className="double-img-width  relative z-50 m-auto w-[170px] se:mb-[-3%] se:w-[170px] iphone:mb-[-13px] iphone:w-[240px]  md:w-[320px] lg:mb-[-10px]"
          src={design === "0" ? logoCyber : newlogoCyber}
          alt="logoCyber"
        />

        <div className="relative flex flex-col-reverse ">
          <div className="memeHeight se:mt-[0px] lg:mt-[70px]">
            <div className=" mb-[-140px] hidden w-full pr-2 mac:mb-[-100px] lg:block">
              <div className=" mx-10 my-3 flex  justify-between">
                <img
                  className="buttonPrevGif mr-3 w-[44px] cursor-pointer"
                  src={left}
                  alt="Left"
                  onClick={(e) => {
                    swiperRef?.slidePrev();
                    mixpanel.track("image_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                    moengage.track_event("image_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                  }}
                />
                <img
                  className="buttonNextGif  w-[44px] cursor-pointer"
                  src={right}
                  alt="Right"
                  onClick={(e) => {
                    swiperRef?.slideNext();
                    mixpanel.track("image_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                    moengage.track_event("image_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                  }}
                />
              </div>
            </div>
            <div className=" m-auto w-full sm:max-w-[900px] ">
              <Swiper
                style={{ zIndex: 0 }}
                onSwiper={(swiper) => {
                  swiperRef = swiper;
                }}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".buttonPrevGif",
                  nextEl: ".buttonNextGif",
                }}
                loop={true}
                slidesPerView={calculateSlidesPerView()}
                spaceBetween={10}
              >
                {uploadedPhotos.length > 0 ? (
                  uploadedPhotos.map((item, index) => (
                    <SwiperSlide>
                      <div className="flex" key={index}>
                        <img
                          onClick={(e) => {
                            setSelectedGif(index);

                            handlePhotoClick(index, e);
                            // setImageModal(true)
                          }}
                          className={`${selectedGif === index && `${design === "0" ? "border-[2px] !border-[#FFED63]" : "border-[2px] !border-[#FE804D]"} relative opacity-[1]`} memeWidth h-[150px]  w-[150px] cursor-pointer rounded-[12px] border-[2px] border-white object-cover opacity-[0.5] sm:h-[200px] sm:w-[200px]`}
                          src={item}
                          alt="gif1"
                        />
                        <svg
                          onClick={(e) => {
                            mixpanel.track("image_download", {
                              distinct_id: user?.id,
                              is_referred: user?.referral_id ? "Yes" : "No",
                              vegas_tickets: user?.raffle_tickets,
                              points: user?.points,
                              user_id: user?.id,
                              USD_earned: user?.allTimeEarned,
                              page_name: "Refferals",
                            });
                            moengage.track_event("image_download", {
                              distinct_id: user?.id,
                              is_referred: user?.referral_id ? "Yes" : "No",
                              vegas_tickets: user?.raffle_tickets,
                              points: user?.points,
                              user_id: user?.id,
                              USD_earned: user?.allTimeEarned,
                              page_name: "Refferals",
                            });
                            downloadPhoto(index);
                          }}
                          className=" absolute left-1 top-1 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M4.25 17V19C4.25 19.5304 4.44315 20.0391 4.78697 20.4142C5.13079 20.7893 5.5971 21 6.08333 21H17.0833C17.5696 21 18.0359 20.7893 18.3797 20.4142C18.7235 20.0391 18.9167 19.5304 18.9167 19V17M7 11L11.5833 16M11.5833 16L16.1667 11M11.5833 16V4"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p className="saira mb-8 text-center text-[24px] font-medium se:mt-4 md:mt-12">{languageData?.refferalsSome} </p>
                )}
                {/*
                                {dataGif.map((item, index) => (
                                    <SwiperSlide>
                                        <div className='flex' key={index}>
                                            <img onClick={e => setSelectedGif(index)} className={`${selectedGif === index && '  border-[2px] border-[#FFED63] opacity-[1] relative'}   rounded-[20px] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] opacity-[0.5] cursor-pointer object-cover`} src={selectedImage} alt="gif1" />
                                            <svg className=' absolute top-1 left-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                                <path d="M4.25 17V19C4.25 19.5304 4.44315 20.0391 4.78697 20.4142C5.13079 20.7893 5.5971 21 6.08333 21H17.0833C17.5696 21 18.0359 20.7893 18.3797 20.4142C18.7235 20.0391 18.9167 19.5304 18.9167 19V17M7 11L11.5833 16M11.5833 16L16.1667 11M11.5833 16V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                */}

                {/*
                        <SwiperSlide>
                            <img onClick={e => setSelectedGif(2)} className={`${selectedGif === 2 && '  border-[2px] border-[#FFED63] opacity-[1]'}   rounded-[20px] w-[110px] h-[110px] opacity-[0.5] cursor-pointer`} src={gif1} alt="gif1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={e => setSelectedGif(3)} className={`${selectedGif === 3 && '  border-[2px] border-[#FFED63] opacity-[1]'}   rounded-[20px] w-[110px] h-[110px] opacity-[0.5] cursor-pointer`} src={gif1} alt="gif1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={e => setSelectedGif(4)} className={`${selectedGif === 4 && '  border-[2px] border-[#FFED63] opacity-[1]'}   rounded-[20px] w-[110px] h-[110px] opacity-[0.5] cursor-pointer`} src={gif1} alt="gif1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={e => setSelectedGif(5)} className={`${selectedGif === 5 && '  border-[2px] border-[#FFED63] opacity-[1]'}   rounded-[20px] w-[110px] h-[110px] opacity-[0.5] cursor-pointer`} src={gif1} alt="gif1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={e => setSelectedGif(6)} className={`${selectedGif === 6 && '  border-[2px] border-[#FFED63] opacity-[1]'}   rounded-[20px] w-[110px] h-[110px] opacity-[0.5] cursor-pointer`} src={gif1} alt="gif1" />
                        </SwiperSlide>
                        */}
              </Swiper>
            </div>
          </div>
          <div className="contentForDesktop mt-0 iphone2:mt-[40px] md:mt-[10px] ">
            <p
              className={`refferals-selectMassege text-center text-[14px] font-semibold  se:my-1 iphone:my-3 iphone:px-[30px] sm:mx-0 sm:text-[24px] lg:mx-14 lg:my-6   ${design === "0" ? "text-[#FFED63]" : "text-white]"}`}
            >
              {languageData?.refferalsSubtitle}
            </p>
            <div className=" hidden w-full pr-2 lg:block">
              <div className=" mx-10 my-3 mb-[-43px] flex justify-between">
                <img
                  className="buttonPrevMessage mr-3 w-[44px] cursor-pointer"
                  src={left}
                  alt="Left"
                  onClick={(e) => {
                    swiperRef?.slidePrev();
                    mixpanel.track("message_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                    moengage.track_event("message_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                  }}
                />
                <img
                  className="buttonNextMessage  w-[44px] cursor-pointer"
                  src={right}
                  alt="Right"
                  onClick={(e) => {
                    swiperRef?.slideNext();
                    mixpanel.track("message_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                    moengage.track_event("message_sideArrows", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                  }}
                />
              </div>
            </div>
            <div className=" m-auto w-full sm:max-w-[900px] ">
              <Swiper
                style={{ zIndex: 0 }}
                onSwiper={(swiper) => {
                  swiperRef = swiper;
                }}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".buttonPrevMessage",
                  nextEl: ".buttonNextMessage",
                }}
                onSlideChange={(swiper) => {
                  const realIndex = swiper.realIndex + 0;
                  setSelectedMassege(realIndex);
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  650: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                  940: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                  },
                }}
              >
                {dataMessage.map((item, index) => (
                  <SwiperSlide>
                    <div
                      key={index}
                      onClick={(e) => setSelectedMassege(index)}
                      className={`${selectedMessage === index && ` ${design === "0" ? "border-[2px] !border-[#FFED63]" : "border-[2px] !border-[#FE804D]"}`} flex w-full max-w-[270px] cursor-pointer items-center  justify-between border-[2px] border-white se:p-2 iphone:p-2 lg:max-w-[220px] ${design === "0" ? "rounded-[50px]" : "rounded-[12px]"} `}
                    >
                      <p className="saira w-[170px] truncate text-[14px] font-medium lg:w-[150px]">{item.desc}</p>
                      <svg onClick={(e) => copyToMessage(message)} className="mr-2 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 9.667C7 8.95967 7.28099 8.28131 7.78115 7.78115C8.28131 7.28099 8.95967 7 9.667 7H18.333C18.6832 7 19.03 7.06898 19.3536 7.20301C19.6772 7.33704 19.9712 7.53349 20.2189 7.78115C20.4665 8.0288 20.663 8.32281 20.797 8.64638C20.931 8.96996 21 9.31676 21 9.667V18.333C21 18.6832 20.931 19.03 20.797 19.3536C20.663 19.6772 20.4665 19.9712 20.2189 20.2189C19.9712 20.4665 19.6772 20.663 19.3536 20.797C19.03 20.931 18.6832 21 18.333 21H9.667C9.31676 21 8.96996 20.931 8.64638 20.797C8.32281 20.663 8.0288 20.4665 7.78115 20.2189C7.53349 19.9712 7.33704 19.6772 7.20301 19.3536C7.06898 19.03 7 18.6832 7 18.333V9.667Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.012 16.737C3.70534 16.5622 3.45027 16.3095 3.27258 16.0045C3.09488 15.6995 3.00085 15.353 3 15V5C3 3.9 3.9 3 5 3H15C15.75 3 16.158 3.385 16.5 4"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        onClick={() => {
                          setSelectedMassege(index);
                          mixpanel.track("full_text", {
                            distinct_id: user?.id,
                            is_referred: user?.referral_id ? "Yes" : "No",
                            vegas_tickets: user?.raffle_tickets,
                            points: user?.points,
                            user_id: user?.id,
                            USD_earned: user?.allTimeEarned,
                            page_name: "Refferals",
                          });
                          moengage.track_event("full_text", {
                            distinct_id: user?.id,
                            is_referred: user?.referral_id ? "Yes" : "No",
                            vegas_tickets: user?.raffle_tickets,
                            points: user?.points,
                            user_id: user?.id,
                            USD_earned: user?.allTimeEarned,
                            page_name: "Refferals",
                          });
                          setOpenMassege(true, item.desc);
                        }}
                        className="cursor-pointer"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 21L16.657 16.657M16.657 16.657C17.3998 15.9141 17.9891 15.0321 18.3912 14.0615C18.7932 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94936 18.7932 8.90905 18.3912 7.93842C17.9891 6.96779 17.3998 6.08585 16.657 5.34296C15.9141 4.60007 15.0321 4.01078 14.0615 3.60874C13.0909 3.20669 12.0506 2.99976 11 2.99976C9.94936 2.99976 8.90905 3.20669 7.93842 3.60874C6.96779 4.01078 6.08585 4.60007 5.34296 5.34296C3.84263 6.84329 2.99976 8.87818 2.99976 11C2.99976 13.1217 3.84263 15.1566 5.34296 16.657C6.84329 18.1573 8.87818 19.0002 11 19.0002C13.1217 19.0002 15.1566 18.1573 16.657 16.657Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <p className={`text-center text-[14px] font-semibold mac:!my-2  se:my-1 iphone:my-3 sm:text-[24px] ${design === "0" ? "text-[#FFED63]" : "text-white]"}`}>{languageData?.refferalsImage}</p>
          </div>
          <div className=" mt-[10px] flex justify-center md:mt-0">
            <div className={`w-full max-w-[800px] bg-[#EAEAEA]  bg-opacity-20 px-2  py-1 text-center  backdrop-blur-lg ${design === "0" ? "rounded-[50px]" : "rounded-[14px] lg:rounded-[24px]"}`}>
              <p className="referral-title m-auto  max-w-[640px] px-2  text-[14px] font-semibold leading-[18px] mac:max-w-[unset] mac:!text-[мpx] iphone:text-[16px] sm:text-[24px] sm:leading-[28px] lg:max-w-[740px] lg:py-2 ">
                {languageData?.refferalsTitle}
              </p>
              <div className="flex justify-center gap-1">
                <p
                  className={`saira flex cursor-pointer items-center justify-center text-[12px] font-medium underline sm:text-[14px] ${design === "0" ? "text-white" : "gradient-link "}`}
                  onClick={(e) => {
                    setInfoOffer(true);
                    mixpanel.track("learnMore", {
                      distinct_id: user?.id,
                      is_referred: user?.referral_id ? "Yes" : "No",
                      vegas_tickets: user?.raffle_tickets,
                      points: user?.points,
                      user_id: user?.id,
                      USD_earned: user?.allTimeEarned,
                      page_name: "Refferals",
                    });
                    moengage.track_event("learnMore", {
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
                  {languageData?.refferalsLink1}
                </p>
                <div className="relative"></div>
              </div>
            </div>
          </div>
        </div>
        {/*
                <div className='flex justify-center'>
                    <p onClick={e => setOpenAvatar(true)} className={`cursor-pointer text-center text-[12px] sm:text-[14px] saira font-semibold underline mt-2 se:mb-2 iphone:mb-5 mac:!mb-2 ${design === '0' ? 'text-white' : 'gradient-link flex justify-center'}`}>{languageData?.refferalsLink2}</p>
                </div>
                */}
        <div className="absolute left-1/2 m-auto flex w-full -translate-x-1/2 transform justify-center  se:bottom-[140px] iphone2:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] ">
          <div className="mx-4 w-full sm:max-w-[350px]">
            <div className="mt-6 flex justify-center mac:mt-2">
              <button
                onClick={(e) => shareRefferalLink()}
                className={`saira w-full  border-[2px] border-[#FFED63] bg-white text-[18px] font-semibold text-black se:py-1 iphone:py-2  ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-3 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
              >
                {isLinkShared === false ? languageData?.referralShareBtn1 : languageData?.referralShareBtn2}
              </button>
            </div>
            <p onClick={(e) => copyShareLink()} className={`saira mb-[-5px] cursor-pointer py-2 pb-3 text-center text-[14px] font-semibold underline `}>
              {linkShareCopied === true ? languageData?.CopyLinkDone : languageData?.CopyLink}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refferals;
