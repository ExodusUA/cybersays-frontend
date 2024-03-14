import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import logoCyber from '../../images/CyberSaysPage/logoMain.png';
import left from '../../images/CyberSaysPage/swiperBtnDesctopLeft.png';
import right from '../../images/CyberSaysPage/swiperBtnDesctopRight.png';
import { Navigation } from 'swiper/modules';
import { useDesign } from '../../Helpers/Design/DesignContext';
import newlogoCyber from '../../images/NewDesign/newLogo_main.png';
import mixpanel from 'mixpanel-browser';
import moengage from '@moengage/web-sdk';
import { useLanguage } from '../../Helpers/Languages/LanguageContext';

function Refferals({ user, languageData, setReferralsOpen, dataMessage, setOpenMassege, setOpenAvatar, selectedMessage, setSelectedMassege, copyToMessage, message, uploadedPhotos, imageModal, setImageModal, selectedImage, setSelectedImage, setInfoOffer }) {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    let swiperRef;

    const {language} = useLanguage()

    const [blobImage, setBlobImage] = useState(null)
    const [selectedGif, setSelectedGif] = useState(0);
    const [toolTip, setToolTip] = useState(false)

    const { design } = useDesign()

    const [isLinkShared, setIsLinkShared] = useState(false)

    useEffect(() => {
        getBlob()
        async function getBlob() {
            const blob = await fetch(uploadedPhotos[selectedGif]).then(r => r.blob())
            setBlobImage(blob)
        }
    }, [selectedGif])

    useEffect(() => {
        console.log(selectedGif)
    }, [selectedGif])

    const shareRefferalLink = () => {

        mixpanel.track("referral_share", {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            page_name: 'Refferals',
        })
        moengage.track_event('referral_share', {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            page_name: 'Refferals',
        })

        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    //text: dataMessage[selectedMessage]?.desc + '. Image Link: ' + 'https://' + window.location.host + uploadedPhotos[selectedGif],
                    text: dataMessage[selectedMessage]?.desc + ' Referral link: ' + 'https://' + window.location.host + `/share/${language}_${selectedGif + 1}?ref=` + user?.referral_code,
                })
                .then(() => console.log('Successful share! 🎉'))

        } else {

            window.navigator.clipboard.writeText(window.location.host + '/' + user?.referral_code)
            setIsLinkShared(true)

            setTimeout(() => {
                setIsLinkShared(false)
            }, 3000)
        }
    }

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
            const link = document.createElement('a');
            link.href = blobUrl;
            link.setAttribute('download', 'photo.jpg');
            link.click();
            link.remove();
            window.URL.revokeObjectURL(blobUrl);

        } catch (error) {
            console.error('Error downloading photo:', error);
        }
        console.log(uploadedPhotos[avatar]);
        setPhotoLoading(false);
    }

    const [linkShareCopied] = useState(false)

    const copyShareLink = () => {
        mixpanel.track("referral_link", {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            page_name: 'Refferals',
        })
        moengage.track_event('referral_link', {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            page_name: 'Refferals',
        })
        window.navigator.clipboard.writeText(window.location.host + '/' + user?.referral_code)
    }

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-terms.jpg)] md:bg-[url(./images/CyberSaysPage/bg-terms.jpg)]' : 'bg-[#200527]'}  bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`} >
            <div className='pt-[57px]  md:pt-[80px] mac-center:!pt-0 px-4 w-full max-w-[1170px] mac-center:w-[1170px] m-auto' >
                <img className='se:w-[170px]  w-[170px] iphone:w-[240px] double-img-width md:w-[320px] m-auto se:mb-[-3%] iphone:mb-[-13px] lg:mb-[-10px]  relative z-50' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />


                <div className='flex flex-col-reverse relative '>
                    <div className='se:mt-[0px] lg:mt-[70px] memeHeight'>
                        <div className=' w-full hidden lg:block mb-[-140px] mac:mb-[-100px] pr-2'>
                            <div className=' justify-between flex my-3  mx-10'>
                                <img className='w-[44px] mr-3 cursor-pointer buttonPrevGif' src={left} alt="Left" onClick={e => {
                                    swiperRef?.slidePrev()
                                    mixpanel.track("image_sideArrows", {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                    moengage.track_event('image_sideArrows', {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                }} />
                                <img className='w-[44px]  cursor-pointer buttonNextGif' src={right} alt="Right" onClick={e => {
                                    swiperRef?.slideNext()
                                    mixpanel.track("image_sideArrows", {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                    moengage.track_event('image_sideArrows', {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                }} />
                            </div>
                        </div>
                        <div className='max-w-[370px] sm:max-w-[900px] m-auto w-full '>
                            <Swiper
                                style={{ zIndex: 0 }}
                                onSwiper={(swiper) => {
                                    swiperRef = swiper;
                                }}
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: '.buttonPrevGif',
                                    nextEl: '.buttonNextGif',
                                }}
                                loop={true}
                                slidesPerView={calculateSlidesPerView()}
                                spaceBetween={10}
                            >
                                {uploadedPhotos.length > 0 ? (
                                    uploadedPhotos.map((item, index) => (
                                        <SwiperSlide>
                                            <div className='flex' key={index}>
                                                <img onClick={e => {
                                                    setSelectedGif(index)

                                                    handlePhotoClick(index, e)
                                                    // setImageModal(true)
                                                }} className={`${selectedGif === index && `${design === '0' ? 'border-[2px] !border-[#FFED63]' : 'border-[2px] !border-[#FE804D]'} opacity-[1] relative`} border-[2px] border-white  rounded-[12px] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] memeWidth opacity-[0.5] cursor-pointer object-cover`} src={item} alt="gif1" />
                                                <svg onClick={e => {
                                                    mixpanel.track("image_download", {
                                                        distinct_id: user?.id,
                                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                                        vegas_tickets: user?.raffle_tickets,
                                                        points: user?.points,
                                                        user_id: user?.id,
                                                        USD_earned: user?.allTimeEarned,
                                                        page_name: 'Refferals',
                                                    })
                                                    moengage.track_event('image_download', {
                                                        distinct_id: user?.id,
                                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                                        vegas_tickets: user?.raffle_tickets,
                                                        points: user?.points,
                                                        user_id: user?.id,
                                                        USD_earned: user?.allTimeEarned,
                                                        page_name: 'Refferals',
                                                    })
                                                    downloadPhoto(index)
                                                }
                                                } className=' absolute top-1 left-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                                    <path d="M4.25 17V19C4.25 19.5304 4.44315 20.0391 4.78697 20.4142C5.13079 20.7893 5.5971 21 6.08333 21H17.0833C17.5696 21 18.0359 20.7893 18.3797 20.4142C18.7235 20.0391 18.9167 19.5304 18.9167 19V17M7 11L11.5833 16M11.5833 16L16.1667 11M11.5833 16V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <p className='text-[24px] text-center se:mt-4 md:mt-12 mb-8 saira font-medium'>{languageData?.refferalsSome} </p>
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
                    <div className='mt-0 iphone:mt-[55px] contentForDesktop md:mt-[10px] '>
                        <p className={`text-[14px] sm:text-[24px] font-semibold text-center  se:my-1 iphone:my-3 iphone:px-[30px] refferals-selectMassege lg:my-6 lg:mx-14 sm:mx-0   ${design === '0' ? 'text-[#FFED63]' : 'text-white]'}`}>{languageData?.refferalsSubtitle}</p>
                        <div className=' w-full hidden lg:block pr-2'>
                            <div className=' justify-between flex my-3 mb-[-43px] mx-10'>
                                <img className='w-[44px] mr-3 cursor-pointer buttonPrevMessage' src={left} alt="Left" onClick={e => {
                                    swiperRef?.slidePrev()
                                    mixpanel.track("message_sideArrows", {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                    moengage.track_event('message_sideArrows', {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                }} />
                                <img className='w-[44px]  cursor-pointer buttonNextMessage' src={right} alt="Right" onClick={e => {
                                    swiperRef?.slideNext()
                                    mixpanel.track("message_sideArrows", {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                    moengage.track_event('message_sideArrows', {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    })
                                }} />
                            </div>
                        </div>
                        <div className='max-w-[370px] sm:max-w-[900px] m-auto w-full '>

                            <Swiper
                                style={{ zIndex: 0 }}
                                onSwiper={(swiper) => {
                                    swiperRef = swiper;
                                }}
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: '.buttonPrevMessage',
                                    nextEl: '.buttonNextMessage',
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
                                        <div key={index} onClick={e => setSelectedMassege(index)}
                                            className={`${selectedMessage === index && ` ${design === '0' ? 'border-[2px] !border-[#FFED63]' : 'border-[2px] !border-[#FE804D]'}`} flex justify-between items-center se:p-2 iphone:p-2  border-[2px] border-white cursor-pointer max-w-[270px] lg:max-w-[220px] w-full ${design === '0' ? 'rounded-[50px]' : 'rounded-[12px]'} `} >
                                            <p className='w-[170px] lg:w-[150px] truncate saira text-[14px] font-medium'>{item.desc}</p>
                                            <svg onClick={e => copyToMessage(message)} className='cursor-pointer mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 9.667C7 8.95967 7.28099 8.28131 7.78115 7.78115C8.28131 7.28099 8.95967 7 9.667 7H18.333C18.6832 7 19.03 7.06898 19.3536 7.20301C19.6772 7.33704 19.9712 7.53349 20.2189 7.78115C20.4665 8.0288 20.663 8.32281 20.797 8.64638C20.931 8.96996 21 9.31676 21 9.667V18.333C21 18.6832 20.931 19.03 20.797 19.3536C20.663 19.6772 20.4665 19.9712 20.2189 20.2189C19.9712 20.4665 19.6772 20.663 19.3536 20.797C19.03 20.931 18.6832 21 18.333 21H9.667C9.31676 21 8.96996 20.931 8.64638 20.797C8.32281 20.663 8.0288 20.4665 7.78115 20.2189C7.53349 19.9712 7.33704 19.6772 7.20301 19.3536C7.06898 19.03 7 18.6832 7 18.333V9.667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4.012 16.737C3.70534 16.5622 3.45027 16.3095 3.27258 16.0045C3.09488 15.6995 3.00085 15.353 3 15V5C3 3.9 3.9 3 5 3H15C15.75 3 16.158 3.385 16.5 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <svg onClick={() => {
                                                setSelectedMassege(index);
                                                mixpanel.track("full_text", {
                                                    distinct_id: user?.id,
                                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                                    vegas_tickets: user?.raffle_tickets,
                                                    points: user?.points,
                                                    user_id: user?.id,
                                                    USD_earned: user?.allTimeEarned,
                                                    page_name: 'Refferals',
                                                });
                                                moengage.track_event('full_text', {
                                                    distinct_id: user?.id,
                                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                                    vegas_tickets: user?.raffle_tickets,
                                                    points: user?.points,
                                                    user_id: user?.id,
                                                    USD_earned: user?.allTimeEarned,
                                                    page_name: 'Refferals',
                                                });
                                                setOpenMassege(true, item.desc);
                                            }} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 21L16.657 16.657M16.657 16.657C17.3998 15.9141 17.9891 15.0321 18.3912 14.0615C18.7932 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94936 18.7932 8.90905 18.3912 7.93842C17.9891 6.96779 17.3998 6.08585 16.657 5.34296C15.9141 4.60007 15.0321 4.01078 14.0615 3.60874C13.0909 3.20669 12.0506 2.99976 11 2.99976C9.94936 2.99976 8.90905 3.20669 7.93842 3.60874C6.96779 4.01078 6.08585 4.60007 5.34296 5.34296C3.84263 6.84329 2.99976 8.87818 2.99976 11C2.99976 13.1217 3.84263 15.1566 5.34296 16.657C6.84329 18.1573 8.87818 19.0002 11 19.0002C13.1217 19.0002 15.1566 18.1573 16.657 16.657Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <p className={`text-[14px] sm:text-[24px] font-semibold text-center  se:my-1 iphone:my-3 mac:!my-2 ${design === '0' ? 'text-[#FFED63]' : 'text-white]'}`}>{languageData?.refferalsImage}</p>
                    </div>
                    <div className=' flex justify-center mt-[10px] md:mt-0'>
                        <div className={`bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg  text-center max-w-[800px]  w-full py-1  px-2 ${design === '0' ? 'rounded-[50px]' : 'rounded-[14px] lg:rounded-[24px]'}`}>
                            <p className='text-[14px] iphone:text-[16px]  sm:text-[24px] mac:!text-[мpx]  font-semibold max-w-[640px] lg:max-w-[740px] mac:max-w-[unset] m-auto leading-[18px] sm:leading-[28px] px-2 referral-title lg:py-2 '>{languageData?.refferalsTitle}</p>
                            <div className='flex justify-center gap-1'>
                                <p className={`text-[12px] sm:text-[14px] font-medium saira flex justify-center items-center underline cursor-pointer ${design === '0' ? 'text-white' : 'gradient-link '}`} onClick={e => {
                                    setInfoOffer(true)
                                    mixpanel.track("learnMore", {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    });
                                    moengage.track_event('learnMore', {
                                        distinct_id: user?.id,
                                        is_referred: user?.referral_id ? 'Yes' : 'No',
                                        vegas_tickets: user?.raffle_tickets,
                                        points: user?.points,
                                        user_id: user?.id,
                                        USD_earned: user?.allTimeEarned,
                                        page_name: 'Refferals',
                                    });

                                }}>
                                    {languageData?.refferalsLink1}
                                </p>
                                <div className='relative'>


                                </div>

                            </div>



                        </div>

                    </div>

                </div>
                {/*
                <div className='flex justify-center'>
                    <p onClick={e => setOpenAvatar(true)} className={`cursor-pointer text-center text-[12px] sm:text-[14px] saira font-semibold underline mt-2 se:mb-2 iphone:mb-5 mac:!mb-2 ${design === '0' ? 'text-white' : 'gradient-link flex justify-center'}`}>{languageData?.refferalsLink2}</p>
                </div>
                */}
                <div className='flex absolute se:bottom-[140px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                    <div className='sm:max-w-[350px] w-full mx-2'>
                        <div className='flex justify-center mt-6 mac:mt-2'>
                            <button onClick={e => shareRefferalLink()} className={`w-full bg-white  border-[2px] border-[#FFED63] text-black text-[18px] saira font-semibold se:py-1 iphone:py-2  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>
                                {
                                    isLinkShared === false
                                        ? languageData?.referralShareBtn1
                                        : languageData?.referralShareBtn2
                                }
                            </button>
                        </div>
                        <p onClick={e => copyShareLink()} className={`saira text-[14px] cursor-pointer underline text-center mb-[-5px] py-2 pb-3 font-semibold  ${linkShareCopied === true ? 'opacity-60' : ''}`}>Copy link</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Refferals
