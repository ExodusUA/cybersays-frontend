import React, { useState } from 'react'
import logoCyber from '../../images/CyberSaysLogo.png'
import fingerUp from '../../images/fingerUp.png'
import gif1 from '../../images/exampleGif1.png'
import MenuGift from '../../Components/MenuGift'

function MyProfile() {

    const [selectGif, setSelectGif] = useState(null)

    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>

            <div className='max-w-[375px] mx-3  m-auto mt-[20px] md:mt-[50px]  rounded-[14px]  '>
                <div className='flex items-center gap-3'>
                    <img className=' w-[95px] mb-[-5px]' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[18px]'>double your <span className='text-gradient'>money</span> 🤑</p>
                </div>
                <div className='gradient-line w-full h-[2px] mt-2 mb-2'></div>
                <div className=' flex justify-center'>
                    <div className='gradient-circle w-[120px] h-[120px] flex justify-center items-center'>
                        <div >
                            <p className='text-[14px] saira text-center font-normal mb-1'>00:09<span className=' saira text-[#9D3EFD]'>:59</span></p>
                            <p className='text-[12px] saira text-center font-normal'>24 hours to refer your friends</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-1'>
                    <img className='w-[32px] h-[32px] mr-3' src={fingerUp} alt="fingerUp" />
                    <p className='text-[14px] saira font-normal'>1$ per each friend that completes the 4 steps. You’ll get paid in $ 'clock'</p>
                </div>
                <div className='w-full bg-[#2C2F45] rounded-[20px] flex justify-between items-center px-6 mt-2'>
                    <div>
                        <p className='text-[#888888] text-[12px] font-normal saira'>Friends you referred 🏆</p>
                        <p className='text-white text-[14px] font-normal saira'>23 friedns</p>
                    </div>
                    <div className='gradient-line h-[40px] w-[2px] mt-2 mb-3'></div>
                    <div>
                        <p className='text-[#888888] text-[12px] font-normal saira'>Money you’ve made 💸</p>
                        <p className='text-white text-[14px] font-normal saira'>$23</p>
                    </div>
                </div>
                <p className='text-[14px] saira font-normal text-center mx-5 mt-3'>Choose a gif to share with your friends or simply share your link:</p>
                <div className=' flex  !overflow-x-auto max-w-[375px] w-full scrollOff mt-2 '>
                    <img onClick={e => setSelectGif(1)} className={`${selectGif === 1 && '  gradient '}   rounded-[12px] w-[120px]  p-[2px] mx-1`} src={gif1} alt="gif1" />
                    <img onClick={e => setSelectGif(2)} className={`${selectGif === 2 && '  gradient '}   rounded-[12px] w-[120px]  p-[2px] mx-1`} src={gif1} alt="gif1" />
                    <img onClick={e => setSelectGif(3)} className={`${selectGif === 3 && '  gradient '}   rounded-[12px] w-[120px]  p-[2px] mx-1`} src={gif1} alt="gif1" />
                    <img onClick={e => setSelectGif(4)} className={`${selectGif === 4 && '  gradient '}   rounded-[12px] w-[120px]  p-[2px] mx-1`} src={gif1} alt="gif1" />
                    <img onClick={e => setSelectGif(5)} className={`${selectGif === 5 && '  gradient '}   rounded-[12px] w-[120px]  p-[2px] mx-1`} src={gif1} alt="gif1" />
                </div>
                <p className='text-[12px] saira font-normal text-center mt-[-10px]'>Don’t promote anywhere that can spam people</p>
                <div className='flex justify-between items-center mt-1'>
                    <div className='w-full'>
                        <button className='px-[30px] py-[14px] saira gradient text-[16px] w-full font-semibold '>Share Referral Link!</button>
                        <p className='underline saira text-center text-[16px] text-white mt-2 duration-300 cursor-pointer '>Copy Referral Link</p>
                    </div>
                </div>
            </div>
            <MenuGift />
        </div>
    )
}

export default MyProfile
