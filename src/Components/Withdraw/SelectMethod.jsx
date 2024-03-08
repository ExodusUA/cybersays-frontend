import React from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import promoGirl from '../../images/NewDesign/promoGirl.png'
import imLiveLogo from '../../images/NewDesign/imLiveLogo.png'
import withdrawLogo1 from '../../images/NewDesign/withdraw/withdrawLogo1.png'
import withdrawLogo2 from '../../images/NewDesign/withdraw/withdrawLogo2.png'
import withdrawLogo3 from '../../images/NewDesign/withdraw/withdrawLogo3.png'
import withdrawLogo4 from '../../images/NewDesign/withdraw/withdrawLogo4.png'
import withdrawLogo5 from '../../images/NewDesign/withdraw/withdrawLogo5.png'
import withdrawLogo6 from '../../images/NewDesign/withdraw/withdrawLogo6.png'
import withdrawLogo7 from '../../images/NewDesign/withdraw/withdrawLogo7.png'
import flag_pt from '../../images/flags/flag-pt.png'

function SelectMethod({ languageData, selectPayment, selectedPayment, userCountry }) {
    const { design } = useDesign()
    return (
        <div>
            <p className='text-[18px] md:text-[32px] font-semibold text-center my-2'>{languageData?.withdrawTitle2}</p>
            <div className={`   md:max-w-[600px] m-auto`}>
                <div className='  justify-center mt-2  m-auto relative'>

                    <div className='flex flex-wrap gap-2'>
                        {/* BRAZIL */}
                        {
                            userCountry === 'BR' && <div onClick={e => selectPayment('pix')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg4 m-auto flex justify-center items-center relative mr-2 ${selectedPayment === 'pix' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[40px]' src={withdrawLogo4} alt="withdrawLogo4" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Pix</p>
                            </div>
                        }
                        {
                            userCountry === 'BR' || userCountry === 'UA' && <div onClick={e => selectPayment('paxum')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg2 m-auto flex justify-center items-center relative mr-2 ${selectedPayment === 'paxum' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[115px]' src={withdrawLogo2} alt="withdrawLogo1" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Paxum</p>
                            </div>
                        }
                        {/* MEXICO */}
                        {
                            userCountry === 'MX' && <div onClick={e => selectPayment('spei')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg5 m-auto flex justify-center items-center relative ${selectedPayment === 'spei' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[100px]' src={withdrawLogo5} alt="withdrawLogo5" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>SPEI</p>
                            </div>
                        }
                        {/* COLUMBIA */}
                        {
                            userCountry === 'CO' && <div onClick={e => selectPayment('pse')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg6 m-auto flex justify-center items-center relative ${selectedPayment === 'pse' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[100px]' src={withdrawLogo6} alt="withdrawLogo6" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>PSE</p>
                            </div>
                        }
                        {/* CHILE */}
                        {
                            userCountry === 'CL' && <div onClick={e => selectPayment('servipag')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg7 m-auto flex justify-center items-center relative ${selectedPayment === 'servipag' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[150px]' src={withdrawLogo7} alt="withdrawLogo7" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>ServiPag</p>
                            </div>
                        }

                        <div onClick={e => selectPayment('xoxoday')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg1 m-auto flex justify-center items-center relative ${selectedPayment === 'xoxoday' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                            <img className='w-[50px]' src={withdrawLogo1} alt="withdrawLogo1" />
                            <p className=' absolute bottom-1 text-center saira font-normal text-[14px] flex items-center'>{languageData?.withdrawGiftTitle} <img className='w-[24px] h-[18px] ml-1 rounded-[3px]' src={flag_pt} alt="flag_pt" /></p>
                        </div>
                    </div>
                    <div className='flex mt-2'>

                        {
                            /*
                            <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                            <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                            <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                        </div>
                            */
                        }
                        <div onClick={e => selectPayment('imlive')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] bg-new-bg-promo bg-no-repeat bg-cover m-auto flex justify-center items-center relative ${selectedPayment === 'imlive' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                            <div>
                                <div className='flex items-center justify-center lg:mt-4'>
                                    <img className='w-[38px]' src={promoGirl} alt="promoGirl" />
                                    <img className='w-[111px]' src={imLiveLogo} alt="imLiveLogo" />
                                </div>
                                <p className=' text-center saira font-normal text-[14px] leading-[15px] mt-2 lg:mb-1'>ImLive</p>
                                <p className=' text-center saira font-normal text-[10px] px-1 lg:px-0 lg:text-[12px] gradient-linkDouble leading-[15px]'>{languageData?.promoImLiveDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectMethod
