import React, { useState } from 'react';
import close from '../../images/CyberSaysPage/closeMenu.png'
import hero from '../../images/CyberSaysPage/tourHero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


function TourModal({ setOpen }) {

    const dataShort = [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
    ]
    const dataLong = [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },

    ]
    const [selectedButton, setSelectedButton] = useState(1);
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            <div class=" justify-center flex my-2">
                <div class="flex border-[1px] border-[#FFED63] m-auto  rounded-[50px] ">
                    <div onClick={e => setSelectedButton(1)} className={`${selectedButton === 1 && 'bg-[#FFED63]'}  rounded-[50px] px-[20px] py-[5px] lg:py-[2px] cursor-pointer`}>
                        <p className={`${selectedButton === 1 && '!text-black'} text-white saira font-bold text-[14px]`}>Short version</p>
                    </div>
                    <div onClick={e => setSelectedButton(2)} className={`${selectedButton === 2 && 'bg-[#FFED63]'} rounded-[50px] px-[20px] py-[5px] lg:py-[2px] cursor-pointer`}>
                        <p className={`${selectedButton === 2 && '!text-black'} text-white saira font-bold text-[14px]`}>Long version</p>
                    </div>
                </div>
            </div>
            {selectedButton === 1 && (
                <div className='max-w-[400px] m-auto'>
                    <p className=' text-[16px] font-semibold text-center'>Lorem ipsum</p>
                    <img className='w-[375px] m-auto mt-3' src={hero} alt="hero" />
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            }
                        }}
                    >
                        {dataShort.map((item, index) => (
                            <SwiperSlide key={item}>
                                <p className='saira font-medium text-center text-[14px] mx-2'>{item.desc}</p>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className='flex justify-center mx-2'>
                        <button className='max-w-[360px] w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2 flex justify-center mt-8 absolute mx-2'>
                            Share the tour
                            <svg className='ml-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12.5L14 5.5V9.5C7 10.5 4 15.5 3 20.5C5.5 17 9 15.4 14 15.4V19.5L21 12.5Z" fill="#1E1E1E" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            {selectedButton === 2 && (
                <div>
                    <p className=' text-[16px] font-semibold text-center'>Lorem ipsum</p>
                    <img className='w-[375px] m-auto mt-3' src={hero} alt="hero" />
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            }
                        }}
                    >
                        {dataLong.map((item, index) => (
                            <SwiperSlide key={item}>
                                <p className='saira font-medium text-center text-[14px]'>{item.desc}</p>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className='flex justify-center mx-2'>
                        <button className='max-w-[360px] w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2 flex justify-center mt-8 absolute mx-2'>
                            Share the tour
                            <svg className='ml-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12.5L14 5.5V9.5C7 10.5 4 15.5 3 20.5C5.5 17 9 15.4 14 15.4V19.5L21 12.5Z" fill="#1E1E1E" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}



        </div>
    )
}

export default TourModal
