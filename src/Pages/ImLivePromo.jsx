import React, { useState } from 'react'
import close from '../images/NewDesign/closeBtn.png'
import imLiveLogo from '../images/NewDesign/imLiveLogo.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import promoGirl from '../images/NewDesign/promoGirl.png'
import promoGirlMessage from '../images/NewDesign/promoGirl-message.png'
import promoGirlMessage2 from '../images/NewDesign/promoGirl-message2.png'



function ImLivePromo({ languageData }) {
    const { design } = useDesign()


    return (
        <div  className='w-screen h-screen fixed top-0 z-[99999] bg-new-bg-promo lg:bg-new-bg-promo-des bg-no-repeat bg-cover bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex items-center '>
            <div  className={`max-w-[600px] w-full m-auto relative   rounded-[12px] lg:px-4`}>


                
                <div className='max-w-[370px] lg:max-w-[600px] w-full m-auto'>
                    <div className='flex justify-around lg:justify-center'>
                        <p className='gradient-linkDouble text-[24px] lg:text-[32px] font-semibold'>{languageData?.promoModalTitle}</p>
                        <img className='w-[70px] lg:w-[95px] lg:ml-[10px]' src={imLiveLogo} alt="imLiveLogo" />
                    </div>
                    <div className='flex items-center justify-around mt-2 lg:mt-[40px] relative'>
                        <img className='w-[140px] lg:w-[235px]' src={promoGirl} alt="promoGirl" />
                        
                            <img className='w-[220px] lg:w-[370px] h-[140px] lg:h-[246px] ml-[-20px]' src={promoGirlMessage2} alt="promoGirlMessage" />
                            <p className=' absolute top-[60px] lg:top-[110px] right-[25px] lg:right-[28px] saira text-[14px] lg:text-[22px] font-medium w-[170px] lg:w-[285px] leading-4 lg:leading-6'>{languageData?.imLivePromoDesc}</p>
                        
                    </div>


                </div>
                <div className='flex justify-center '>
                    <button  className={`w-full max-w-[370px] lg:max-w-[600px] bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-1.5 outline-none  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.imLivePromoVtn}</button>
                </div>
                <div className='flex justify-center'>
                    <p  className='gradient-link2 saira text-[14px] font-semibold cursor-pointer mt-1'>{languageData?.promoModalLink}</p>
                </div>
            </div>
        </div>
    )
}

export default ImLivePromo


