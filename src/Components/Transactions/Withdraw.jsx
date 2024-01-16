import React, { useEffect, useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import social1 from '../../images/CyberSaysPage/socialApple.png'
import social2 from '../../images/CyberSaysPage/socialNetflix.png'
import social3 from '../../images/CyberSaysPage/socialSpotify.png'


function Withdraw({ user, setOpen, languageData }) {

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
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>
                <p className='text-[18px] md:text-[32px] font-semibold text-center'>{languageData?.withdrawTitle1}</p>
                <p className='text-[12px] text-[#FFED63] font-medium text-center saira'>{languageData?.withdrawSubtitle}</p>
                <div className=' text-center flex justify-center  m-auto mt-3'>
                    <div className='bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg rounded-[30px] px-8'>
                        <p className='text-[32px] w-f text-[#FFED63] font-bold text-center saira leading-9 mt-1'>${user?.earned.toFixed(2)}</p>
                        <p className='text-[12px] font-medium text-center saira leading-3 mb-2'>{languageData?.withdrawPrice}</p>
                    </div>
                </div>
                <p className='text-[18px] md:text-[32px] font-semibold text-center my-2'>{languageData?.withdrawTitle2}</p>
                <div className='max-h-[320px] overflow-scroll border-b-[2px] border-[#FFED63] max-w-[375px] md:max-w-[600px] m-auto'>
                    <div className='flex flex-wrap justify-between mt-2  m-auto'>
                        {paymentMethods.map((item, index) => (
                            <div key={index} className='w-[33%] mb-2'>
                                <img
                                    onClick={e => setSelectedPayment(index)}
                                    className={`${selectedPayment === index && 'border-[2px] !border-[#FFED63]'} w-[110px] md:w-[190px] h-[140px] md:h-[unset] cursor-pointer rounded-[40px]`}
                                    src={item.image}
                                    alt="social"
                                />
                            </div>
                        ))}

                    </div>

                </div>
                <p className='text-[12px] md:text-[14px] font-semibold underline text-center saira cursor-pointer sm:mx-[80px] my-2 md:my-4'>{languageData?.withdrawLink}</p>
                <div className='flex justify-center'>
                    <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2 max-w-[370px]'>{languageData?.withdrawBtn}</button>
                </div>
            </div>
           
        </div>
    )
}

export default Withdraw
