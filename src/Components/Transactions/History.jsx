import React from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import transaction from '../../images/CyberSaysPage/TransactionLogo.png'

function History() {
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            <p className='text-[18px] font-semibold text-center'>Transaction History</p>
            <div className='m-auto max-w-[345px] w-full mt-3 h-[470px] overflow-scroll'>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={transaction} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira w-[200px] leading-4'>Doubling you money and enjoying ImLive!</p>
                        <p className='text-[12px] font-normal saira'>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[90px]'>
                        <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right'>+10$</p>
                        <p className='text-[12px] font-normal saira text-right'>Doubling money</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={transaction} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira  leading-4'>Your friend doubled his money!</p>
                        <p className='text-[12px] font-normal saira '>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[100px]'>
                        <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right'>+1$</p>
                        <p className='text-[12px] font-normal saira  text-right'>Doubling money</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={transaction} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira w-[200px] leading-4'>Your won competition</p>
                        <p className='text-[12px] font-normal saira'>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[100px]'>
                        <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right'>+X$</p>
                        <p className='text-[12px] font-normal saira  text-right'>Competition</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <img className='w-[32px] h-[32px]' src={transaction} alt="transaction" />
                    <div className='w-[200px]'>
                        <p className='text-[12px] font-semibold saira w-[200px] leading-4'>Money withdraw</p>
                        <p className='text-[12px] font-normal saira'>25 December, 2023, 5.05 AM</p>
                    </div>
                    <div className='w-[100px]'>
                        <p className='text-[20px] text-[#FF6D6D] font-semibold saira text-right'>-10$</p>
                        <p className='text-[12px] font-normal saira  text-right'>Withdraw</p>
                    </div>
                </div>
            </div>
            <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2 mt-3'>Withdraw</button>
            
        </div>
    )
}

export default History
