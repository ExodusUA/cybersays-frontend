import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import imLiveLogo from '../images/NewDesign/imLiveLogo.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import promoGirl from '../images/NewDesign/promoGirl.png'
import promoGirlMessage from '../images/NewDesign/promoGirl-message.png'



function PromoModal({ languageData, setPromoModal, setImLiveSelected }) {
    const { design } = useDesign()


    return (
        <div onClick={e => setPromoModal(false)} className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex items-center '>
            <div onClick={(e) => e.stopPropagation()} className={`max-w-[600px] w-full m-auto relative bg-new-bg-promo bg-no-repeat bg-cover border-[1px] p-2 rounded-[12px] lg:px-4 ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'}`}>


                <div className='flex justify-end my-1 md:my-4 '>
                    <img onClick={e => setPromoModal(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div className='max-w-[350px] w-full m-auto'>
                    <div className='flex justify-around '>
                        <p className='gradient-linkDouble text-[24px] font-semibold'>{languageData?.promoModalTitle}</p>
                        <img className='w-[70px]' src={imLiveLogo} alt="imLiveLogo" />
                    </div>
                    <div className='flex items-center justify-around mt-2'>
                        <img className='w-[120px]' src={promoGirl} alt="promoGirl" />
                        <div className=' relative'>
                            <img className='w-[200px] h-[100px] ml-[-20px]' src={promoGirlMessage} alt="promoGirlMessage" />
                            <p className=' absolute top-[38px] left-[-10px] saira text-[12px] font-medium w-[180px] leading-4'>{languageData?.promoModalMessage}</p>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center '>
                    <button onClick={e => setImLiveSelected(true)} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-1.5 outline-none  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawBtn}</button>
                </div>
                <div className='flex justify-center'>
                    <p onClick={e => setPromoModal(false)} className='gradient-link2 saira text-[14px] font-semibold cursor-pointer mt-1'>{languageData?.promoModalLink}</p>
                </div>
            </div>
        </div>
    )
}

export default PromoModal


