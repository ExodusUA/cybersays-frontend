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
import About from '../Pages/CyberSaysPages/Modals/About'
import Legal from '../Pages/CyberSaysPages/Modals/Legal'
import Contact from '../Pages/CyberSaysPages/Modals/Contact'
import Settings from '../Pages/CyberSaysPages/Modals/Settings'
import { useNavigate } from 'react-router-dom'

function CyberSaysMobileMenu({ setMenuOpen, scrollToPage, user, siteData, setChatModal, chatModal }) {

  const [tourModal, setTourModal] = useState(false)
  const [referralsModal, setReferralsModal] = useState(false)
  const [withdrawModal, setWithdrawModal] = useState(false)
  const [transactionsModal, setTransactionsModal] = useState(false)
  const [ticketsModal, setTicketsModal] = useState(false)

  const [aboutModal, setAboutModal] = useState(false)
  const [legalModal, setLegalModal] = useState(false)
  const [settingsModal, setSettingsModal] = useState(false)
  const [contactModal, setContactModal] = useState(false)
  const [logoutModal, setLogoutModal] = useState(false)

  const navigate = useNavigate()

  return (
    <div>
      <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
        <div className='flex justify-between items-center max-w-[1170px] m-auto md:px-4 '>
          <img onClick={() => setMenuOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
          <div className='flex justify-between'>
            <NewLanguageButton />
            <div onClick={e => setLogoutModal(true)} className='ml-3 min-w-[50px] h-[50px] border-[2px] border-[#FFED63] bg-[#626161] rounded-full flex justify-center items-center  cursor-pointer'>
              <svg className='ml-[-5px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.75L15.75 12M15.75 12L12 8.25M15.75 12H2M8.25 6.06125V6C8.25 4.6 8.25 3.9 8.5225 3.365C8.7625 2.89375 9.14375 2.5125 9.615 2.2725C10.15 2 10.85 2 12.25 2H18C19.4 2 20.1 2 20.6337 2.2725C21.105 2.5125 21.4875 2.89375 21.7275 3.365C22 3.89875 22 4.59875 22 5.99625V18.005C22 19.4025 22 20.1013 21.7275 20.635C21.4874 21.1055 21.1045 21.4879 20.6337 21.7275C20.1 22 19.4012 22 18.0037 22H12.2462C10.8487 22 10.1487 22 9.615 21.7275C9.14462 21.4878 8.76218 21.1054 8.5225 20.635C8.25 20.1 8.25 19.4 8.25 18V17.9375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

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
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setAboutModal(true)}>About us</p>
            <div className='w-[2px] h-[20px] bg-[#FFED63]'></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setLegalModal(true)}>Legal</p>
            <div className='w-[2px] h-[20px] bg-[#FFED63]'></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setSettingsModal(true)}>Settings</p>
            <div className='w-[2px] h-[20px] bg-[#FFED63]'></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setContactModal(true)}>Contact Us</p>
          </div>
        </div>

        {
          logoutModal === true
            ?
            <div className='flex justify-center items-center'>
              <div className='fixed top-1/2 -translate-y-1/2 backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] border-[#FFD700] border'>
                <div className='flex justify-end mb-2'>
                  <img onClick={e => setLogoutModal(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>
                <h1 className='text-[24px] text-center max-w-[320px] w-full font-semibold mx-14'>Are you sure
                  you want to log out?</h1>

                <div className='flex items-center gap-4'>
                  <button onClick={e => setLogoutModal(false)} className='w-full bg-transparent border-[#FFD700] border px-6 py-3 saira p-2 mt-4 max-w-[350px] rounded-[50px] text-[18px] text-white font-semibold'>No</button>
                  <button onClick={e => {
                    window.localStorage.removeItem('token')
                    navigate('/login')
                  }} className='w-full bg-[white] border-[#FFD700] px-6 py-3 saira p-2 mt-4 max-w-[350px] rounded-[50px] text-[18px] text-[#5f5f5f] font-semibold'>Yes</button>
                </div>
              </div>
            </div>
            : null
        }

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

      {
        aboutModal && <About setOpen={setAboutModal} user={user} />
      }

      {
        legalModal && <Legal setOpen={setLegalModal} user={user} />
      }
      {
        settingsModal && <Settings setOpen={setSettingsModal} user={user} />
      }
      {
        contactModal && <Contact setOpen={setContactModal} user={user} />
      }
    </div>
  )
}

export default CyberSaysMobileMenu
