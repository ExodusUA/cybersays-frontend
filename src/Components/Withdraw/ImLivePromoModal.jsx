import React, { useState } from 'react'
import close from '../../images/NewDesign/closeBtn.png'
import imLiveLogo from '../../images/NewDesign/imLiveLogo.png'
import { useDesign } from '../../Helpers/Design/DesignContext'
import promoGirl from '../../images/NewDesign/promoGirl.png'
import promoGirlMessage from '../../images/NewDesign/promoGirl-message.png'
import banner from '../../images/NewDesign/withdraw/banner.png'
import ImLiveBanner from './ImLiveBanner'



function ImLivePromoModal({ setOpen, languageData, setImLiveSelected }) {
    const { design } = useDesign()


    return (
        <div onClick={e => setOpen(false)} className='w-screen h-screen fixed top-0 z-[99999] bg-new-bg-promo lg:bg-new-bg-promo-des bg-no-repeat bg-cover p-4 flex items-center '>
            <div className='flex justify-end max-w-[600px] px-4 w-full my-1 md:my-4 absolute top-2 left-1/2 transform -translate-x-1/2'>
                <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
            </div>
            <div onClick={(e) => e.stopPropagation()} className={`max-w-[600px] w-full m-auto relative   p-2 rounded-[12px] lg:px-4 `}>

                <ImLiveBanner languageData={languageData} setImLiveSelected={setImLiveSelected} selectPayment={() => { }} />
                {
                    /*
                    <div className='max-w-[350px] w-full m-auto'>
                    <div className='flex justify-around '>
                        <p className='gradient-linkDouble text-[24px] font-semibold'>{languageData?.promoModalTitle}</p>
                        <img className='w-[70px]' src={imLiveLogo} alt="imLiveLogo" />
                    </div>
                    <div className='flex items-center justify-around mt-2'>
                        <img className='w-[120px]' src={promoGirl} alt="promoGirl" />
                        <div className=' relative'>
                            <img className='w-[220px] h-[120px] ml-[-20px]' src={promoGirlMessage} alt="promoGirlMessage" />
                            <p className=' absolute top-[45px] left-[-15px] saira text-[12px] font-medium w-[180px] leading-4 text-center'>{languageData?.promoModalMessage}</p>
                        </div>
                    </div>
                </div>
                    */
                }
                <div className='flex justify-center '>
                    <button onClick={e => {
                        setImLiveSelected(true)
                        setOpen(false)
                    }} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-1.5 outline-none max-w-[390px] ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawBtn}</button>
                </div>
                <div className='flex justify-center'>
                    <p onClick={e => setOpen(false)} className='gradient-link2 saira text-[14px] font-semibold cursor-pointer mt-1'>{languageData?.promoModalLink}</p>
                </div>
            </div>
        </div>
    )
}

export default ImLivePromoModal


