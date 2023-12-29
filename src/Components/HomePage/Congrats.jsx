import React from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import hero from '../../images/CyberSaysPage/congrats.png'

function Congrats() {
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            <p className='text-[24px] font-semibold text-center mt-4 max-w-[375px] w-full m-auto'>You got it right! Your $10 is now waiting for you in your $(emailAddress) inbox!</p>
            <img className='w-[375px] m-auto' src={hero} alt="hero" />
            <p className='text-[20px] font-medium text-center mt-4 max-w-[375px] w-full m-auto saira'>Be the king among your friends and invite them to earn and enjoy with CyberSays!</p>
            <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2 flex justify-center mt-6'>
                Share
                <svg className='ml-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.5L14 5.5V9.5C7 10.5 4 15.5 3 20.5C5.5 17 9 15.4 14 15.4V19.5L21 12.5Z" fill="#1E1E1E" />
                </svg>
            </button>
        </div>
    )
}

export default Congrats
