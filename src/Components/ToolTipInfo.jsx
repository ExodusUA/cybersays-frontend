import React from 'react'
import { useDesign } from '../Helpers/Design/DesignContext'
import close from '../images/CyberSaysPage/closeMenu.png'
import point1 from '../images/NewDesign/toolnfo/point1.png'
import point2 from '../images/NewDesign/toolnfo/point2.png'
import point3 from '../images/NewDesign/toolnfo/point3.png'
import point1Image from '../images/NewDesign/toolnfo/point1Image.png'
import point2Image from '../images/NewDesign/toolnfo/point2Image.png'
import point3Image from '../images/NewDesign/toolnfo/point3Image.png'
import what1 from '../images/NewDesign/toolnfo/what1.png'
import what2 from '../images/NewDesign/toolnfo/what2.png'
import what3 from '../images/NewDesign/toolnfo/what3.png'

function ToolTipInfo({ languageData, setToolInfo }) {
    const { design } = useDesign()

    return (
        <div className=' w-[97.5%] max-w-[600px] fixed left-[5px] sm:left-[37px] bottom-[30px] sm:bottom-[70px] z-[999999999999] '>
            <div onClick={e => setToolInfo(false)} className=' cursor-pointer bg-[#0A1225] bg-opacity-90 backdrop-blur-sm mt-[20px] rounded-[12px] lg:rounded-[10x] p-2 lg:p-4 lg:pb-6 '>
                <div className='flex justify-end '>
                    <img onClick={e => setToolInfo(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <p className='text-[16px] md:text-[24px] font-semibold text-center text-black gradient-linkDouble max-w-[280px] m-auto'>{languageData.toolInfoTitle}</p>
                <div>
                    <div className='flex justify-around mt-2'>
                        <p className='text-[14px] text-center font-semibold'>{languageData.toolInfoWhat}</p>
                        <p className='text-[14px] text-center font-semibold'>{languageData.toolInfoHow}</p>
                    </div>
                    <div className='flex justify-around mt-2'>
                        <div className='toolInfoBg1 w-full p-1 rounded-l-[24px] flex items-center'>
                            <img className='w-[40px]' src={what1} alt="what1" />
                            <p className='w-[115px] lg:w-[unset] saira text-[14px] text-[#1E1E1E] font-semibold leading-[16px] ml-1'>{languageData.toolInfolef1}</p>
                        </div>
                        <div className='bg-[#FFF2DF] w-full p-1 flex items-center justify-center'>
                            
                            <p className=' saira text-[12px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center'>{languageData.toolInfoRight1}</p>
                        </div>
                    </div>
                    <div className='flex justify-around mt-2'>
                        <div className='toolInfoBg2 w-full p-1 rounded-l-[24px] flex items-center'>
                            <img className='w-[40px]' src={what2} alt="what1" />
                            <p className='w-[115px] lg:w-[unset] saira text-[14px] text-[#1E1E1E] font-semibold leading-[16px] ml-1'>{languageData.toolInfolef2}</p>
                        </div>
                        <div className='bg-[#EDF1FF] w-full p-1 flex items-center justify-center'>
                            
                            <p className=' saira text-[11px] text-[#1E1E1E] font-semibold leading-[14px] ml-1 text-center'>{languageData.toolInfoRight2}</p>
                        </div>
                    </div>
                    <div className='flex justify-around mt-2'>
                        <div className='toolInfoBg3 w-full p-1 rounded-l-[24px] flex items-center'>
                            <img className='w-[40px]' src={what3} alt="what1" />
                            <p className='w-[115px] lg:w-[unset] saira text-[14px] text-[#1E1E1E] font-semibold leading-[16px] ml-1'>{languageData.toolInfolef3}</p>
                        </div>
                        <div className='bg-[#FFF2DF] w-full p-1 flex items-center justify-center'>
                            
                            <p className=' saira text-[11px] text-[#1E1E1E] font-semibold leading-[14px] ml-1 text-center'>{languageData.toolInfoRight3}</p>
                        </div>
                    </div>
                </div>
                {/*
                <div>
                    <div className='flex items-start justify-between'>
                        <img className='w-[24px] mt-3 mr-2' src={point1} alt="point1" />
                        <div className='flex justify-between items-center'>
                            <p className='saira text-[14px] font-medium'>{languageData.toolInfoDesk1}</p>
                            <img className='w-[80px]' src={point1Image} alt="point1Image" />
                        </div>
                    </div>
                    <div className='flex items-start justify-between mt-2'>
                        <img className='w-[24px] mt-3 mr-2' src={point2} alt="point1" />
                        <div className='flex justify-between items-center'>
                            <p className='saira text-[14px] font-medium'>{languageData.toolInfoDesk2}</p>
                            <img className='w-[80px]' src={point2Image} alt="point1Image" />
                        </div>
                    </div>
                    <div className='flex items-start justify-between mt-2'>
                        <img className='w-[24px] mt-3 mr-2' src={point3} alt="point1" />
                        <div className='flex justify-between items-center'>
                            <p className='saira text-[14px] font-medium'>{languageData.toolInfoDesk3}</p>
                            <img className='w-[80px]' src={point3Image} alt="point1Image" />
                        </div>
                    </div>
                </div>
                */}
            </div>
            <svg className='ml-2 mt-[-1px]' width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1849_11928)">
                    <path d="M11 14L0.607698 0.499998L21.3923 0.5L11 14Z" fill="#0A1225" fill-opacity="0.7" />
                </g>
                <defs>
                    <filter id="filter0_b_1849_11928" x="-13.3923" y="-13.5" width="48.7847" height="41.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1849_11928" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1849_11928" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default ToolTipInfo
