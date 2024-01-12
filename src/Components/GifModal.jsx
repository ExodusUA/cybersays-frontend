import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import gif from '../images/CyberSaysPage/gifModal.png'
import link1 from '../images/CyberSaysPage/gifLink1.png'
import link2 from '../images/CyberSaysPage/gifLink2.png'
import link3 from '../images/CyberSaysPage/gifLink3.png'
import link4 from '../images/CyberSaysPage/gifLink4.png'
import link5 from '../images/CyberSaysPage/gifLink5.png'

function GifModal({ setGifModal }) {

    const [search, setSearch] = useState('');
    const dataGif = [
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
        {
            image: gif,
        },
    ]
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-90 backdrop-blur-2xl '>
            <div className='max-w-[600px] m-auto p-4'>
                <div className='flex justify-end md:my-4'>

                    <img onClick={e => setGifModal(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>
                <p className=' text-[18px] md:text-[32px] font-semibold text-center my-3'>Choose GIF</p>
                <div className=' relative  w-full'>
                    <input type="text" placeholder='Search' className='  border-[2px] border-[#FFED63] saira w-full text-[14px] rounded-[50px] py-[10px] px-5 pr-12 outline-none text-black' value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => {

                    }} />

                    <svg onClick={e => setGifModal(true)} className='absolute top-[10px] right-4 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='h-[420px] md:h-[500px] overflow-y-scroll mt-3 ' >
                    <div className='flex flex-wrap justify-between  pb-2 m-auto'>
                        {dataGif.map((item, index) => (
                            <div key={index} className='flex-wrap  w-[33%] mt-2 cursor-pointer'>
                                <img className='w-[96%] h-auto' src={item.image} alt="gif" />
                            </div>
                        ))}
                    </div>

                </div>
                <div className='border-b-[2px] border-[#FFED63]'></div>
                <div className='flex justify-between mt-4'>
                    <img className='w-[24px] h-[24px] cursor-pointer' src={link1} alt="link" />
                    <img className='w-[24px] h-[24px] cursor-pointer' src={link2} alt="link" />
                    <img className='w-[24px] h-[24px] cursor-pointer' src={link3} alt="link" />
                    <img className='w-[24px] h-[24px] cursor-pointer' src={link4} alt="link" />
                    <img className='w-[24px] h-[24px] cursor-pointer' src={link5} alt="link" />
                </div>
            </div>
        </div>
    )
}

export default GifModal
