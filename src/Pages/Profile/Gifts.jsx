import React from 'react'
import logoCyber from '../../images/CyberSaysLogo.png'
import giftFields from '../../images/giftFields.png'
import woman from '../../images/smilingWoman.png'
import ImLive from '../../images/ImLiveLogo.png'
import selectGift1 from '../../images/selectGift1.png'
import selectGift2 from '../../images/selectGift2.png'
import selectGift3 from '../../images/selectGift3.png'
import selectGift4 from '../../images/selectGift4.png'

function Gifts({setSelectPayment}) {
    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>

            <div className='max-w-[375px] mx-3  m-auto mt-[20px] md:mt-[50px]  rounded-[14px]  '>
                <div className='flex items-center gap-3'>
                    <img className=' w-[95px] mb-[-5px]' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[18px]'>double your <span className='text-gradient'>money</span> 🤑</p>
                </div>
                <div className='gradient-line w-full h-[2px] mt-2 mb-3'></div>
                <p className=' font-bold text-[16px] text-center mb-4 uppercase'>And your gift provider is...</p>
                <div className='relative'>
                    <div className=' absolute  flex w-full'>
                        <img className=' h-[30px] absolute left-[40px] top-[8px] cursor-pointer' src={selectGift1} alt="selectGift1" />
                        <img className=' h-[30px] absolute right-[50px] top-[8px] cursor-pointer' src={selectGift2} alt="selectGift2" />
                    </div>
                    <img className='  w-full select-none pointer-events-none ' src={giftFields} alt="giftFields" />
                    <div className=' absolute  flex w-full'>
                        <img className=' h-[30px] absolute left-[30px] bottom-[15px] cursor-pointer' src={selectGift3} alt="selectGift3" />
                        <img className=' h-[40px] absolute right-[40px] bottom-[14px] cursor-pointer' src={selectGift4} alt="selectGift4" />
                    </div>
                </div>
                <div className='relative'>
                    <img className=' w-[200px] mb-[-60px] m-auto' src={woman} alt="image" />
                    <div className='flex justify-between absolute w-full mt-[5px] h-[100px] overflow-hidden pt-3'>
                        <div className='w-[100px] h-[50px] !rounded-none gradient-gift absolute left-[-20px] rotate-[-15deg]'>
                        </div>
                        <div className='w-[100px] h-[50px] !rounded-none gradient-gift absolute right-[-20px] rotate-[15deg]'>
                        </div>
                    </div>
                    <div className='px-5 py-1 !rounded-[20px] gradient-gift  w-[255px] sm:w-auto border-[1px] border-[#FF1CBB] relative z-20 m-auto'>
                        <p className=' text-center text-[16px] font-normal saira '>Double your money with</p>
                        <img className=' h-[30px] m-auto' src={ImLive} alt="Image" />
                    </div>
                    
                </div>

                <div className='flex justify-between items-center mt-3'>
                    <div className='flex items-center justify-center gap-1 gradient-gift !border-none !rounded-[14px] p-[10px]  w-full'>
                        <div className='border-[1px] border-[#088CD9] bg-gray/25 !rounded-full gradient-number p-2 w-[32px] h-[32px] flex items-center justify-center'>
                            1
                        </div>
                        <p className=' ml-2  text-white text-[16px] font-bold saira text-center'>Deposit</p>
                    </div>
                    <div className='gradient-line w-[20px] h-[2px] mt-2 mb-3 mx-4'></div>
                    <div className='flex items-center justify-center gap-1 gradient-gift !border-none !rounded-[14px] p-[10px] w-full '>
                        <div className='border-[1px] border-[#088CD9] bg-gray/25 !rounded-full gradient-number p-2 w-[32px] h-[32px] flex items-center justify-center'>
                            2
                        </div>
                        <p className=' ml-2  text-white text-[16px] font-bold saira'>Refer</p>
                    </div>
                </div>
                <button onClick={e => setSelectPayment(true)} className='px-[30px] py-[14px] saira gradient text-[16px] w-full font-semibold mt-4'>Choose How to Get Paid</button>
            </div>
        </div>
    )
}

export default Gifts
