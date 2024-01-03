import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import { Swiper, SwiperSlide } from 'swiper/react';
import gif1 from '../../images/CyberSaysPage/gifExample.png'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import left from '../../images/CyberSaysPage/swiperBtnDesctopLeft.png'
import right from '../../images/CyberSaysPage/swiperBtnDesctopRight.png'
import { Navigation } from 'swiper/modules';

function Refferals({ user }) {

    let swiperRef;

    const [selectedGif, setSelectedGif] = useState(null);
    const [selectedMessage, setSelectedMassege] = useState(null);

    const dataGif = [
        {
            image: gif1,
        },
        {
            image: gif1,
        },
        {
            image: gif1,
        },
        {
            image: gif1,
        },
        {
            image: gif1,
        },
        {
            image: gif1,
        },
        {
            image: gif1,
        },
        {
            image: gif1,
        },
    ]
    const dataMessage = [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
    ]
    const shareRefferalLink = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    text: 'Sharing',
                    url: window.location.hostname + '?uid=' + user?.refferal_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                .catch(err => console.error(err));
        } else {
            console.error('navigator.share is not supported in this browser');
        }
    }

    const [isLinkCopied, setIsLinkCopied] = useState(false);

    const copyToClipboard = () => {
        let link = window.location.host + '?ref=' + user?.refferal_code;
        setIsLinkCopied(true)
        navigator.clipboard.writeText(link);

        setTimeout(() => {
            setIsLinkCopied(false)
        }, 3000);
    }

    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-terms.jpg)] bg-cover bg-no-repeat bg-center relative z-10' >
            <div className='pt-[60px]  md:pt-[90px] px-4 max-w-[1170px] m-auto' >
                <img className='custombp:w-[230px] custombp:mb-[-5px] w-[310px]  md:w-[500px] m-auto md:mb-[-20px]' src={logoCyber} alt="logoCyber" />
                <div className=' flex justify-center'>
                    <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center max-w-[800px] w-full py-1 px-2'>
                        <p className='text-[14px]  sm:text-[24px]  font-semibold max-w-[540px] m-auto custombp:leading-[16px]'>“Share with your friends to be the kind
                            to make them earn and go to Vegas”</p>
                        <p className='text-[12px] sm:text-[14px] font-medium saira flex justify-center items-center underline'>
                            Learn more

                            <a
                                data-tooltip-id="my-tooltip-inline2"

                            >
                                <svg className='ml-1 cursor-pointer sm:w-[24px] sm:h-[24px]' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_55928)">
                                        <path d="M5.9 9H7.1V5.4H5.9V9ZM6.5 4.2C6.67 4.2 6.8126 4.1424 6.9278 4.0272C7.043 3.912 7.1004 3.7696 7.1 3.6C7.1 3.43 7.0424 3.2876 6.9272 3.1728C6.812 3.058 6.6696 3.0004 6.5 3C6.33 3 6.1876 3.0576 6.0728 3.1728C5.958 3.288 5.9004 3.4304 5.9 3.6C5.9 3.77 5.9576 3.9126 6.0728 4.0278C6.188 4.143 6.3304 4.2004 6.5 4.2ZM6.5 12C5.67 12 4.89 11.8424 4.16 11.5272C3.43 11.212 2.795 10.7846 2.255 10.245C1.715 9.705 1.2876 9.07 0.9728 8.34C0.658 7.61 0.5004 6.83 0.5 6C0.5 5.17 0.6576 4.39 0.9728 3.66C1.288 2.93 1.7154 2.295 2.255 1.755C2.795 1.215 3.43 0.7876 4.16 0.4728C4.89 0.158 5.67 0.0004 6.5 0C7.33 0 8.11 0.1576 8.84 0.4728C9.57 0.788 10.205 1.2154 10.745 1.755C11.285 2.295 11.7126 2.93 12.0278 3.66C12.343 4.39 12.5004 5.17 12.5 6C12.5 6.83 12.3424 7.61 12.0272 8.34C11.712 9.07 11.2846 9.705 10.745 10.245C10.205 10.785 9.57 11.2126 8.84 11.5278C8.11 11.843 7.33 12.0004 6.5 12ZM6.5 10.8C7.84 10.8 8.975 10.335 9.905 9.405C10.835 8.475 11.3 7.34 11.3 6C11.3 4.66 10.835 3.525 9.905 2.595C8.975 1.665 7.84 1.2 6.5 1.2C5.16 1.2 4.025 1.665 3.095 2.595C2.165 3.525 1.7 4.66 1.7 6C1.7 7.34 2.165 8.475 3.095 9.405C4.025 10.335 5.16 10.8 6.5 10.8Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_55928">
                                            <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>

                        </p>
                    </div>
                </div>
                <p className='text-[14px] sm:text-[24px] font-semibold text-center text-[#FFED63] custombp:my-1 my-3 mx-14 sm:mx-0 custombp:leading-[16px]'>Choose text and image or keep it simple and without</p>
                <div className=' w-full hidden lg:block pr-2'>
                    <div className=' justify-between flex my-3 mb-[-43px] mx-10'>
                        <img className='w-[44px] mr-3 cursor-pointer buttonPrevMessage' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                        <img className='w-[44px]  cursor-pointer buttonNextMessage' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                    </div>
                </div>
                <div className='max-w-[340px] sm:max-w-[900px] m-auto w-full '>

                    <Swiper

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

                                slidesPerView: 1.5,
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
                                    className={`${selectedMessage === index && 'border-[2px] !border-[#FFED63]'} flex justify-between items-center custombp:p-1 p-2 rounded-[50px] border-[2px] border-white cursor-pointer max-w-[220px] w-full`} >
                                    <p className='w-[150px] truncate saira text-[14px] font-medium'>{item.desc}</p>
                                    <svg className='cursor-pointer mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 9.667C7 8.95967 7.28099 8.28131 7.78115 7.78115C8.28131 7.28099 8.95967 7 9.667 7H18.333C18.6832 7 19.03 7.06898 19.3536 7.20301C19.6772 7.33704 19.9712 7.53349 20.2189 7.78115C20.4665 8.0288 20.663 8.32281 20.797 8.64638C20.931 8.96996 21 9.31676 21 9.667V18.333C21 18.6832 20.931 19.03 20.797 19.3536C20.663 19.6772 20.4665 19.9712 20.2189 20.2189C19.9712 20.4665 19.6772 20.663 19.3536 20.797C19.03 20.931 18.6832 21 18.333 21H9.667C9.31676 21 8.96996 20.931 8.64638 20.797C8.32281 20.663 8.0288 20.4665 7.78115 20.2189C7.53349 19.9712 7.33704 19.6772 7.20301 19.3536C7.06898 19.03 7 18.6832 7 18.333V9.667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.012 16.737C3.70534 16.5622 3.45027 16.3095 3.27258 16.0045C3.09488 15.6995 3.00085 15.353 3 15V5C3 3.9 3.9 3 5 3H15C15.75 3 16.158 3.385 16.5 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21L16.657 16.657M16.657 16.657C17.3998 15.9141 17.9891 15.0321 18.3912 14.0615C18.7932 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94936 18.7932 8.90905 18.3912 7.93842C17.9891 6.96779 17.3998 6.08585 16.657 5.34296C15.9141 4.60007 15.0321 4.01078 14.0615 3.60874C13.0909 3.20669 12.0506 2.99976 11 2.99976C9.94936 2.99976 8.90905 3.20669 7.93842 3.60874C6.96779 4.01078 6.08585 4.60007 5.34296 5.34296C3.84263 6.84329 2.99976 8.87818 2.99976 11C2.99976 13.1217 3.84263 15.1566 5.34296 16.657C6.84329 18.1573 8.87818 19.0002 11 19.0002C13.1217 19.0002 15.1566 18.1573 16.657 16.657Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <p className='text-[14px] sm:text-[24px] font-semibold text-center text-[#FFED63] custombp:my-1 my-3 '>Chosse an image</p>
                <div className='lg:mt-[80px]'>
                    <div className=' w-full hidden lg:block mb-[-100px] pr-2'>
                        <div className=' justify-between flex my-3  mx-10'>
                            <img className='w-[44px] mr-3 cursor-pointer buttonPrevGif' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                            <img className='w-[44px]  cursor-pointer buttonNextGif' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                        </div>
                    </div>
                    <div className='max-w-[340px] sm:max-w-[900px] m-auto w-full '>
                        <Swiper

                            onSwiper={(swiper) => {
                                swiperRef = swiper;
                            }}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: '.buttonPrevGif',
                                nextEl: '.buttonNextGif',
                            }}

                            onSlideChange={(swiper) => {
                                const realIndex = swiper.realIndex + 0;
                                setSelectedGif(realIndex);
                            }}

                            loop={true}

                            breakpoints={{
                                0: {

                                    slidesPerView: 3,
                                    spaceBetween: 3,
                                },
                                650: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                940: {
                                    slidesPerView: 6,
                                    spaceBetween: 10,
                                },

                            }}
                        >


                            {dataGif.map((item, index) => (
                                <SwiperSlide>
                                    <div className='flex' key={index}>
                                        <img onClick={e => setSelectedGif(index)} className={`${selectedGif === index && '  border-[2px] border-[#FFED63] opacity-[1] relative'}   rounded-[20px] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] opacity-[0.5] cursor-pointer`} src={item.image} alt="gif1" />
                                        <svg className=' absolute top-1 left-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                            <path d="M4.25 17V19C4.25 19.5304 4.44315 20.0391 4.78697 20.4142C5.13079 20.7893 5.5971 21 6.08333 21H17.0833C17.5696 21 18.0359 20.7893 18.3797 20.4142C18.7235 20.0391 18.9167 19.5304 18.9167 19V17M7 11L11.5833 16M11.5833 16L16.1667 11M11.5833 16V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </SwiperSlide>
                            ))}

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
                <p className='text-center text-[12px] sm:text-[14px] saira font-semibold underline mt-2 custombp:mb-2 mb-5'>Choose personalize experience</p>
                <div className='flex justify-center'>
                    <button onClick={e => shareRefferalLink()} className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold custombp:py-1 py-2 sm:max-w-[350px]'>Share Referral Link!</button>
                </div>
                <p className={`cursor-pointer text-center text-[16px] saira font-semibold underline my-1 ${isLinkCopied === true ? 'opacity-70' : 'opacity-100'}`} onClick={e => copyToClipboard()}>Copy link</p>


                <Tooltip


                    id="my-tooltip-inline2"
                    style={{ backgroundColor: "white", color: "black", maxWidth: "360px", width: "100%", borderRadius: "22px", zIndex: "999" }}
                >
                    <div>
                        <p className='text-[14px] font-semibold text-center text-black my-2'>Be the king</p>
                        <div className='flex justify-between'>
                            <div className='flex items-start w-[80px]'>
                                <p className='text-black  text-[12px] saira font-medium'>1.</p>
                                <p className='text-black text-[12px] saira font-medium'>You will be the kind that sends your friends to double their money and have fun 👬</p>
                            </div>
                            <div className='w-[2px] h-[130px] bg-[#FFED63]'></div>
                            <div className='flex items-start w-[80px]'>
                                <p className='text-black  text-[12px] saira font-medium'>2.</p>
                                <p className='text-black text-[12px] saira font-medium'>For eveery friend that doubles the money you will get 30 raffle tickets and 1$ 🃏</p>
                            </div>
                            <div className='w-[2px] h-[130px] bg-[#FFED63]'></div>
                            <div className='flex items-start w-[130px] leading-[15px]'>
                                <p className='text-black  text-[12px] saira font-medium'>3.</p>
                                <p className='text-black text-[12px] saira font-medium'>If your friends double their money, you can take them to Vegas if you win the raffle, and they can take you if they win and you took the double-the-money offer</p>
                            </div>

                        </div>

                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default Refferals
