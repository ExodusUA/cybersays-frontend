import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import point1 from '../images/NewDesign/newPoint1.png'
import point2 from '../images/NewDesign/newPoint2.png'
import point3 from '../images/NewDesign/newPoint3.png'
import point4 from '../images/NewDesign/newPoint4.png'
import point5 from '../images/NewDesign/newPoint5.png'
import point6 from '../images/NewDesign/newPoint6.png'


function InfoOfferModal({ setOpen, languageData }) {
    const { design } = useDesign()
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 lg:flex'>
            <div className='max-w-[600px] m-auto relative'>


                <div className='flex justify-end md:my-4 lg:mb-10 lg:absolute right-0 top-[-70px]'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div>
                    <p className=' m-auto text-[18px] lg:text-[24px] font-semibold text-center mx-6 lg:mx-0'>
                       {languageData?.infoOfferTitle}
                    </p>
                    <div className='flex items-center mt-5'>
                        <img className='w-[32px] mr-2' src={point1} alt="point1" />
                        <p className='text-[16px] font-semibold saira leading-5'>{languageData?.infoOfferPoint1}</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img className='w-[32px] mr-2' src={point2} alt="point2" />
                        <p className='text-[16px] font-semibold saira leading-5'>{languageData?.infoOfferPoint2}</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img className='w-[32px] mr-2' src={point3} alt="point3" />
                        <p className='text-[16px] font-semibold saira leading-5'>{languageData?.infoOfferPoint3}</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img className='w-[32px] mr-2' src={point4} alt="point4" />
                        <p className='text-[16px] font-semibold saira leading-5'>{languageData?.infoOfferPoint4}</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img className='w-[32px] mr-2' src={point5} alt="point5" />
                        <p className='text-[16px] font-semibold saira leading-5'>{languageData?.infoOfferPoint5}</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img className='w-[32px] mr-2' src={point6} alt="point6" />
                        <p className='text-[16px] font-semibold saira leading-5'>{languageData?.infoOfferPoint6}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoOfferModal


