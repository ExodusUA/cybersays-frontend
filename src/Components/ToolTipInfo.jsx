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
import money from '../images/NewDesign/header/dollar.png'
import refferals from '../images/NewDesign/header/points.png'
import joker from '../images/NewDesign/header/ticket.png'

function ToolTipInfo({ languageData, setToolInfo }) {
    const { design } = useDesign()

    return (
        <div className=' w-[97.5%] max-w-[600px] fixed left-[5px] sm:left-[37px] bottom-[30px] sm:bottom-[70px] z-[999999999999] '>
            <div onClick={e => setToolInfo(false)} className=' cursor-pointer bg-[#FFFFFF] mt-[20px] rounded-[12px] lg:rounded-[10x] p-2 lg:p-4 lg:pb-6 '>
                <div className='flex justify-end '>
                    <svg onClick={e => setToolInfo(false)} className='w-[24px] h-[24px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 20L4 4M20 4L4 20" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p className='text-[16px] md:text-[24px] font-semibold text-center text-black max-w-[280px] lg:max-w-[unset] m-auto'>{languageData.toolInfoTitle}</p>
                <div>
                    <div className='flex justify-around mt-2'>
                        <div className=' w-full p-1 rounded-l-[24px] flex items-center'>
                            <div className='w-[40px]'></div>
                            <p className='lg:w-[unset] text-[14px] text-[#1E1E1E] font-semibold leading-[16px] ml-1'>{languageData.toolInfoLeft1}</p>
                        </div>
                        <div className=' w-full p-1 flex items-center '>
                            <div className='flex justify-between w-full '>
                                <div className='w-[33%]'>
                                    <img className='w-[24px] m-auto' src={money} alt="money" />
                                    <p className='text-[12px] text-[#1E1E1E] font-semibold leading-[16px] text-center mt-1'>{languageData.toolInfoPoint1}</p>
                                </div>
                                <div className='w-[33%]'>
                                    <img className='w-[24px] m-auto' src={refferals} alt="refferals" />
                                    <p className='text-[12px] text-[#1E1E1E] font-semibold leading-[16px]  text-center mt-2'>{languageData.toolInfoPoint2}</p>
                                </div>
                                <div className='w-[33%]'>
                                    <img className='w-[24px] m-auto' src={joker} alt="joker" />
                                    <p className='text-[12px] text-[#1E1E1E] font-semibold leading-[16px] text-center mt-2'>{languageData.toolInfoPoint3}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='flex justify-around'>
                        <div className='toolInfoBg1 w-full p-1 rounded-l-[24px] flex items-center'>
                            <img className='w-[40px]' src={what1} alt="what1" />
                            <p className='w-[115px] lg:w-[unset] saira text-[14px] text-[#1E1E1E] font-semibold leading-[16px] ml-1'>{languageData.toolInfolef1}</p>
                        </div>
                        <div className='bg-[#FFF2DF] w-full p-1 flex items-center '>
                            <div className='flex justify-between w-full '>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>$100</p>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>10</p>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>1</p>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-around mt-2'>
                        <div className='toolInfoBg2 w-full p-1 rounded-l-[24px] flex items-center'>
                            <img className='w-[40px]' src={what2} alt="what1" />
                            <p className='w-[115px] lg:w-[unset] saira text-[14px] text-[#1E1E1E] font-semibold leading-[16px] ml-1'>{languageData.toolInfolef2}</p>
                        </div>
                        <div className='bg-[#EDF1FF] w-full p-1 flex items-center justify-center'>

                            <div className='flex justify-between w-full '>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>$100</p>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>10</p>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>1</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around mt-2'>
                        <div className='toolInfoBg3 w-full p-1 rounded-l-[24px] flex items-center'>
                            <img className='w-[40px]' src={what3} alt="what1" />
                            <p className='w-[115px] lg:w-[unset] saira text-[14px] text-[#1E1E1E] font-semibold leading-[16px] ml-1'>{languageData.toolInfolef3}</p>
                        </div>
                        <div className='bg-[#FFF2DF] w-full p-1 flex items-center justify-center'>
                            <div className='flex justify-between w-full '>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>$100</p>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>10</p>
                                <p className=' saira text-[16px] text-[#1E1E1E] font-semibold leading-[16px] ml-1 text-center w-[33%]'>1</p>
                            </div>
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

            <svg className='ml-2 mt-[-1px]' xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                <g filter="url(#filter0_b_63_7684)">
                    <path d="M11 14L0.607698 0.499998L21.3923 0.5L11 14Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_b_63_7684" x="-13.3926" y="-13.5" width="48.7852" height="41.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_63_7684" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_63_7684" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default ToolTipInfo
