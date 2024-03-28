import React from 'react'
import done from '../images/NewDesign/newTaskDone.png'
import { useDesign } from '../Helpers/Design/DesignContext';
import { Link } from 'react-router-dom';

function DoubleNewTask({ languageData,PartnerURL }) {
    const { design } = useDesign();
    return (
        <div className='max-w-[600px] w-full m-auto'>
            <div style={{ border: '2px solid var(--Linear, #8FE5EC)' }} className='w-full bg-newTaskBg py-5 px-7 sm:px-5 sm:py-8 bg-cover bg-no-repeat rounded-[14px] flex justify-end relative'>

                <img className='w-[18px] h-[18px] absolute top-2 right-2' src={done} alt="done" />
                <div className=' p-2 border-[2px] border-[#FC4266] w-[160px] sm:w-[220px] newTaskTitleBg rounded-[12px]'>
                    <p className='text-center saira text-[16px] sm:text-[24px] font-extrabold leading-[19px] sm:leading-[28px] bannerTextBtn3 px-1'>{languageData?.newTaskDouble}
                        <span className='saira text-[16px] sm:text-[24px] bannerTextBtn3 ml-1'></span>
                    </p>
                </div>
            </div>
            <p className='text-[18px] sm:text-[32px] font-semibold text-center mt-8'>{languageData?.doubleBtnTitle}</p>
            <Link to={PartnerURL} target="_blank">
                <button
                    className={`saira my-1 flex w-full items-center justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black ${design === "0" ? "rounded-[50px] border-[2px] bg-white py-1 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
                >
                    {languageData?.HeaderButton}🎉

                </button>
            </Link>
        </div>
    )
}

export default DoubleNewTask
