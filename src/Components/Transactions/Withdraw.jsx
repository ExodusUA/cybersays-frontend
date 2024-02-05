import React, { useEffect, useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import social1 from '../../images/CyberSaysPage/socialApple.png'
import social2 from '../../images/CyberSaysPage/socialNetflix.png'
import social3 from '../../images/CyberSaysPage/socialSpotify.png'
import { useDesign } from '../../Helpers/Design/DesignContext'


function Withdraw({ user, setOpen, languageData }) {
    const { design } = useDesign()

    const [selectedPayment, setSelectedPayment] = useState(null)

    const paymentMethods = [
        {
            id: 1,
            name: 'apple',
            image: social1,
        },
        {
            id: 2,
            name: 'netflix',
            image: social2,
        },
        {
            id: 3,
            name: 'spotify',
            image: social3,
        }

    ]

    return (
        <div>
            <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4'>
                <div className='flex justify-end max-w-[600px] m-auto md:my-4'>
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
                <p className='text-[18px] md:text-[32px] font-semibold text-center my-2'>{languageData?.withdrawTitle2}</p>
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
                <div className='flex justify-center'>
                    <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[370px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawBtn}</button>
                </div>
            </div>

        </div>
    )
}

export default Withdraw
