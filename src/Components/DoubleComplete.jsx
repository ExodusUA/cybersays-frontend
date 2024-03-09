import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import congrats from '../images/CyberSaysPage/congrats.png'

function DoubleComplete({ setOpen, languageData, user }) {
    
    const [pdfLoading, setPdfLoading] = useState(false)
    const [isLinkShared, setIsLinkShared] = useState(false)

    const { design } = useDesign()

    const shareRefferalLink = () => {
        if (navigator.share) {
            navigator
                .share({
                    url: '/' + user?.referral_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                .catch(err => alert('Error sharing: ' + err));
        } else {


            window.navigator.clipboard.writeText(window.location.host + '/' + user?.referral_code)
            setIsLinkShared(true)

            setTimeout(() => {
                setIsLinkShared(false)
            }, 3000)
        }
    }
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex'>
            <div className='max-w-[600px] m-auto relative w-full'>
                <div className='flex justify-end md:my-4 lg:mb-10 absolute right-0 top-[-110px] lg:top-[-70px]'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div className='  max-w-[600px] m-auto '>
                    <p className='text-[24px] md:text-[32px] font-semibold text-center leading-8 lg:leading-9 mx-2'>{languageData?.doubleCompleteTitle} <span className=' truncate text-[24px] md:text-[32px] font-semibold ml-1 block lg:inline'>
                        {user?.email}
                    </span> {languageData?.doubleCompleteTitleSpan}</p>
                    <img className='max-w-[345px] md:max-w-[400px] w-full m-auto mt-2 my-4' src={congrats} alt="congrats" />
                    <p className='text-[20px]  font-medium text-center saira leading-6 lg:leading-[unset]'>{languageData?.doubleCompleteSubTitle}</p>
                    <div className='flex justify-center mx-2'>
                        <button onClick={e => shareRefferalLink()} className={` w-full bg-white  border-[2px] ${design === '0' ? ' rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'} text-black text-[18px] saira font-semibold py-2 flex justify-center mt-2 lg:mt-4 absolute mx-2`}>
                        {languageData?.doubleCompleteBtn}
                            <svg className='ml-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12.5L14 5.5V9.5C7 10.5 4 15.5 3 20.5C5.5 17 9 15.4 14 15.4V19.5L21 12.5Z" fill="#1E1E1E" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DoubleComplete


