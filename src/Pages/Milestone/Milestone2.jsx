import React, { useState, useEffect } from 'react';
import logoCyber from '../../images/logoCyberYellow.png'
import man from '../../images/smileMan.png'
import sticker from '../../images/sticker1.png'
import handMoney from '../../images/handMoney.png'
import field from '../../images/fieldMilestone.png'
import field2 from '../../images/fieldMilestone2.png'
import fieldDesctop from '../../images/fieldDesctop.png'
import fieldDesctop2 from '../../images/fieldDesctop2.png'
import arrowBtn from '../../images/arrowMilestoneBtn.png'
import imLive from '../../images/ImLiveLogo.png'
import share from '../../images/shareIcon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import gif1 from '../../images/exampleGif1.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import left from '../../images/sliderBtnLeft.png'
import right from '../../images/sliderBtnRight.png'
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

function Milestone2({ languageData, userData, imLiveURL }) {


    let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    moment.tz.setDefault(userTimezone)



    let swiperRef;

    const [selectedButton, setSelectedButton] = useState(2);
    const [selectedGif, setSelectedGif] = useState(3);
    const [percentage, setPercentage] = useState(35);
    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const shareRefferalLink = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    text: 'Sharing',
                    url: window.location.hostname + '?uid=' + userData?.refferal_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                .catch(err => console.error(err));
        } else {
            console.error('navigator.share is not supported in this browser');
        }
    }

    const copyToClipboard = () => {
        let link = window.location.host + '?uid=' + userData?.refferal_code;
        setIsLinkCopied(true)
        navigator.clipboard.writeText(link);

        setTimeout(() => {
            setIsLinkCopied(false)
        }, 3000);
    }

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [userData]);

    useEffect(() => {
        const updatePercentage = () => {
            let hoursNow = getTimeLeft().hours;
            let hours = (hoursNow / 24) * 100;
            setPercentage(hours);
        };
        updatePercentage();
    }, [timeLeft]);

    function getTimeLeft() {

        let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const now = moment().tz(userTimezone);
        const duration = moment.duration(moment.unix(Number(userData?.timestamp)).tz(userTimezone).add(1, 'days').diff(now));

        return {
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        };
    }


    function formatTime(value) {
        return value < 10 ? `0${value}` : value;
    }

    return (
        <div className='px-5 lg:px-11 md:mt-14'>
            <h2 className='text-white text-[24px] font-bold text-center my-5'>Milestone #2:</h2>
            <div className='gradient-milestone2 max-w-[1170px] xl:w-full p-3 lg:p-6 m-auto rounded-[16px] '>
                <div className='flex items-center gap-3 justify-center lg:justify-normal py-2'>
                    <img className=' w-[115px] lg:w-[400px] mb-[-5px] lg:mb-[5px] lg:mr-4' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[16px] lg:text-[32px] saira'>be the king that shares it with your friends, getting raffle tickets and fly to Vegas!</p>
                </div>
                <div className='md:flex justify-around md:justify-between md:items-center'>
                    <div className='relative mt-3 w-full max-w-[320px] lg:max-w-[500px] m-auto md:m-[unset] lg:mr-14'>
                        <img className=' absolute top-0 left-0 w-[48px] lg:w-[80px] h-[48px] lg:h-[80px]' src={sticker} alt="sticker" />
                        <img className='w-full m-auto' src={man} alt="man" />
                        <button className=' bottom-0 right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-[90%] m-auto bg-[#83869b] backdrop-blur-xl bg-opacity-25 border-[1px] border-[#FF1CBB] p-[6px] rounded-[12px] md:rounded-[18px]'>
                            <div className='bg-[#02D686] text-[14px] font-semibold saira rounded-[8px] md:rounded-[14px] py-2 flex justify-center items-center px-2'>
                                <p className='saira text-[14px] lg:text-[20px] font-semibold leading-4 lg:leading-6'>Deposit more in ImLive</p>
                                <p className='saira text-[14px] lg:text-[20px] font-semibold leading-4 text-gradient md:mx-1'>and</p>
                                <p className='saira text-[14px] lg:text-[20px] font-semibold leading-4 lg:leading-6'>Refer more friends</p>
                            </div>
                        </button>
                    </div>
                    <div className='md:min-w-[400px] w-full md:ml-2'>
                        <div class=" justify-center flex my-3">
                            <div class="flex border-[1px] border-white m-auto  rounded-[50px] ">
                                <div onClick={e => setSelectedButton(1)} className={`${selectedButton === 1 && 'bg-white'}  rounded-[50px] px-[20px] py-[5px] lg:py-[2px] cursor-pointer`}> <p className={`${selectedButton === 1 && 'text-gradient'} text-white saira font-bold`}>Deposit</p> </div>
                                <div onClick={e => setSelectedButton(2)} className={`${selectedButton === 2 && 'bg-white'} rounded-[50px] px-[20px] py-[5px] lg:py-[2px] cursor-pointer`}><p className={`${selectedButton === 2 && 'text-gradient'} text-white saira font-bold`}>Refer</p></div>
                            </div>
                        </div>

                        {selectedButton === 1 && (
                            <div className='lg:my-[120px] '>
                                <div className=' flex justify-center items-center ml-2'>
                                    <img className='w-[32px] h-[32px] mr-3' src={handMoney} alt="handMoney" />
                                    <p className=' text-[14px] saira font-normal max-w-[240px] lg:max-w-[unset] w-full'><span className='saira text-[#18D7AB] font-semibold'>Deposit</span> more in ImLive and get raffle tickets</p>
                                </div>
                                <div className=' relative my-3 lg:my-5 max-w-[320px] lg:max-w-[550px] w-full m-auto'>
                                    <img className='block lg:hidden' src={field} alt="field" />
                                    <img className='hidden lg:block ' src={fieldDesctop} alt="fieldDesctop" />
                                    <div className=''>
                                        <div className=' lg:w-[unset] absolute top-[7px] lg:top-[12px] left-[35px] lg:left-[75px] cursor-pointer'>
                                            <p className='text-[12px] lg:text-[16px] text-[#1E1E1E] font-normal saira text-center mb-[-3px]'>Deposits I made:</p>
                                            <p className='text-[12px] lg:text-[16px] text-gradient font-semibold saira text-center'>{userData?.deposits} deposits</p>
                                        </div>
                                        <img className='w-[73px] lg:w-[111px] absolute top-[7px] right-[35px] lg:right-[80px] cursor-pointer' src={imLive} alt="imLive" />
                                    </div>
                                </div>
                                <Link to={imLiveURL}>
                                    <button className='px-[30px] py-[14px] saira gradient-milestoneBtn text-[16px] w-full font-semibold flex justify-center md:max-w-[250px] m-auto'>
                                        Make a deposit
                                        <img className='w-[24px] h-[24px] ml-4' src={arrowBtn} alt="arrowBtn" />
                                    </button>
                                </Link>
                            </div>
                        )}
                        {selectedButton === 2 && (
                            <div className=''>
                                <div className='max-w-[400px] lg:max-w-[unset] m-auto'>
                                    <div className=' flex justify-center items-center lg:pb-2'>
                                        <img className='w-[32px] h-[32px] mr-3' src={share} alt="share" />
                                        <p className=' text-[14px] saira font-normal max-w-[240px] md:max-w-[unset] w-full'><span className='saira text-[#18D7AB] font-semibold'>Share with your friends</span> and get raffle tickets</p>
                                    </div>
                                    <div className=" w-full h-[6px] bg-[#ADADAD] !rounded flex items-center my-3">
                                        <div
                                            className=" h-[8px] relative gradient-line border-[1px] rounded"
                                            style={{ width: `${percentage}%` }}
                                        >
                                        </div>

                                    </div>
                                    <div className=' flex justify-between '>
                                        <p className='text-[12px] lg:text-[14px]  text-white font-semibold saira w-[100px] lg:w-[unset] leading-4'>{formatTime(timeLeft.hours)} hours to refer your friends</p>
                                        <p className='text-[14px] lg:text-[16px] text-white font-semibold saira  leading-4'>{
                                            timeLeft.seconds > 0 ? `${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}` : 'Ended'
                                        }</p>

                                    </div>
                                    <p className='text-[14px] lg:text-[16px] text-white font-normal saira leading-4 text-center mx-8 lg:mx-0 mt-5'>1$ per each friend that completes the 4 steps. You’ll get paid in $'clock'</p>

                                </div>

                                <div className=' relative my-3 lg:my-5 max-w-[280px] lg:max-w-[550px] w-full m-auto'>
                                    <img className='block lg:hidden' src={field2} alt="field2" />
                                    <img className='hidden lg:block ' src={fieldDesctop2} alt="fieldDesctop2" />
                                    <div className=''>
                                        <div className=' absolute top-[7px] lg:top-[10px] left-[20px] lg:left-[65px] cursor-pointer w-[100px] lg:w-[unset]'>
                                            <p className='text-[12px] lg:text-[14px] text-[#1E1E1E] font-normal saira text-center  leading-[14px]'>Friends you referred 🏆</p>
                                            <p className='text-[12px] lg:text-[14px] text-gradient font-semibold saira text-center'>{userData?.refferals ? JSON.parse(userData?.refferals).length : 0} friedns</p>
                                        </div>
                                        <div className=' absolute top-[7px] lg:top-[10px] right-[15px] lg:right-[55px] cursor-pointer w-[100px] lg:w-[unset]'>
                                            <p className='text-[12px] lg:text-[14px] text-[#1E1E1E] font-normal saira text-center leading-[14px]'>Money you’ve made 💸</p>
                                            <p className='text-[12px] lg:text-[14px] text-gradient font-semibold saira text-center'>${userData?.earned}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-full hidden lg:block pr-2'>
                                    <div className=' justify-end flex my-3'>
                                        <img className='w-[32px] mr-3 cursor-pointer buttonPrev' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                                        <img className='w-[32px]  cursor-pointer buttonNext' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                                    </div>
                                </div>
                                <div className='max-w-[320px] lg:max-w-[unset] m-auto w-full'>
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            swiperRef = swiper;
                                        }}
                                        modules={[Navigation]}
                                        navigation={{
                                            prevEl: '.buttonPrev',
                                            nextEl: '.buttonNext',
                                        }}
                                        onSlideChange={(swiper) => {
                                            const realIndex = swiper.realIndex + 2;
                                            setSelectedGif(realIndex);
                                        }}

                                        loop={true}

                                        breakpoints={{
                                            0: {

                                                slidesPerView: 2.3,
                                                spaceBetween: 0,
                                            },
                                            640: {
                                                slidesPerView: 2.3,
                                                spaceBetween: 0,
                                            },

                                            1025: {
                                                slidesPerView: 4.1,
                                                spaceBetween: 0,

                                            },
                                        }}
                                    >

                                        <SwiperSlide>
                                            <img onClick={e => setSelectedGif(1)} className={`${selectedGif === 1 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px] cursor-pointer`} src={gif1} alt="gif1" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={e => setSelectedGif(2)} className={`${selectedGif === 2 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px] cursor-pointer`} src={gif1} alt="gif1" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={e => setSelectedGif(3)} className={`${selectedGif === 3 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px] cursor-pointer`} src={gif1} alt="gif1" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={e => setSelectedGif(4)} className={`${selectedGif === 4 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px] cursor-pointer`} src={gif1} alt="gif1" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={e => setSelectedGif(5)} className={`${selectedGif === 5 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px] cursor-pointer`} src={gif1} alt="gif1" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={e => setSelectedGif(6)} className={`${selectedGif === 6 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px] cursor-pointer`} src={gif1} alt="gif1" />
                                        </SwiperSlide>
                                    </Swiper>


                                </div>
                                <p className='text-[12px] text-white font-normal saira leading-4 text-center mt-3 mb-1'>Don’t promote anywhere that can spam people</p>

                                <button onClick={e => shareRefferalLink()} className='px-[20px] py-[14px] saira gradient-milestoneBtn text-[16px] w-full font-semibold flex justify-center md:max-w-[250px] m-auto'>
                                    Share Referral Link! 🙋
                                    <img className='w-[24px] h-[24px] ml-2' src={arrowBtn} alt="arrowBtn" />
                                </button>

                                <p onClick={e => copyToClipboard()} className='underline saira text-center text-[16px] font-semibold text-white mt-2 duration-300 cursor-pointer '>{isLinkCopied === true ? 'Link Copied!' : 'Copy Link'}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Milestone2
