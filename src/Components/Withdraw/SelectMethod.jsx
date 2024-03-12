import React from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import withdrawLogo1 from '../../images/NewDesign/withdraw/withdrawLogo1.png'
import withdrawLogo2 from '../../images/NewDesign/withdraw/withdrawLogo2.png'
import withdrawLogo4 from '../../images/NewDesign/withdraw/withdrawLogo4.png'
import withdrawLogo5 from '../../images/NewDesign/withdraw/withdrawLogo5.png'
import withdrawLogo6 from '../../images/NewDesign/withdraw/withdrawLogo6.png'
import withdrawLogo7 from '../../images/NewDesign/withdraw/withdrawLogo7.png'
import flag_pt from '../../images/flags/flag-pt.png'
import flag_mx from '../../images/NewDesign/chatFlag/MX_flag.png'
import flag_co from '../../images/NewDesign/chatFlag/CO_flag.png'
import flag_cl from '../../images/NewDesign/chatFlag/CL_flag.png'
import left from '../../images/CyberSaysPage/swiperBtnDesctopLeft.png'
import right from '../../images/CyberSaysPage/swiperBtnDesctopRight.png'
import banner from '../../images/NewDesign/withdraw/banner.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

function SelectMethod({ languageData, selectPayment, selectedPayment, userCountry, setImLiveSelected, setFlowStarted }) {
    const { design } = useDesign()

    const getLangFlag = () => {
        switch (userCountry) {
            case 'BR': return <img className='w-[20px] ml-2' src={flag_pt} alt="flag_pt" />
            case 'MX': return <img className='w-[20px] ml-2' src={flag_mx} alt="flag_pt" />
            case 'CL': return <img className='w-[20px] ml-2' src={flag_cl} alt="flag_pt" />
            case 'CO': return <img className='w-[20px] ml-2' src={flag_co} alt="flag_pt" />
            case 'UA': return <img className='w-[20px] ml-2' src={'https://flagsapi.com/UA/flat/64.png'} alt="flag_pt" />
            default: return ''
        }
    }
    return (
        <div className=''>
            <p className='text-[18px] md:text-[32px] font-semibold text-center my-2'>{languageData?.withdrawTitle2}</p>
            <div className={`   md:max-w-[900px] m-auto`}>
                <div className='  justify-center  m-auto relative '>
                    {
                        userCountry === 'BR' || userCountry === 'UA' &&
                        <div className='flex items-center'>
                            <img className='w-[44px] h-[44px] mr-3 cursor-pointer buttonPrevGif hidden lg:block' src={left} alt="Left" />
                            <Swiper
                                style={{ zIndex: 0 }}

                                modules={[Navigation]}
                                navigation={{
                                    prevEl: '.buttonPrevGif',
                                    nextEl: '.buttonNextGif',
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
                                {
                                    userCountry === 'BR' || userCountry === 'UA' && <SwiperSlide> <div onClick={e => selectPayment('pix')} className={`my-2 w-[150px] md:w-[240px] h-[140px] cursor-pointer rounded-[14px] withdrawBg4 m-auto flex justify-center items-center relative mr-2 ${selectedPayment === 'pix' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[40px]' src={withdrawLogo4} alt="withdrawLogo4" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Pix</p>
                                    </div>
                                    </SwiperSlide>
                                }
                                {
                                    userCountry === 'BR' || userCountry === 'UA' && <SwiperSlide> <div onClick={e => selectPayment('paxum')} className={`my-2 w-[150px] md:w-[240px] h-[140px] cursor-pointer rounded-[14px] withdrawBg2 m-auto flex justify-center items-center relative mr-2 ${selectedPayment === 'paxum' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[115px]' src={withdrawLogo2} alt="withdrawLogo1" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Paxum</p>
                                    </div>
                                    </SwiperSlide>
                                }


                                {/* MEXICO */}
                                {
                                    userCountry === 'MX' || userCountry === 'UA' && <SwiperSlide> <div onClick={e => selectPayment('spei')} className={`my-2 w-[150px] md:w-[240px] h-[140px] cursor-pointer rounded-[14px] withdrawBg5 m-auto flex justify-center items-center relative ${selectedPayment === 'spei' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[100px]' src={withdrawLogo5} alt="withdrawLogo5" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>SPEI</p>
                                    </div>
                                    </SwiperSlide>
                                }



                                {/* COLUMBIA */}
                                {
                                    userCountry === 'CO' || userCountry === 'UA' && <SwiperSlide> <div onClick={e => selectPayment('pse')} className={`my-2 w-[150px] md:w-[240px] h-[140px] cursor-pointer rounded-[14px] withdrawBg6 m-auto flex justify-center items-center relative ${selectedPayment === 'pse' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[100px]' src={withdrawLogo6} alt="withdrawLogo6" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>PSE</p>
                                    </div>
                                    </SwiperSlide>
                                }


                                {/* CHILE */}
                                {
                                    userCountry === 'CL' || userCountry === 'UA' && <SwiperSlide> <div onClick={e => selectPayment('servipag')} className={`my-2 w-[150px] md:w-[240px] h-[140px] cursor-pointer rounded-[14px] withdrawBg7 m-auto flex justify-center items-center relative ${selectedPayment === 'servipag' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[150px]' src={withdrawLogo7} alt="withdrawLogo7" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>ServiPag</p>
                                    </div>
                                    </SwiperSlide>
                                }

                                <SwiperSlide>
                                    <div onClick={e => selectPayment('xoxoday')} className={`my-2 w-[150px] md:w-[240px] h-[140px] cursor-pointer rounded-[14px] withdrawBg1 m-auto flex justify-center items-center relative ${selectedPayment === 'xoxoday' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[50px]' src={withdrawLogo1} alt="withdrawLogo1" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px] flex items-center'>{languageData?.withdrawGiftTitle} {getLangFlag()}</p>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                            <img className='w-[44px] h-[44px] ml-3 cursor-pointer buttonNextGif hidden lg:block' src={right} alt="Right" />

                        </div>
                    }
                    {
                        userCountry !== 'BR' || userCountry !== 'UA' &&

                        <div className={`   md:max-w-[620px] m-auto max-h-[600px]  h-screen lg:h-[unset]  overflow-y-auto withdrawHeight`}>
                            <div className='flex  gap-2 my-2'>

                            
                                {/* MEXICO */}
                                {
                                    userCountry === 'MX' && <div onClick={e => selectPayment('spei')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg5 m-auto flex justify-center items-center relative ${selectedPayment === 'spei' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[100px]' src={withdrawLogo5} alt="withdrawLogo5" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>SPEI</p>
                                    </div>
                                }
                                {/* COLUMBIA */}
                                {
                                    userCountry === 'CO' && <div onClick={e => selectPayment('pse')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg6 m-auto flex justify-center items-center relative ${selectedPayment === 'pse' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[100px]' src={withdrawLogo6} alt="withdrawLogo6" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>PSE</p>
                                    </div>
                                }
                                {/* CHILE */}
                                {
                                    userCountry === 'CL' && <div onClick={e => selectPayment('servipag')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg7 m-auto flex justify-center items-center relative ${selectedPayment === 'servipag' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[150px]' src={withdrawLogo7} alt="withdrawLogo7" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>ServiPag</p>
                                    </div>
                                }
                                {
                                    <div onClick={e => selectPayment('xoxoday')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg1 m-auto flex justify-center items-center relative ${selectedPayment === 'xoxoday' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                        <img className='w-[50px]' src={withdrawLogo1} alt="withdrawLogo1" />
                                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px] flex items-center'>{languageData?.withdrawGiftTitle} <img className='w-[24px] h-[18px] ml-1 rounded-[3px]' src={flag_pt} alt="flag_pt" /></p>
                                    </div>
                                }

                            </div>
                        </div>
                    }
                </div>
                <div onClick={e => selectPayment('imlive')} className=' mt-2 mb-[5px] relative max-w-[390px] lg:max-w-[600px] w-full m-auto cursor-pointer'>

                    {
                        /*
                        <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                        <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                        <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                    </div>
                        */
                    }
                    <img onClick={e => {
                        setImLiveSelected(true)

                    }} className=' w-full m-auto relative z-10' src={banner} alt="banner" />
                    <p className=' absolute z-50 saira font-medium text-[12px] lg:text-[20px] text-center text-[#1E1E1E] w-[150px] lg:w-[250px] top-[25px] right-[10px] lg:right-[10px] lg:top-[40px]'> <span className='saira font-extrabold text-[#A533FF]'>{languageData?.withdrawBanner} </span>{languageData?.withdrawBannerSpan}</p>
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
            </div>
        </div>
    )
}

export default SelectMethod
