import React from 'react'
import social1 from '../images/socialApple.svg'
import social2 from '../images/socialNeflix.svg'
import social3 from '../images/socialSpotify.svg'

function PaymentChoose() {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#2D3241] z-50'>
            <div className=' max-w-[380px] w-full m-auto '>
                <div className='flex justify-around px-[15px] mt-2'>
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social1} alt="social1" />
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social2} alt="social2" />
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social3} alt="social3" />
                </div>
                <div className='flex justify-around px-[15px] mt-2'>
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social1} alt="social1" />
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social2} alt="social2" />
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social3} alt="social3" />
                </div>
                <div className='flex justify-around px-[15px] mt-2'>
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social1} alt="social1" />
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social2} alt="social2" />
                    <img className='w-[100px] h-[200px] mx-[5px] cursor-pointer' src={social3} alt="social3" />
                </div>
            </div>
        </div>
    )
}

export default PaymentChoose
