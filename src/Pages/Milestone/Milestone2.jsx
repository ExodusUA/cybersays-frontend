import React, { useState } from 'react';
import logoCyber from '../../images/logoCyberYellow.png'
import man from '../../images/smileMan.png'
import sticker from '../../images/sticker1.png'
import handMoney from '../../images/handMoney.png'
import field from '../../images/fieldMilestone.png'
import field2 from '../../images/fieldMilestone2.png'
import arrowBtn from '../../images/arrowMilestoneBtn.png'
import imLive from '../../images/ImLiveLogo.png'
import share from '../../images/shareIcon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import gif1 from '../../images/exampleGif1.png'

function Milestone2() {

    const [selectedButton, setSelectedButton] = useState(1);
    const [selectedGif, setSelectedGif] = useState(null);
    const [percentage, setPercentage] = useState(35);

    return (
        <div>
            <h2 className='text-[#1E1E1E] text-[24px] font-bold text-center my-2'>Milestone #2:</h2>
            <div className='gradient-milestone2 w-[90%] p-3 m-auto rounded-[16px] '>
                <div className='flex items-center gap-3 justify-center pt-4'>
                    <img className=' w-[115px] mb-[-5px] ' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[16px] saira'>be the king that shares it with your friends, getting raffle tickets and fly to Vegas!</p>
                </div>
                <div className='relative mt-3'>
                    <img className=' absolute top-0 left-0 w-[48px] h-[48px]' src={sticker} alt="sticker" />
                    <img className='w-full m-auto' src={man} alt="man" />
                    <button className=' bottom-0 right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-[90%] m-auto bg-[#83869b] backdrop-blur-xl bg-opacity-25 border-[1px] border-[#FF1CBB] p-[6px] rounded-[12px]'>
                        <div className='bg-[#02D686] text-[14px] font-semibold saira rounded-[8px] py-2 flex justify-center items-center'>
                            <p className='saira text-[14px] font-semibold leading-4'>Deposit more in ImLive</p>
                            <p className='saira text-[14px] font-semibold leading-4 text-gradient'>and</p>
                            <p className='saira text-[14px] font-semibold leading-4'>Refer more friends</p>
                        </div>
                    </button>
                </div>
                <div class=" justify-center flex my-3">
                    <div class="flex border-[1px] border-white m-auto  rounded-[50px] ">
                        <div onClick={e => setSelectedButton(1)} className={`${selectedButton === 1 && 'bg-white'}  rounded-[50px] px-[20px] py-[5px] cursor-pointer`}> <p className={`${selectedButton === 1 && 'text-gradient'} text-white saira font-bold`}>Deposit</p> </div>
                        <div onClick={e => setSelectedButton(2)} className={`${selectedButton === 2 && 'bg-white'} rounded-[50px] px-[20px] py-[5px] cursor-pointer`}><p className={`${selectedButton === 2 && 'text-gradient'} text-white saira font-bold`}>Refer</p></div>
                    </div>
                </div>
                {selectedButton === 1 && (
                    <div>
                        <div className=' flex justify-center items-center'>
                            <img className='w-[32px] h-[32px] mr-3' src={handMoney} alt="handMoney" />
                            <p className=' text-[14px] saira font-normal max-w-[240px] w-full'><span className='saira text-[#18D7AB] font-semibold'>Deposit</span> more in ImLive and get raffle tickets</p>
                        </div>
                        <div className=' relative my-3'>
                            <img src={field} alt="field" />
                            <div className=''>
                                <div className=' absolute top-[7px] left-[30px] cursor-pointer'>
                                    <p className='text-[12px] text-[#1E1E1E] font-normal saira text-center mb-[-3px]'>Deposits I made:</p>
                                    <p className='text-[12px] text-gradient font-semibold saira text-center'>12 deposits</p>
                                </div>
                                <img className='w-[73px]  absolute top-[7px] right-[35px] cursor-pointer' src={imLive} alt="imLive" />
                            </div>
                        </div>
                        <button className='px-[30px] py-[14px] saira gradient-milestoneBtn text-[16px] w-full font-semibold flex justify-center'>
                            Make a deposit
                            <img className='w-[24px] h-[24px] ml-4' src={arrowBtn} alt="arrowBtn" />
                        </button>
                    </div>
                )}
                {selectedButton === 2 && (
                    <div>
                        <div className=' flex justify-center items-center '>
                            <img className='w-[32px] h-[32px] mr-3' src={share} alt="share" />
                            <p className=' text-[14px] saira font-normal max-w-[250px] w-full'><span className='saira text-[#18D7AB] font-semibold'>Share with your friends</span> and get raffle tickets</p>
                        </div>
                        <div className=" w-full h-[6px] bg-[#ADADAD] !rounded flex items-center my-3">
                            <div
                                className=" h-[8px] relative gradient-line border-[1px] rounded"
                                style={{ width: `${percentage}%` }}
                            >
                            </div>

                        </div>
                        <div className=' flex justify-between '>
                            <p className='text-[12px] text-white font-semibold saira w-[100px] leading-4'>24 hours to refer your friends</p>
                            <p className='text-[14px] text-white font-semibold saira  leading-4'>00:09:59</p>
                        </div>
                        <p className='text-[14px] text-white font-normal saira leading-4 text-center mx-8 mt-5'>1$ per each friend that completes the 4 steps. You’ll get paid in $'clock'</p>
                        <div className=' relative my-3'>
                            <img src={field2} alt="field2" />
                            <div className=''>
                                <div className=' absolute top-[7px] left-[25px] cursor-pointer w-[100px]'>
                                    <p className='text-[12px] text-[#1E1E1E] font-normal saira text-center  leading-4'>Friends you referred 🏆</p>
                                    <p className='text-[12px] text-gradient font-semibold saira text-center'>23 friedns</p>
                                </div>
                                <div className=' absolute top-[7px] right-[25px] cursor-pointer w-[100px]'>
                                    <p className='text-[12px] text-[#1E1E1E] font-normal saira text-center leading-4'>Money you’ve made 💸</p>
                                    <p className='text-[12px] text-gradient font-semibold saira text-center'>$23</p>
                                </div>
                            </div>
                        </div>
                        <Swiper

                            spaceBetween={0}
                            slidesPerView={2.3}
                            loop={true}
                        >
                            <SwiperSlide>
                                <img onClick={e => setSelectedGif(1)} className={`${selectedGif === 1 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px]`} src={gif1} alt="gif1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={e => setSelectedGif(2)} className={`${selectedGif === 2 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px]`} src={gif1} alt="gif1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={e => setSelectedGif(3)} className={`${selectedGif === 3 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px]`} src={gif1} alt="gif1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={e => setSelectedGif(4)} className={`${selectedGif === 4 && '  gradient opacity-[1]'}   rounded-[12px] w-[120px] h-[100px] opacity-[0.5] p-[2px]`} src={gif1} alt="gif1" />
                            </SwiperSlide>
                        </Swiper>
                        <p className='text-[12px] text-white font-normal saira leading-4 text-center mt-3'>Don’t promote anywhere that can spam people</p>
                        <button className='px-[30px] py-[14px] saira gradient-milestoneBtn text-[16px] w-full font-semibold flex justify-center  mt-2'>
                            Share Referral Link! 🙋
                            <img className='w-[24px] h-[24px] ml-2' src={arrowBtn} alt="arrowBtn" />
                        </button>
                        <p className='underline saira text-center text-[16px] font-semibold text-white mt-2 duration-300 cursor-pointer '>Copy Link</p>
                    </div>
                )}
            </div>
        </div>


    )
}

export default Milestone2
