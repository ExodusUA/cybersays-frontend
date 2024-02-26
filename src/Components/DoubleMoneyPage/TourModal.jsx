import React, { useEffect, useState,useRef  } from 'react';
import close from '../../images/CyberSaysPage/closeMenu.png'
import hero from '../../images/CyberSaysPage/tourHero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useDesign } from '../../Helpers/Design/DesignContext'


function TourModal({ setOpen, languageData }) {
    const { design } = useDesign()

    const dataShort = [
        {
            img: design === '0' ? hero : require('../../images/NewDesign/tourHero.png'),
            desc: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            img: design === '0' ? hero : require('../../images/NewDesign/tourHero.png'),
            desc: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            img: design === '0' ? hero : require('../../images/NewDesign/tourHero.png'),
            desc: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
    ]
    const dataLong = [
        {
            img: design === '0' ? hero : require('../../images/NewDesign/tourHero.png'),
            desc: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            img: design === '0' ? hero : require('../../images/NewDesign/tourHero.png'),
            desc: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        }

    ]
    const prevCurrentSlide = useRef(null);
    
    useEffect(() => {
        window.localStorage.setItem('visitedTour', true)
    }, [])

    const [blobImage, setBlobImage] = useState(null)
    const [selectedButton, setSelectedButton] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(null);

    useEffect(() => {
        
        if (prevCurrentSlide.current !== currentSlide) {
            getBlob();
            prevCurrentSlide.current = currentSlide; 
        }

        async function getBlob() {
            let selectedData = selectedButton === 1 ? dataShort : dataLong;
            if (selectedData[currentSlide]) {
                const blob = await fetch(selectedData[currentSlide].img).then(r => r.blob());
                setBlobImage(blob);
            }
        }

        console.log(currentSlide);
    }, [currentSlide, selectedButton, dataShort, dataLong]);

    const handleShareShort = () => {

        if (currentSlide !== null) {
            const selectedSlide = dataShort[currentSlide];

            if (navigator.share) {
                navigator.share({
                    title: selectedSlide.img,
                    text: selectedSlide.desc,
                    files: [
                        new File([blobImage], 'file.png', {
                            type: blobImage.type,
                        }),
                    ],
                })
                    .then(() => console.log('Successful share! 🎉'))
                    .catch(error => console.log('Error sharing:', error));
            } else {
                console.log('Web Share API not supported.');

            }
        }
    };

    const handleShareLong = () => {

        if (currentSlide !== null) {
            const selectedSlide = dataLong[currentSlide];

            if (navigator.share) {
                navigator.share({
                    title: selectedSlide.img,
                    text: selectedSlide.desc,
                    files: [
                        new File([blobImage], 'file.png', {
                            type: blobImage.type,
                        }),
                    ],
                })
                    .then(() => console.log('Successful share! 🎉'))
                    .catch(error => console.log('Error sharing:', error));
            } else {
                console.log('Web Share API not supported.');

            }
        }
    };

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end max-w-[600px] m-auto md:my-4'>
                <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
            </div>
            <div class=" justify-center flex my-2">
                <div class={`flex border-[1px]  m-auto ${design === '0' ? 'rounded-[50px] border-[#FFED63]' : 'rounded-[14px] border-[#FDA62D]'}   `}>
                    <div onClick={e => setSelectedButton(1)} className={`${selectedButton === 1 && (design === '0' ? 'bg-[#FFED63]' : 'gradient-tourToggle')} ${design === '0' ? 'rounded-[50px]' : 'rounded-[12px]'}  px-[20px] py-[5px] md:py-[8px]  cursor-pointer`}>
                        <p className={`${selectedButton === 1 && '!text-black'} text-white saira font-bold text-[14px]`}>{languageData?.tourShortToggle}</p>
                    </div>
                    <div onClick={e => setSelectedButton(2)} className={`${selectedButton === 2 && (design === '0' ? 'bg-[#FFED63]' : 'gradient-tourToggle')} ${design === '0' ? 'rounded-[50px]' : 'rounded-[12px]'} px-[20px] py-[5px] md:py-[8px] cursor-pointer`}>
                        <p className={`${selectedButton === 2 && '!text-black'} text-white saira font-bold text-[14px]`}>{languageData?.tourLongToggle}</p>
                    </div>
                </div>
            </div>
            {selectedButton === 1 && (
                <div className='max-w-[375px] md:max-w-[600px] mac:!max-w-[400px] m-auto'>
                    <p className=' text-[16px] md:text-[24px] font-semibold text-center'>{languageData?.tourShortTitle}</p>
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            }
                        }}
                    >
                        {dataShort.map((item, index) => (
                            <SwiperSlide className='px-4' key={item}>
                                <img className='w-[375px] md:w-full m-auto mt-3' src={item.img} alt="hero" />
                                <p className='saira font-medium text-center text-[14px] mx-2 lg:mt-4'>{item.desc}</p>

                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className='flex justify-center mx-2'>
                        <button onClick={handleShareShort} className={`max-w-[360px] w-full bg-white  border-[2px] ${design === '0' ? ' rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'} text-black text-[18px] saira font-semibold py-2 flex justify-center mt-8 mac:!mt-0 absolute mx-2`}>
                            {languageData?.tourShortBtn}
                            <svg className='ml-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12.5L14 5.5V9.5C7 10.5 4 15.5 3 20.5C5.5 17 9 15.4 14 15.4V19.5L21 12.5Z" fill="#1E1E1E" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            {selectedButton === 2 && (
                <div className='max-w-[375px] md:max-w-[600px] mac:!max-w-[400px]  m-auto'>
                    <p className=' text-[16px] md:text-[24px] font-semibold text-center'>{languageData?.tourLongTitle}</p>
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
                        {dataLong.map((item, index) => (
                            <SwiperSlide className='px-4' key={item}>
                                <img className='w-[375px] md:w-full m-auto mt-3' src={item.img} alt="hero" />
                                <p className='saira font-medium text-center text-[14px] mx-2 lg:mt-4'>{item.desc}</p>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className='flex justify-center mx-2'>
                        <button onClick={handleShareLong} className={`max-w-[360px] w-full bg-white  border-[2px] ${design === '0' ? ' rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'} text-black text-[18px] saira font-semibold py-2 flex justify-center mt-8 mac:!mt-0 absolute mx-2`}>
                            {languageData?.tourLongBtn}
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
