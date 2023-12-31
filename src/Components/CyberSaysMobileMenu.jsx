import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import link1 from '../images/CyberSaysPage/mobileMenuLink/link1.png'
import link2 from '../images/CyberSaysPage/mobileMenuLink/link2.png'
import link3 from '../images/CyberSaysPage/mobileMenuLink/link3.png'
import link4 from '../images/CyberSaysPage/mobileMenuLink/link4.png'
import link5 from '../images/CyberSaysPage/mobileMenuLink/link5.png'
import link6 from '../images/CyberSaysPage/mobileMenuLink/link6.png'
import link7 from '../images/CyberSaysPage/mobileMenuLink/link7.png'
import NewLanguageButton from './Language/NewLanguageButton'
import TourModal from './DoubleMoneyPage/TourModal'

function CyberSaysMobileMenu({ setMenuOpen, scrollToPage }) {

  const [tourModal, setTourModal] = useState(false)

  return (
    <div>
      <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
        <div className='max-w-[365px] w-full m-auto'>
          <div className='flex justify-between items-center'>
            <NewLanguageButton />
            <img onClick={() => setMenuOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />

          </div>
          <div className='gap-7 grid mt-8 '>
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
            <div className='flex items-center'>
              <img className='w-[32px] h-[32px] mr-2' src={link4} alt="link4" onClick={e => scrollToPage(1)} />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Refer to get tickets</p>
            </div>
            <div className='flex items-center'>
              <img className='w-[32px] h-[32px] mr-2' src={link5} alt="link5" onClick={e => scrollToPage(3)} />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Your referrals</p>
            </div>

            <div className='flex items-center cursor-pointer' onClick={e => scrollToPage(4)}>
              <img className='w-[32px] h-[32px] mr-2' src={link6} alt="link6" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>The 69 Daily competition</p>
            </div>
            <div className='flex items-center'>
              <img className='w-[32px] h-[32px] mr-2' src={link7} alt="link7" />
              <p className='saira text-[20px] font-semibold cursor-pointer'>Choose your way to get paid</p>
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
    </div>
  )
}

export default CyberSaysMobileMenu
