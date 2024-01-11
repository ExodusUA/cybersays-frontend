import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import link1 from '../images/CyberSaysPage/mobileMenuLink/link1.png'
import link2 from '../images/CyberSaysPage/mobileMenuLink/link2.png'
import link3 from '../images/CyberSaysPage/mobileMenuLink/link3.png'
import link4 from '../images/CyberSaysPage/mobileMenuLink/link4.png'
import link5 from '../images/CyberSaysPage/mobileMenuLink/link5.png'
import link6 from '../images/CyberSaysPage/mobileMenuLink/link6.png'
import link7 from '../images/CyberSaysPage/mobileMenuLink/link7.png'
import link8 from '../images/CyberSaysPage/mobileMenuLink/link8.png'
import link9 from '../images/CyberSaysPage/mobileMenuLink/link9.png'
import link10 from '../images/CyberSaysPage/mobileMenuLink/link10.png'
import NewLanguageButton from './Language/NewLanguageButton'
import TourModal from './DoubleMoneyPage/TourModal'
import MyReferralsModal from './ProfileReferrals/MyReferralsModal'
import Withdraw from './Transactions/Withdraw'
import TransactionHistory from './Transactions/TransactionHistory'
import TicketsHistory from './Transactions/TicketsHistory'
import ChatModal from './ChatModal'

function CyberSaysMobileMenu({ setMenuOpen, scrollToPage, user, siteData }) {

  const [tourModal, setTourModal] = useState(false)
  const [referralsModal, setReferralsModal] = useState(false)
  const [withdrawModal, setWithdrawModal] = useState(false)
  const [transactionsModal, setTransactionsModal] = useState(false)
  const [ticketsModal, setTicketsModal] = useState(false)
  const [chatModal, setChatModal] = useState(false)

  return (
    <div>
      <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
        <div className='flex justify-between items-center max-w-[1170px] m-auto md:px-4 '>
          <img onClick={() => setMenuOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
          <NewLanguageButton />
        </div>
        <div className='max-w-[365px] w-full m-auto'>

          <div className='iphone:gap-7 se:gap-5 mac:!gap-4 grid mt-8 '>
            <div className='flex items-center' onClick={e => scrollToPage(0)}>
              <img className='w-[32px] h-[32px] mr-2' src={link1} alt="link1" />
              <p className='saira text-[20px] font-semibold  cursor-pointer'>Home page</p>
            </div>
            <div className='flex items-center cursor-pointer' onClick={e => scrollToPage(2)}>
              <img className='w-[32px] h-[32px] mr-2' src={link2} alt="link2" />
              <p className='saira text-[20px] font-semibold'>Double your money</p>
            </div>
            <div className='flex items-center' onClick={e => setTourModal(true)}>
              <img className='w-[32px] h-[32px] mr-2' src={link3} alt="link3" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>The  Vegas weekend</p>
            </div>
            <div className='flex items-center' onClick={e => scrollToPage(1)} >
              <img className='w-[32px] h-[32px] mr-2' src={link4} alt="link4" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Refer to get tickets</p>
            </div>
            <div className='flex items-center' onClick={e => setReferralsModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link5} alt="link5" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Your referrals</p>
            </div>

            <div className='flex items-center cursor-pointer' onClick={e => scrollToPage(4)}>
              <img className='w-[32px] h-[32px] mr-2' src={link6} alt="link6" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>The {siteData?.currentDay} Daily competition</p>
            </div>
            <div className='flex items-center' onClick={e => setWithdrawModal(true)}>
              <img className='w-[32px] h-[32px] mr-2' src={link8} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Choose your way to get paid</p>
            </div>
            <div className='flex items-center' onClick={e => setChatModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link9} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Chat room</p>
            </div>
            <div className='flex items-center' onClick={e => setTransactionsModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link7} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Transition history</p>
            </div>
            <div className='flex items-center' onClick={e => setTicketsModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link10} alt="link10" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>My Tickets & Points</p>
            </div>
          </div>
          <div className=' absolute bottom-4 flex justify-around items-center max-w-[330px] w-full '>
            <p className='saira text-[16px] font-semibold cursor-pointer'>About us</p>
            <div className='w-[2px] h-[20px] bg-[#FFED63]'></div>
            <p className='saira text-[16px] font-semibold cursor-pointer'>Legal</p>
            <div className='w-[2px] h-[20px] bg-[#FFED63]'></div>
            <p className='saira text-[16px] font-semibold cursor-pointer'>Settings</p>
            <div className='w-[2px] h-[20px] bg-[#FFED63]'></div>
            <p className='saira text-[16px] font-semibold cursor-pointer'>Contact Us</p>
          </div>
        </div>


      </div>
      {
        tourModal && <TourModal setOpen={setTourModal} />
      }
      {
        referralsModal && <MyReferralsModal setOpen={setReferralsModal} user={user} />
      }
      {
        withdrawModal && <Withdraw setOpen={setWithdrawModal} user={user} />
      }
      {
        transactionsModal && <TransactionHistory setOpen={setTransactionsModal} />
      }
      {
        ticketsModal && <TicketsHistory setOpen={setTicketsModal} />
      }
      {
        chatModal && <ChatModal setOpen={setChatModal} user={user} />
      }
    </div>
  )
}

export default CyberSaysMobileMenu
