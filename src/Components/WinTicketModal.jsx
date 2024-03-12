import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import { Link } from 'react-router-dom'
import imLiveLogo from '../images/CyberSaysPage/imLiveLogo.png'
import doubleIcon from '../images/NewDesign/doubleIcon.svg'

function WinTicketModal({ setOpen, languageData, user, scrollToPage }) {
    const [pdfLoading, setPdfLoading] = useState(false)

    const { design } = useDesign()

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 lg:flex'>
            <div className='max-w-[600px] m-auto relative'>


                <div className='flex justify-end md:my-4 lg:mb-10 lg:absolute right-0 top-[-70px]'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div>
                    <p className=' m-auto text-[18px] lg:text-[24px] font-semibold text-center'>
                    {languageData?.winTicketTitle}
                    </p>
                    <p className='gradient-linkDouble saira text-[14px] font-medium text-center leading-4 '>{languageData?.winTicketSubTitle}</p>
                    <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-md rounded-[14px] lg:rounded-[24px] p-2 mt-2 '>
                        <div className='flex items-center'>
                            <img className='w-[100px] mr-2' src={imLiveLogo} alt="imLiveLogo" />
                            <p className='saira text-[16px] font-semibold w-[200px]'>{languageData?.winTicketLiTitle}</p>
                        </div>
                        <ul className='list-disc ml-[20px] mt-1'>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>{languageData?.winTicketLi1}</li>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>{languageData?.winTicketLi2}</li>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>{languageData?.winTicketLi3}</li>
                        </ul>


                    </div>

                    <button onClick={e => {
                        scrollToPage(1)
                        setOpen(false)
                        }} className={`w-full sm:w-[350px] m-auto   border-[#FFED63]  text-black text-[16px] mod:text-[18px] saira font-semibold flex justify-center items-center mt-3 ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.winTicketBtn}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>

                    <p className='text-[18px] lg:text-[24px] text-center font-semibold gradient-linkDouble  mt-2'>{languageData?.winTicketEnd}</p>


                </div>

            </div>
            <div className=' absolute bottom-2 left-1/2 transform -translate-x-1/2 max-w-[235px] w-full'>
                <Link onClick={e => setOpen(false)} to='/terms' target='_blank' ><p className='text-[12px] text-center font-semibold text-[#D9D9D9] mt-2 underline gradient-link '>{languageData?.winTicketLink}</p></Link>

            </div>
        </div>
    )
}

export default WinTicketModal


