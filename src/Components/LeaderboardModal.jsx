import React from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import oneSt from '../images/CyberSaysPage/1st.png'
import twoSt from '../images/CyberSaysPage/2st.png'
import threeSt from '../images/CyberSaysPage/3st.png'
import crown from '../images/CyberSaysPage/crown1st.png'

function LeaderboardModal() {
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img className='w-[24px] h-[24px]' src={close} alt="close" />
            </div>
            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-lg rounded-[30px] text-center flex py-2 px-4 mx-3 justify-between items-center mt-3'>
                <p className='saira text-[16px] font-bold text-[#FFED63]'>#825</p>
                <div className='leading-3'>
                    <p className='saira text-[12px] font-bold text-[#FFED63]'>22</p>
                    <p className='saira text-[12px] font-medium'>Points</p>
                </div>
            </div>
            <p className=' text-[18px] font-semibold text-center mt-3'>Leaderboards</p>
            <div className=' flex items-end justify-center'>
                <div className='mr-[-15px]'>
                    <p className='text-center saira text-[16px] font-bold'>2</p>
                    <img className='border-[2px] border-[#FFED63] rounded-full w-[80px] h-[80px]' src={twoSt} alt="twoSt" />
                    <p className='saira text-[12px] font-medium text-center'>@(User_name)</p>
                    <p className='saira text-[14px] font-medium text-[#FFED63] text-center'>69$</p>
                </div>
                <div className='mb-[20px] relative z-20'>
                    <p className='text-center saira text-[16px] font-bold'>1</p>
                    <img className='w-[32px] h-[32px] m-auto mb-2' src={crown} alt="crown" />
                    <img className='border-[2px] border-[#FFED63] rounded-full w-[120px] h-[120px]' src={oneSt} alt="twoSt" />
                    <p className='saira text-[12px] font-medium text-center'>@(User_name)</p>
                    <p className='saira text-[14px] font-medium text-[#FFED63] text-center'>69$</p>
                </div>
                <div className='ml-[-15px] relative z-10'>
                    <p className='text-center saira text-[16px] font-bold'>3</p>
                    <img className='border-[2px] border-[#FFED63] rounded-full w-[80px] h-[80px]' src={threeSt} alt="twoSt" />
                    <p className='saira text-[12px] font-medium text-center'>@(User_name)</p>
                    <p className='saira text-[14px] font-medium text-[#FFED63] text-center'>69$</p>
                </div>
            </div>
            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-lg rounded-[30px] text-center flex pr-3  justify-between items-center mt-2'>
                <img className=' rounded-full w-[40px] h-[40px]' src={twoSt} alt="twoSt" />
                <p className='saira text-[12px] font-medium text-center ml-[-25px]'>@(User_name)</p>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>6.90$</p>
                    <p className='saira text-[12px] font-medium'>Prize</p>
                </div>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>1234</p>
                    <p className='saira text-[12px] font-medium'>Points</p>
                </div>
                <p className='saira text-[16px] font-bold text-[#FFED63]'>#4</p>
            </div>
            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-lg rounded-[30px] text-center flex pr-3  justify-between items-center mt-2'>
                <img className=' rounded-full w-[40px] h-[40px]' src={twoSt} alt="twoSt" />
                <p className='saira text-[12px] font-medium text-center ml-[-25px]'>@(User_name)</p>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>6.90$</p>
                    <p className='saira text-[12px] font-medium'>Prize</p>
                </div>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>1234</p>
                    <p className='saira text-[12px] font-medium'>Points</p>
                </div>
                <p className='saira text-[16px] font-bold text-[#FFED63]'>#5</p>
            </div>
            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-lg rounded-[30px] text-center flex pr-3  justify-between items-center mt-2'>
                <img className=' rounded-full w-[40px] h-[40px]' src={twoSt} alt="twoSt" />
                <p className='saira text-[12px] font-medium text-center ml-[-25px]'>@(User_name)</p>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>6.90$</p>
                    <p className='saira text-[12px] font-medium'>Prize</p>
                </div>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>1234</p>
                    <p className='saira text-[12px] font-medium'>Points</p>
                </div>
                <p className='saira text-[16px] font-bold text-[#FFED63]'>#6</p>
            </div>
            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-lg rounded-[30px] text-center flex pr-3  justify-between items-center mt-2'>
                <img className=' rounded-full w-[40px] h-[40px]' src={twoSt} alt="twoSt" />
                <p className='saira text-[12px] font-medium text-center ml-[-25px]'>@(User_name)</p>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>6.90$</p>
                    <p className='saira text-[12px] font-medium'>Prize</p>
                </div>
                <div className='leading-[14px]'>
                    <p className='saira text-[12px] font-medium text-[#FFED63]'>1234</p>
                    <p className='saira text-[12px] font-medium'>Points</p>
                </div>
                <p className='saira text-[16px] font-bold text-[#FFED63]'>#7</p>
            </div>
           
        </div>
    )
}

export default LeaderboardModal
