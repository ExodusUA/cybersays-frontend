import React, { useState, useEffect, useRef } from 'react';
import gradientFirst from '../images/progress/0.png'
import gradientSecond from '../images/progress/33.png'
import gradientThird from '../images/progress/66.png'
import gradientFourth from '../images/progress/100.png'

function ProgressBar() {

    const animateRef = useRef();
    const percentage = 70;

    useEffect(() => {
        if (animateRef.current) {
            animateRef.current.beginElement();
        }
    }, [percentage]);

    const [pointState, setPointState] = useState(1);

    return (
        <div className='px-5 lg:px-11 md:mt-14'>
            <h2 className='text-white text-[24px] font-bold text-center my-5'>3 milestones:</h2>
            <div className='gradient-milestone2 max-w-[770px] xl:w-full p-2 pb-0 lg:p-5 lg:pb-0 m-auto rounded-[16px] '>
                <div className=' relative w-[320px] m-auto md:w-[730px] mt-5'>
                    <div className={` absolute top-[-37px] lg:top-[-6px]   ${pointState === 0 ? 'left-[13px] md:left-[8px] ' :
                        pointState === 1 ? 'left-[77px] md:left-[205px]' :
                            pointState === 2 ? 'right-[85px] md:right-[220px]' :
                                pointState === 3 ? 'right-[12px] md:right-[10px] ' :
                                    'hidden'
                        }`}>
                        <div className=' !bg-white py-1 px-1 md:px-3 rounded-[16px] '><p className='text-gradient saira text-[12px] md:text-[14px] font-semibold w-[50px]  text-center'>You are here</p></div>
                        <hr className='w-[1px] h-[30px] md:h-[60px] border-dashed border-[1px] border-white m-auto mt-1 ' />
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