import React, { useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import imLiveLogo from '../../images/NewDesign/imLiveLogo.png'
import { useDesign } from '../../Helpers/Design/DesignContext'
import promoGirl from '../../images/NewDesign/promoGirl.png'
import promoGirlMessage from '../../images/NewDesign/promoGirl-message.png'



function PromoImLive({ languageData }) {
    const { design } = useDesign()


    return (

        <div className={`max-w-[350px] md:max-w-[600px] w-full m-auto relative bg-new-bg-promo bg-no-repeat bg-cover border-[2px] px-2 rounded-[12px] lg:px-4 mt-2 ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'}`}>
            <div className='max-w-[350px] w-full m-auto'>
                <div className='flex items-center justify-center mt-2'>
                    <img className='w-[120px]' src={promoGirl} alt="promoGirl" />
                    <div className=' relative'>
                       <img className='w-[140px]' src={imLiveLogo} alt="imLiveLogo" />
                        <p className='  top-[38px] left-[-10px] saira text-[14px] font-normal w-[200px] mt-3 gradient-linkDouble'>{languageData?.promoImLiveDesc}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PromoImLive


