import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import win from '../images/NewDesign/win.png'
import seven from '../images/NewDesign/777.png'
import point1 from '../images/NewDesign/newPoint1.png'
import point2 from '../images/NewDesign/newPoint2.png'
import point3 from '../images/NewDesign/newPoint3.png'


function CompetitionRules({ setOpen, languageData }) {

    const { design } = useDesign()


    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 lg:flex'>
            <div className='max-w-[600px] m-auto relative'>


                <div className='flex justify-end md:my-4 lg:mb-10 lg:absolute right-0 top-[-70px]'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div>
                    <p className=' m-auto text-[18px] lg:text-[24px] font-semibold text-center'>
                        {languageData.rulesTitle}
                    </p>
                    <p className='saira text-[12px]  font-medium text-center mt-1 bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg py-2 rounded-[12px] lg:rounded-[24px] px-6 lg:px-0'>{languageData.rulesSubTitle}</p>
                    <div className='mt-4'>
                        <p className='text-[16px] lg:text-[20px] font-semibold text-center gradient-linkDouble'>{languageData.rulesPoint1Title}</p>
                        <div className=' mt-1'>
                            <p className='saira text-[12px] lg:text-[14px] font-medium flex items-center'><div className='dot-li w-[6px] h-[6px] rounded-full mr-2'></div>{languageData.rulesPoint1li1}</p>
                            <p className='saira text-[12px] lg:text-[14px] font-medium flex items-center'><div className='dot-li w-[6px] h-[6px] rounded-full mr-2'></div>{languageData.rulesPoint1li2}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[16px] lg:text-[20px] font-semibold text-center gradient-linkDouble'>{languageData.rulesPoint2Title}</p>
                        <div className=' mt-1'>
                            <p className='saira text-[12px] lg:text-[14px] font-medium flex items-center'><div className='dot-li w-[6px] h-[6px] rounded-full mr-2'></div>{languageData.rulesPoint2li1}</p>
                            <p className='saira text-[12px] lg:text-[14px] font-medium flex items-center'><div className='dot-li w-[6px] h-[6px] rounded-full mr-2'></div>{languageData.rulesPoint2li2}</p>
                            <p className='saira text-[12px] lg:text-[14px] font-medium flex items-center'><div className='dot-li w-[6px] h-[6px] rounded-full mr-2'></div>{languageData.rulesPoint2li3}</p>
                            <p className='saira text-[12px] lg:text-[14px] font-medium flex items-center'><div className='dot-li w-[6px] h-[6px] rounded-full mr-2'></div>{languageData.rulesPoint2li4}</p>
                        </div>
                    </div>
                    <p className='text-[18px] text-center font-semibold gradient-timeCounter mt-2'>{languageData.rulesEnd}</p>
                </div>
            </div>
        </div>
    )
}

export default CompetitionRules
