import React from 'react'
import logotype from '../images/logotype.svg'
import hero from '../images/hero.png'
import green from '../images/green.svg'
import purple from '../images/purple.png'
import Language from '../Components/Language/Language'
import { useLanguage } from '../Helpers/Languages/LanguageContext'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import left from '../images/left.svg'
import right from '../images/right.svg'
import Slide from '../Components/Language/Slide'
import { useState } from 'react';
var mixpanel = require('mixpanel-browser');


function Main() {

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('userid');

    mixpanel.init(process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN);

    const targetURL = uid === null ? `https://imlive.com/wmaster.ashx?QueryID=197&WID=126670106835&linkID=701&from=freevideo6` : `https://imlive.com/wmaster.ashx?QueryID=197&WID=126670106835&linkID=701&from=freevideo6&promocode=${uid}`

    const { language } = useLanguage();
    const [languageData, setLanguageData] = React.useState(null);

    const languages = {
        en: require('../Helpers/Languages/translations/en.json'),
        pt: require('../Helpers/Languages/translations/pt.json'),
        es: require('../Helpers/Languages/translations/es.json'),
    };

    useEffect(() => {
        let langData = languages[language];
        setLanguageData(langData);
    }, [language]);

    useEffect(() => {
        mixpanel.track("page_view_cyber_says", {
            distinct_id: uid || 'not_set'
        });
    }, [])

    const [swiperRef, setSwiperRef] = useState(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = () => {
        setIsBeginning(swiperRef?.isBeginning);
        setIsEnd(swiperRef?.isEnd);
    };

    return (
        <>
            <Helmet>
                <title>{languageData?.siteTitle}</title>
                <meta name="description"
                    content={languageData?.metaDescription} />
                <meta property="og:title" content={languageData?.siteTitle} />
                <meta property="og:description"
                    content={languageData?.metaDescription} />
            </Helmet>

            <div className='bg-dark relative'>
                <img className='left-0 top-0 absolute select-none' src={green} alt="Green" />

                <div className='max-w-[1440px] m-auto w-[90%] relative z-10 h-screen overflow-hidden md:overflow-visible'>

                    <div className='flex md:justify-center py-5 relative'>
                        <img src={logotype} className='w-[128px]' alt="Logotype" />

                        <div className='absolute right-0 top-0 flex items-center align-middle h-full z-20'>
                            <Language />
                        </div>
                    </div>

                    <div className='lg:flex justify-between items-center'>
                        <div className='sm:min-w-[600px]'>
                            <h1 className='text-[28px] sm:text-[64px] md:text-[72px] font-bold xl:w-[1000px]' dangerouslySetInnerHTML={{ __html: languageData?.HeaderTitle }}></h1>
                            <p className='mt-4 text-[14px] md:text-[16px]'>{languageData?.HeaderSubTitle}</p>
                            <div className='w-full h-[2px] gradient-line mt-[10px] mb-[20px] md:mt-[20px] md:mb-[0px]'></div>

                            <div className='relative'>
                                <div className='absolute z-20 left-[100px] md:left-[-50px] flex md:h-full md:align-middle mt-5 bottom-[-60px] md:bottom-[unset] md:top-0  buttonPrev' onClick={e => swiperRef?.slidePrev()}>
                                    <img className='w-10 cursor-pointer' src={left} alt="Left" style={{ opacity: isBeginning ? 0.7 : 1 }} />
                                </div>

                                <Swiper
                                    onSwiper={(swiper) => {
                                        setSwiperRef(swiper);
                                        setIsBeginning(swiper?.isBeginning);
                                        setIsEnd(swiper?.isEnd);
                                    }}
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={{
                                        prevEl: '.buttonPrev',
                                        nextEl: '.buttonNext',
                                    }}
                                    onSlideChange={handleSlideChange}
                                >
                                    <SwiperSlide><Slide languageData={languageData} targetURL={targetURL} uid={uid} /></SwiperSlide>
                                    <SwiperSlide><Slide languageData={languageData} targetURL={targetURL} uid={uid} /></SwiperSlide>
                                  
                                </Swiper>

                                <div className='absolute z-20 right-[100px] md:right-[-50px] flex md:h-full md:align-middle mt-5 bottom-[-60px] md:bottom-[unset] md:top-0 buttonNext ' onClick={e => swiperRef?.slideNext()}>
                                    <img className='w-10 cursor-pointer' src={right} alt="Right" style={{ opacity: isEnd ? 0.7 : 1 }} />
                                </div>
                            </div>

                        </div>

                        <div className='relative'>
                            <img className='left-0 top-0 select-none pointer-events-none hidden lg:block' src={hero} alt="Hero" />
                        </div>
                    </div>
                </div>
                <img className='absolute bottom-0 left-0 ' src={purple} alt="Purple" />
            </div>
        </>

    )
}

export default Main