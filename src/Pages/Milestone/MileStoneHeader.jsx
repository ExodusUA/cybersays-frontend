import React from 'react'
import logoCyber from '../../images/logoCyberYellow.png'
import field from '../../images/fieldProfile.png'

function MileStoneHeader({ userData, setPayModalOpen, setMenuOpen }) {
    return (
        <div>
            <div className=' gradient-milestoneHeader py-3 '>
                <div className='flex items-center justify-center lg:justify-between max-w-[1170px] w-full m-auto px-3 '>
                    <div>
                        <div className='flex items-center gap-3 justify-center '>
                            <img className=' w-[140px] lg:w-[200px] mb-[-5px]' src={logoCyber} alt="Image" />
                            <p className=' font-semibold text-[20px] lg:text-[32px] saira'>Just lost it's mind 😱</p>
                        </div>
                        <div className='bg-white w-full h-[2px] mt-2 m-auto  max-w-[540px]'></div>
                    </div>
                    <div className=' relative my-3 lg:my-5 max-w-[340px] lg:max-w-[370px]  w-full hidden lg:block'>
                        <img className='w-full' src={field} alt="field" />
                        <div >
                            <div className=' lg:w-[unset] absolute top-[7px] lg:top-[9px] left-[70px] cursor-pointer flex'>
                                <div className='w-[90px] leading-4 ml-1'>
                                    <p className='text-[16px]  text-[#1E1E1E] font-normal saira text-center mb-0.5'>💵</p>
                                    <p className='text-[14px]  text-[#1E1E1E] font-normal saira text-center mb-0.5'>USD Earned:</p>
                                    <p className='text-[14px]   text-[#1E1E1E] font-normal saira text-center '>{userData?.earned}</p>
                                </div>
                                <div className='w-[90px] leading-4 ml-1'>
                                    <p className='text-[16px]  text-[#1E1E1E] font-normal saira text-center mb-0.5'>👬</p>
                                    <p className='text-[14px]   text-[#1E1E1E] font-normal saira text-center mb-0.5'>Refferals:</p>
                                    <p className='text-[14px]   text-[#1E1E1E] font-normal saira text-center '>{userData?.refferals ? JSON.parse(userData?.refferals).length : 0}</p>
                                </div>
                                <div className='w-[90px] leading-4 ml-1'>
                                    <p className='text-[16px]  text-[#1E1E1E] font-normal saira text-center mb-0.5'>🃏</p>
                                    <p className='text-[14px]   text-[#1E1E1E] font-normal saira text-center mb-0.5'>Raffle Tickets:</p>
                                    <p className='text-[14px]   text-[#1E1E1E] font-normal saira text-center '>{userData?.raffle_tickets}</p>
                                </div>
                            </div>
                        </div>
                        <p className='underline saira text-end text-[14px] font-semibold text-white mt-2 duration-300 cursor-pointer mr-4' onClick={e => setPayModalOpen(true)}>Choose your way to get paid immediately</p>
                        <button className='bg-white text-black px-2 py-1 rounded-lg' onClick={e => setMenuOpen(true)}>Menu</button>
                    </div>
                </div>
            </div>
            <div className=' relative my-3 lg:my-5 max-w-[340px] mt-6 w-full m-auto lg:hidden block'>
                <img className='w-full' src={field} alt="field" />
                <div >
                    <div className=' lg:w-[unset] absolute top-[7px] lg:top-[9px] left-[70px] cursor-pointer flex'>
                        <div className='w-[80px] leading-4 ml-1'>
                            <p className='text-[16px]  text-[#1E1E1E] font-normal saira text-center '>💵</p>
                            <p className='text-[12px]  text-[#1E1E1E] font-normal saira text-center '>USD Earned:</p>
                            <p className='text-[12px]   text-[#1E1E1E] font-normal saira text-center '>25</p>
                        </div>
                        <div className='w-[80px] leading-4 ml-1'>
                            <p className='text-[16px]  text-[#1E1E1E] font-normal saira text-center '>👬</p>
                            <p className='text-[12px]   text-[#1E1E1E] font-normal saira text-center '>Refferals:</p>
                            <p className='text-[12px]   text-[#1E1E1E] font-normal saira text-center '>25</p>
                        </div>
                        <div className='w-[80px] leading-4 ml-1'>
                            <p className='text-[16px]  text-[#1E1E1E] font-normal saira text-center '>🃏</p>
                            <p className='text-[12px]   text-[#1E1E1E] font-normal saira text-center '>Raffle Tickets:</p>
                            <p className='text-[12px]   text-[#1E1E1E] font-normal saira text-center '>25</p>
                        </div>
                    </div>
                </div>
                <p className='underline saira text-center text-[14px] font-semibold text-white mt-2 duration-300 cursor-pointer '>Choose your way to get paid immediately</p>

            </div>
        </div>
    )
}

export default MileStoneHeader
