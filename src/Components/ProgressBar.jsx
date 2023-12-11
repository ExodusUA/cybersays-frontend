import React, { useState, useEffect, useRef } from 'react';
import gradientFirst from '../images/progress/0.png'
import gradientSecond from '../images/progress/33.png'
import gradientThird from '../images/progress/66.png'
import gradientFourth from '../images/progress/100.png'

function ProgressBar() {
    const gradientId = 'progressGradient';

    const gradientStops = [
        { offset: '0%', color: '#63DEA8', opacity: 1 },
        { offset: '100%', color: '#DFE758', opacity: 1 },
    ];

    const animateRef = useRef();
    const percentage = 70;

    useEffect(() => {
        if (animateRef.current) {
            animateRef.current.beginElement();
        }
    }, [percentage]);

    const [pointState, setPointState] = useState(2);

    return (
        <div className='px-5 lg:px-11 md:mt-14'>
            <h2 className='text-white text-[24px] font-bold text-center my-5'>3 milestones:</h2>
            <div className='gradient-milestone2 max-w-[770px] xl:w-full p-2 pb-0 lg:p-5 lg:pb-0 m-auto rounded-[16px] '>
                <div className=' relative w-[320px] m-auto md:w-[730px]'>
                    <div className={` absolute top-[-30px] md:top-[22px]  ${pointState === 0 ? 'left-[-13px] md:left-[-18px] !top-[-22px] md:!top-[32px]' :
                        pointState === 1 ? 'left-[83px] md:left-[203px]' :
                            pointState === 2 ? 'right-[95px] md:right-[227px]' :
                                pointState === 3 ? 'right-[-12px] md:right-[-18px] md:!top-[18px]' :
                                    'hidden'
                        }`}>
                        <div className=' !bg-white py-1 px-1 md:px-3 rounded-xl '><p className='text-gradient saira text-[12px] md:text-[14px] font-semibold w-[50px] md:w-[unset] text-center'>You are here</p></div>
                        <hr className='w-[1px] h-[30px] md:h-[70px] border-dashed border-[1px] border-white m-auto mt-1 ' />
                        <div className=' w-[12px] h-[12px] gradient-line border-[1px] border-white m-auto mt-1'></div>
                    </div>

                    <img className='w-[320px] m-auto md:w-[730px] mt-[40px] md:mt-0' src={`${pointState === 0 ? gradientFirst :
                        pointState === 1 ? gradientSecond :
                            pointState === 2 ? gradientThird :
                                pointState === 3 ? gradientFourth :
                                    gradientFirst
                        }`} alt="Gradient" />

                </div>
                <div className=' flex justify-between'>
                    <div className='gradient-progressBarBg px-2 pb-10 max-w-[235px] w-full text-[12px] lg:text-[14px] text-center saira mx-1 font-semibold'>Make the easiest 10$ of your life</div>
                    <div className='gradient-progressBarBg px-2 pb-10 max-w-[235px] w-full text-[12px] lg:text-[14px] text-center saira mx-1 font-semibold'>Make raffle tickets to be able to be the one to go to Vegas</div>
                    <div className='gradient-progressBarBg px-2 pb-10 max-w-[235px] w-full text-[12px] lg:text-[14px] text-center saira mx-1 font-semibold'>Take your friends to the craziest weekend ever in Vegas</div>
                </div>

            </div>
        </div>
    )
}

export default ProgressBar