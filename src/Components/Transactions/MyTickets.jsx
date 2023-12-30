import React from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import joker from '../../images/CyberSaysPage/MyTicketJoker.png'
import coin from '../../images/CyberSaysPage/MyTicketCoin.png'

function MyTickets() {
  return (
    <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            <p className='text-[18px] font-semibold text-center'>My Tickets & Points</p>
            <div className='m-auto max-w-[345px] w-full mt-3 h-[470px] overflow-scroll'>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={joker} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira w-[200px] leading-4 mb-1'>Your friend doubled their money!</p>
                        <p className='text-[12px] font-normal saira'>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[90px]'>
                        <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+30</p>
                        <p className='text-[12px] font-normal saira text-right'>Vegas tickets</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={joker} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira  leading-4 mb-1'>For X credit purchased on ImLive!</p>
                        <p className='text-[12px] font-normal saira '>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[100px]'>
                        <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+X</p>
                        <p className='text-[12px] font-normal saira  text-right'>Vegas tickets</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={coin} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira w-[200px] leading-4 mb-1'>Friend completed succfully double the money and to rceive points</p>
                        <p className='text-[12px] font-normal saira'>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[100px]'>
                        <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+X</p>
                        <p className='text-[12px] font-normal saira  text-right'>Points</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={joker} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira w-[200px] leading-4 mb-1'>Sent mail</p>
                        <p className='text-[12px] font-normal saira'>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[100px]'>
                        <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+X</p>
                        <p className='text-[12px] font-normal saira  text-right'>Vegas tickets</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={coin} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira w-[200px] leading-4 mb-1'>For X credit purchased on ImLive!</p>
                        <p className='text-[12px] font-normal saira'>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[100px]'>
                        <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+X</p>
                        <p className='text-[12px] font-normal saira  text-right'>Points</p>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default MyTickets
