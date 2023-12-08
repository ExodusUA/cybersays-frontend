import React from 'react'
import logoCyber from '../../images/logoCyberYellow.png'
import king from '../../images/smileKing.png'
import sticker from '../../images/sticker1.png'
import arrowBtn from '../../images/arrowMilestoneBtn.png'
import field from '../../images/fieldMilestone.png'
import people from '../../images/peopleIcon.png'
import imLive from '../../images/ImLiveLogo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import left from '../../images/landing/left.png'
import right from '../../images/landing/right.png'
import { Navigation } from 'swiper/modules';

function Milestone1() {

    let swiperRef;

    return (
        <div className='px-11'>
            <h2 className='text-[#1E1E1E] text-[24px] font-bold text-center my-2'>Milestone #1:</h2>
            <div className='gradient-milestone1  max-w-[1170px] xl:w-full p-3 m-auto rounded-[16px] '>
                <div className='flex items-center gap-3 justify-center pt-4'>
                    <img className=' w-[115px] mb-[-5px] ' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[16px] saira'>make the easiest 10$ of your life</p>
                </div>
                <div className='md:flex justify-around md:justify-between md:items-center'>
                    <div className='relative mt-3 w-full max-w-[320px] lg:max-w-[500px] m-auto md:m-[unset] lg:mr-14'>
                        <img className=' absolute top-0 left-0 w-[48px] lg:w-[80px] h-[48px] lg:h-[80px]' src={sticker} alt="sticker" />
                        <img className='w-full max-w-[320px] lg:max-w-[500px] m-auto h-full' src={king} alt="king" />
                        <button className='w-full max-w-[300px] lg:max-w-[unset]  bottom-0 right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute sm:w-[90%] m-auto bg-[#83869b] backdrop-blur-xl bg-opacity-25 border-[1px] border-[#FF1CBB] p-[6px] rounded-[12px]'>
                            <div className='bg-[#02D686] text-[14px] lg:text-[20px] font-semibold saira rounded-[8px] py-[2px]'>Deposit 5$, get 10$, enjoy</div>
                        </button>
                    </div>
                    <div className='md:min-w-[400px] w-full md:ml-2'>
                        <p className=' font-normal saira text-[14px] text-center my-2 md:text-left'>A '✅' will appear for each step completed.</p>
                        <div className='mr-[-11px] md:mr-[0px] w-[unset]'>
                            <div className=' w-full hidden md:block '>
                                <div className=' justify-end flex'>
                                    <img className='w-[40px] lg:w-[64px] cursor-pointer buttonPrev' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                                    <img className='w-[40px] lg:w-[64px] cursor-pointer buttonNext' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                                </div>
                            </div>
                            <Swiper
                                onSwiper={(swiper) => {
                                    swiperRef = swiper;
                                }}
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: '.buttonPrev',
                                    nextEl: '.buttonNext',
                                }}
                                spaceBetween={0}
                                loop={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 0,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },

                                    992: {
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className='flex items-center justify-between gap-1  rounded-[14px] py-4 px-2 mr-2  bg-[#83869b] backdrop-blur-xl bg-opacity-25 border-[1px] border-[#FF1CBB]'>
                                        <div className=' flex items-center justify-between  w-full'>
                                            <div className=' bg-gray/25 !rounded-full gradient-number p-2 w-[34px] h-[32px] flex items-center justify-center'>
                                                1
                                            </div>
                                            <p className=' flex justify-between ml-2 w-full'><p className='text-white text-[14px] font-semibold saira'>Register on ImLive 🎉</p> <div className=' flex justify-end'>✅</div></p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex items-center justify-between gap-1  rounded-[14px] py-4 px-2  mr-2 bg-[#83869b] backdrop-blur-xl bg-opacity-25 border-[1px] border-[#FF1CBB]'>
                                        <div className=' flex items-center justify-between  w-full'>
                                            <div className='border-[1px] border-[#088CD9] bg-gray/25 !rounded-full gradient-number p-2 w-[34px] h-[32px] flex items-center justify-center'>
                                                2
                                            </div>
                                            <p className=' flex justify-between ml-2 w-full'><p className='text-white text-[14px] font-semibold saira'>Register on ImLive 🎉</p> <div className=' flex justify-end'>✅</div></p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex items-center justify-between gap-1  rounded-[14px] py-4 px-2  mr-2 bg-[#83869b] backdrop-blur-xl bg-opacity-25 border-[1px] border-[#FF1CBB]'>
                                        <div className=' flex items-center justify-between  w-full'>
                                            <div className='border-[1px] border-[#088CD9] bg-gray/25 !rounded-full gradient-number p-2 w-[34px] h-[32px] flex items-center justify-center'>
                                                3
                                            </div>
                                            <p className=' flex justify-between ml-2 w-full'><p className='text-white text-[14px] font-semibold saira'>Register on ImLive 🎉</p> <div className=' flex justify-end'>✅</div></p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex items-center justify-between gap-1  rounded-[14px] py-4 px-2  mr-2 bg-[#83869b] backdrop-blur-xl bg-opacity-25 border-[1px] border-[#FF1CBB]'>
                                        <div className=' flex items-center justify-between  w-full'>
                                            <div className='border-[1px] border-[#088CD9] bg-gray/25 !rounded-full gradient-number p-2 w-[34px] h-[32px] flex items-center justify-center'>
                                                4
                                            </div>
                                            <p className=' flex justify-between ml-2 w-full'><p className='text-white text-[14px] font-semibold saira'>Register on ImLive 🎉</p> <div className=' flex justify-end'>✅</div></p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className=' relative my-3 max-w-[280px] w-full m-auto'>
                            <img src={field} alt="field" />
                            <div className=''>
                                <div className='w-[50px] absolute top-[7px] left-[50px] cursor-pointer'>
                                    <img className=' w-[40px] m-auto' src={people} alt="people" />
                                    <p className='text-[8px] text-[#1E1E1E] font-normal saira text-center leading-[8px] mt-[2px]'>100+ people already did it</p>
                                </div>

                                <img className='w-[73px]  absolute top-[7px] right-[35px] cursor-pointer' src={imLive} alt="imLive" />
                            </div>
                        </div>
                        <button className='px-[30px] py-[14px] saira gradient-milestoneBtn text-[16px] w-full font-semibold flex justify-center md:max-w-[320px] m-auto'>
                            Double your money now 🤑
                            <img className='w-[24px] h-[24px] ml-2' src={arrowBtn} alt="arrowBtn" />
                        </button>
                        <p className='underline saira text-center text-[16px] font-semibold text-white mt-2 duration-300 cursor-pointer '>Copy Link</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Milestone1