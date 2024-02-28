import React, { useEffect, useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import social1 from '../../images/NewDesign/Pix.png'
import social2 from '../../images/NewDesign/Gift.png'
import { useDesign } from '../../Helpers/Design/DesignContext'
import Confirm from './Confirm'
import Error from './Error'
import Verification from './Verification'
import PIX from './PIX'


function Withdraw({ user, setOpen, languageData }) {
    const { design } = useDesign()

    const [selectedPayment, setSelectedPayment] = useState(null)
    const [email, setEmail] = useState(null)
    const [confirm, setConfirm] = useState(false)
    const [error, setError] = useState(false)
    const [step, setStep] = useState(0)
    const paymentMethods = [
        {
            id: 1,
            name: 'Pix',
            image: social1,
        },
        {
            id: 2,
            name: 'Gift',
            image: social2,
        }

    ]

    return (
        <div>
            <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4'>
                <div className={`flex ${step === 0 ? 'justify-end' : ' justify-between'}  max-w-[600px] m-auto md:my-4`}>
                    <svg onClick={step === 1 ? () => setStep(0) : null || step === 2 ? () => setStep(1) : null} className={`${step === 0 ? 'hidden' : 'block'} cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17 22L7 12L17 2" stroke="url(#paint0_linear_26_11821)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_26_11821" x1="17" y1="11.8039" x2="7" y2="11.8039" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#8FE5EC" />
                                <stop offset="1" stop-color="#DDBAFC" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <p className='text-[18px] md:text-[32px] font-semibold text-center'>{languageData?.withdrawTitle1}</p>
                <p className={`text-[12px] ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'} font-medium text-center saira`}>{languageData?.withdrawSubtitle}</p>
                <div className=' text-center flex justify-center  m-auto mt-3'>
                    <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === '0' ? 'rounded-[30px]' : ' rounded-[12px]'} px-8`}>
                        <p className={`text-[32px] w-f ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'} font-bold text-center saira leading-9 mt-1`}>${user?.earned.toFixed(2)}</p>
                        <p className='text-[12px] font-medium text-center saira leading-3 mb-2'>{languageData?.withdrawPrice}</p>
                    </div>
                </div>
                {
                    step === 0 && <div>
                        <p className='text-[18px] md:text-[32px] font-semibold text-center my-2'>{languageData?.withdrawTitle2}</p>
                        <div className={`max-h-[320px]  max-w-[375px] md:max-w-[600px] m-auto`}>
                            <div className='flex flex-wrap justify-between mt-2  m-auto'>
                                {paymentMethods.map((item, index) => (
                                    <div key={index} className='w-[50%] mb-2'>
                                        <img
                                            onClick={e => setSelectedPayment(index)}
                                            className={`${selectedPayment === index && (design === '0' ? 'outline outline-[2px] !outline-[#FFED63]' : 'outline outline-[2px] !outline-[#A2DBF0]')} border-none w-[160px] md:w-[295px] h-[140px] md:h-[unset] cursor-pointer rounded-[14px] object-cover`}
                                            src={item.image}
                                            alt="social"
                                        />
                                    </div>
                                ))}

                            </div>

                        </div>
                        <div className='flex justify-center mt-4'>
                            <button onClick={e => setStep(1)} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[350px] outline-none  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawBtn}</button>
                        </div>
                    </div>
                }
                {
                    step === 1 && <div>
                        <p className='text-[18px] md:text-[32px] font-semibold text-center my-2'>{languageData?.withdrawTitle2}</p>
                        <div className='flex justify-center mt-4'>
                            <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your e-mail' />
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button onClick={e => setStep(2)} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>Continue</button>
                        </div>
                    </div>
                }
                {
                    step === 2 && <Verification setStep={setStep} languageData={languageData} />
                }
                {
                    step === 3 && <PIX setStep={setStep} languageData={languageData} />
                }
                {/*
                <div className={`max-h-[320px] overflow-scroll border-b-[2px] ${design === '0' ? 'border-[#FFED63]' : 'gradient-withdrawBorder'} max-w-[375px] md:max-w-[600px] m-auto`}>
                    <div className='flex flex-wrap justify-between mt-2  m-auto'>
                        {paymentMethods.map((item, index) => (
                            <div key={index} className='w-[33%] mb-2'>
                                <img
                                    onClick={e => setSelectedPayment(index)}
                                    className={`${selectedPayment === index && (design === '0' ? 'border-[2px] !border-[#FFED63]' : 'border-[2px] !border-[#A2DBF0]')} w-[110px] md:w-[190px] h-[140px] md:h-[unset] cursor-pointer rounded-[40px]`}
                                    src={item.image}
                                    alt="social"
                                />
                            </div>
                        ))}

                    </div>

                </div>
                <div className='flex justify-center'>
                    <p className={`text-[12px] md:text-[14px] font-semibold underline text-center saira cursor-pointer sm:mx-[80px] my-2 md:my-4 ${design === '0' ? 'text-white' : 'gradient-link'}`}>{languageData?.withdrawLink}</p>
                </div>
                */}
                {/*
                
                
                */}
            </div>
            {
                confirm && <Confirm setOpen={setConfirm} languageData={languageData} />
            }
            {
                error && <Confirm setOpen={setError} languageData={languageData} />
            }

        </div>
    )
}

export default Withdraw
