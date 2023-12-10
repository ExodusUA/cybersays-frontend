import React, { useEffect, useRef } from 'react';
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
    return (
        <div className='px-5 lg:px-11 md:mt-14'>
            <h2 className='text-white text-[24px] font-bold text-center my-5'>3 milestones:</h2>
            <div className='gradient-milestone2 max-w-[770px] xl:w-full p-2 pb-0 lg:p-5 lg:pb-0 m-auto rounded-[16px] '>
                <div>
                    <img src={gradientSecond} alt="Gradient" />
                </div>
                <div className=' flex justify-between'>
                    <div className='gradient-progressBarBg px-2 py-10 max-w-[235px] w-full text-[12px] lg:text-[14px] text-center saira mx-1 font-semibold'>Make the easiest 10$ of your life</div>
                    <div className='gradient-progressBarBg px-2 py-10 max-w-[235px] w-full text-[12px] lg:text-[14px] text-center saira mx-1 font-semibold'>Make raffle tickets to be able to be the one to go to Vegas</div>
                    <div className='gradient-progressBarBg px-2 py-10 max-w-[235px] w-full text-[12px] lg:text-[14px] text-center saira mx-1 font-semibold'>Take your friends to the craziest weekend ever in Vegas</div>
                </div>
            
            </div>
        </div>
    )
}

export default ProgressBar