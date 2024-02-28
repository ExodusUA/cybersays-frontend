import React, { useEffect, useState } from 'react'
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
import link11 from '../images/NewDesign/modalMenu/link11.png'
import link12 from '../images/NewDesign/modalMenu/link12.png'
import link13 from '../images/NewDesign/modalMenu/link13.png'
import toggleTheme1 from '../images/NewDesign/toggleTheme1.png'
import toggleTheme2 from '../images/NewDesign/toggleTheme2.png'
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
import { useDesign } from '../Helpers/Design/DesignContext'
import OurMission from '../Pages/CyberSaysPages/Modals/OurMission'
import WhyJoin from '../Pages/CyberSaysPages/Modals/WhyJoin'
import FAQ from '../Pages/CyberSaysPages/Modals/FAQ'
import userAPI from '../Requests/user'

function CyberSaysMobileMenu({ setMenuOpen, scrollToPage, user, siteData, setChatModal, chatModal, languageData }) {

  const { design, changeDesign } = useDesign()

  const [tourModal, setTourModal] = useState(false)
  const [referralsModal, setReferralsModal] = useState(false)
  const [withdrawModal, setWithdrawModal] = useState(false)
  const [transactionsModal, setTransactionsModal] = useState(false)
  const [ticketsModal, setTicketsModal] = useState(false)

  const [aboutModal, setAboutModal] = useState(false)
  const [legalModal, setLegalModal] = useState(false)
  const [settingsModal, setSettingsModal] = useState(false)
  const [contactModal, setContactModal] = useState(false)
  const [ourModal, setOurModal] = useState(false)
  const [whyModal, setWhyModal] = useState(false)
  const [FAQModal, setFAQModal] = useState(false)
  const [logoutModal, setLogoutModal] = useState(false)
  const [whatAbout, setWhatAbout] = useState(false)

  const [checkBox, setCheckBox] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('design')) {
      setCheckBox(window.localStorage.getItem('design'))
    }
  }, [checkBox])


  const navigate = useNavigate()



  return (
    <div>
      <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
        <div className='flex justify-between items-center max-w-[1170px] m-auto md:px-4 '>
          <img onClick={() => setMenuOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
          <div className='flex justify-between items-center'>
            <p className='saira text-white font-semibold text-[12px] lg:text-[20px]'><img className='w-[24px] lg:w-[40px] rounded-full' src={toggleTheme1} alt="toggleTheme1" /></p>
            <label class="relative  items-center cursor-pointer mx-2">
              <input onClick={e => {
                setCheckBox(design === '1' ? '0' : '1')
                changeDesign(design === '1' ? '0' : '1')
              }} type="checkbox" checked={ checkBox === '1' ? true : false} class="sr-only peer" />
              <div class={`w-[56px] md:w-[72px] border-[2px] h-8 md:h-10  peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px]  ${design === '0' ? 'after:bg-[#FFED63] border-[#FFED63]' : 'after:bg-[#80d1ee] border-[#80d1ee]'}   after:rounded-full after:h-6 md:after:h-8 after:w-6 md:after:w-8 after:transition-all`}></div>
              <p className='text-[10px] lg:text-[12px] saira font-medium text-center absolute w-[110px] left-[-25px] lg:left-[-15px]'>Choose your design</p>
            </label>
            <p className='saira text-white font-semibold text-[12px] lg:text-[20px] mr-2'><img className='w-[24px] lg:w-[40px] rounded-full' src={toggleTheme2} alt="toggleTheme2" /></p>
            <NewLanguageButton />
            <div onClick={e => setLogoutModal(true)} className={`ml-3 min-w-[28px] lg:min-w-[34px] h-[28px] lg:h-[34px] border-[2px] ${design === '0' ? ' border-[#FFED63]' : 'border-[#A2DBF0]'} bg-[#626161] rounded-full flex justify-center items-center  cursor-pointer`}>
              <svg className='ml-[-5px]' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.75L15.75 12M15.75 12L12 8.25M15.75 12H2M8.25 6.06125V6C8.25 4.6 8.25 3.9 8.5225 3.365C8.7625 2.89375 9.14375 2.5125 9.615 2.2725C10.15 2 10.85 2 12.25 2H18C19.4 2 20.1 2 20.6337 2.2725C21.105 2.5125 21.4875 2.89375 21.7275 3.365C22 3.89875 22 4.59875 22 5.99625V18.005C22 19.4025 22 20.1013 21.7275 20.635C21.4874 21.1055 21.1045 21.4879 20.6337 21.7275C20.1 22 19.4012 22 18.0037 22H12.2462C10.8487 22 10.1487 22 9.615 21.7275C9.14462 21.4878 8.76218 21.1054 8.5225 20.635C8.25 20.1 8.25 19.4 8.25 18V17.9375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

          </div>

        </div>
        <div className='max-w-[365px] w-full m-auto h-screen max-h-[800px] overflow-auto mac2:pb-[70px]'>

          <div className='iphone:gap-4 se:gap-4 mac:!gap-2.5 grid lg:mt-8 mac:mt-0 '>
            <div className='flex items-center' onClick={e => scrollToPage(0)}>
              <img className='w-[32px] h-[32px] mr-2' src={design === '0' ? link1 : require('../images/NewDesign/modalMenu/link1.png')} alt="link1" />
              <p className='saira text-[20px] font-semibold  cursor-pointer'>{languageData?.modalMenuLink1}</p>
            </div>
            <div className='flex items-center cursor-pointer' onClick={e => scrollToPage(2)}>
              <img className='w-[32px] h-[32px] mr-2' src={design === '0' ? link2 : require('../images/NewDesign/modalMenu/link2.png')} alt="link2" />
              <p className='saira text-[20px] font-semibold'>{languageData?.modalMenuLink2}</p>
            </div>
            <div className='flex items-center' onClick={e => setTourModal(true)}>
              <img className='w-[32px] h-[32px] mr-2' src={link3} alt="link3" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink3}</p>
            </div>
            <div className='flex items-center' onClick={e => scrollToPage(1)} >
              <img className='w-[32px] h-[32px] mr-2' src={design === '0' ? link4 : require('../images/NewDesign/modalMenu/link3.png')} alt="link4" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink4}</p>
            </div>
            <div className='flex items-center' onClick={e => setReferralsModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={design === '0' ? link5 : require('../images/NewDesign/modalMenu/link4.png')} alt="link5" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink5}</p>
            </div>

            <div className='flex items-center cursor-pointer' onClick={e => scrollToPage(4)}>
              <img className='w-[32px] h-[32px] mr-2' src={link6} alt="link6" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink6} {siteData?.currentDay} {languageData?.modalMenuLink6Span}</p>
            </div>
            <div className='flex items-center' onClick={e => setWithdrawModal(true)}>
              <img className='w-[32px] h-[32px] mr-2' src={link8} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink7}</p>
            </div>
            <div className='flex items-center' onClick={e => setChatModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link9} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink8}</p>
            </div>
            <div className='flex items-center' onClick={e => setTransactionsModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link7} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink9}</p>
            </div>
            <div className='flex items-center' onClick={e => setTicketsModal(true)} >
              <img className='w-[32px] h-[32px] mr-2' src={link10} alt="link10" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>{languageData?.modalMenuLink10}</p>
            </div>

            <div className=' cursor-pointer  ' onClick={e => setWhatAbout(!whatAbout)}>
              <div className='flex  items-center'>
                <div className='flex items-center' >
                  <img className='w-[32px] h-[32px] mr-2' src={link11} alt="link11" />
                  <p className='saira text-[20px] font-semibold cursor-pointer'>What about</p>
                </div>
                <div className='ml-2'>
                  {
                    whatAbout
                      ?
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 17L12 7L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 7L12 17L2 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  }
                </div>
              </div>
              {
                whatAbout && <>
                  <div className='mt-1'>
                    <div className='flex items-center' onClick={e => setAboutModal(true)}  >
                      <p className='saira text-[20px] font-semibold cursor-pointer ml-[40px]'>{languageData?.modalMenuBottom1}</p>
                    </div>
                    <div className='flex items-center' onClick={e => setOurModal(true)} >
                      <p className='saira text-[20px] font-semibold cursor-pointer ml-[40px]'>{languageData?.modalMenuLink12}</p>
                    </div>
                    <div className='flex items-center' onClick={e => setFAQModal(true)} >
                      <p className='saira text-[20px] font-semibold cursor-pointer ml-[40px]'>{languageData?.modalMenuLink11}</p>
                    </div>

                    <div className='flex items-center' onClick={e => setWhyModal(true)} >
                      <p className='saira text-[20px] font-semibold cursor-pointer ml-[40px]'>{languageData?.modalMenuLink13}</p>
                    </div>
                    <div className='flex items-center' onClick={e => setContactModal(true)}  >
                      <p className='saira text-[20px] font-semibold cursor-pointer ml-[40px]'>{languageData?.modalMenuBottom4}</p>
                    </div>
                    <div className='flex items-center' onClick={e => setLegalModal(true)}  >
                      <p className='saira text-[20px] font-semibold cursor-pointer ml-[40px]'>{languageData?.modalMenuBottom2}</p>
                    </div>
                    <div className='flex items-center' onClick={e => setSettingsModal(true)}  >
                      <p className='saira text-[20px] font-semibold cursor-pointer ml-[40px]'>{languageData?.modalMenuBottom3}</p>
                    </div>
                  </div>
                </>
              }
            </div>

          </div>
          {/*
          <div className=' absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-around items-center max-w-[420px] w-full '>
            <p className='saira text-[16px] font-semibold cursor-pointer text-center leading-4' onClick={e => setAboutModal(true)}>{languageData?.modalMenuBottom1}</p>
            <div className={`w-[2px] h-[20px]  ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setLegalModal(true)}>{languageData?.modalMenuBottom2}</p>
            <div className={`w-[2px] h-[20px]  ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setSettingsModal(true)}>{languageData?.modalMenuBottom3}</p>
            <div className={`w-[2px] h-[20px]  ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
            <p className='saira text-[16px] font-semibold cursor-pointer' onClick={e => setContactModal(true)}>{languageData?.modalMenuBottom4}</p>
          </div>
          */}
        </div>

        {
          logoutModal === true
            ?
            <div className='flex justify-center items-center'>
              <div className={`fixed top-1/2 -translate-y-1/2 backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>
                <div className='flex justify-end mb-2'>
                  <img onClick={e => setLogoutModal(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <h1 className='text-[24px] text-center max-w-[320px] w-full font-semibold lg:mx-14'>{languageData?.logoutConfirmTitle}</h1>

                <div className='flex items-center gap-4'>
                  <button onClick={e => setLogoutModal(false)} className={`w-full bg-transparent  border px-6 py-3 saira p-2 mt-4 max-w-[350px] text-[18px] text-white font-semibold ${design === '0' ? '  rounded-[50px] border-[#FFD700]' : ' rounded-[12px] border-[#A2DBF0]'}`}>{languageData?.logoutConfirmNo}</button>
                  <button onClick={e => {
                    window.localStorage.removeItem('token')
                    navigate('/login')
                  }} className={`w-full bg-[white]  px-6 py-3 saira p-2 mt-4 max-w-[350px] text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.logoutConfirmYes}</button>
                </div>
              </div>
            </div>
            : null
        }

      </div>
      {
        tourModal && <TourModal languageData={languageData} setOpen={setTourModal} />
      }
      {
        referralsModal && <MyReferralsModal languageData={languageData} setOpen={setReferralsModal} user={user} />
      }
      {
        withdrawModal && <Withdraw languageData={languageData} setOpen={setWithdrawModal} user={user} />
      }
      {
        transactionsModal && <TransactionHistory languageData={languageData} setOpen={setTransactionsModal} user={user} />
      }
      {
        ticketsModal && <TicketsHistory languageData={languageData} setOpen={setTicketsModal} user={user} />
      }
      {
        chatModal && <ChatModal languageData={languageData} setOpen={setChatModal} user={user} />
      }

      {
        aboutModal && <About languageData={languageData} setOpen={setAboutModal} user={user} />
      }
      {
        ourModal && <OurMission languageData={languageData} setOpen={setOurModal} user={user} />
      }
      {
        whyModal && <WhyJoin languageData={languageData} setOpen={setWhyModal} user={user} />
      }
      {
        FAQModal && <FAQ languageData={languageData} setOpen={setFAQModal} user={user} />
      }
      {
        legalModal && <Legal languageData={languageData} setOpen={setLegalModal} user={user} />
      }
      {
        settingsModal && <Settings languageData={languageData} setOpen={setSettingsModal} user={user} />
      }
      {
        contactModal && <Contact languageData={languageData} setOpen={setContactModal} user={user} />
      }
    </div>
  )
}

export default CyberSaysMobileMenu
