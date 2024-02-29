import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import point1 from '../images/NewDesign/newPoint1.png'
import point2 from '../images/NewDesign/newPoint2.png'
import point3 from '../images/NewDesign/newPoint3.png'
import { PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer'
import { Link } from 'react-router-dom'
import imLiveLogo from '../images/CyberSaysPage/imLiveLogo.png'
import doubleIcon from '../images/NewDesign/doubleIcon.svg'

function WinTicketModal({ setOpen, languageData, user }) {
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
                        👬Can I still go to Vegas if my ticket didn’t win? 👬
                    </p>
                    <p className='gradient-linkDouble saira text-[14px] font-medium text-center leading-4 '>Yes! In order for you, your referrer or your referral to be picked by the other if they win the Vegas promotion, you will need to:</p>
                    <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-md rounded-[14px] lg:rounded-[24px] p-2 mt-2 '>
                        <div className='flex items-center'>
                            <img className='w-[100px] mr-2' src={imLiveLogo} alt="imLiveLogo" />
                            <p className='saira text-[16px] font-semibold w-[200px]'>Join the CyberSays Promotion on ImLive.com:</p>
                        </div>
                        <ul className='list-disc ml-[20px] mt-1'>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>Create a new account or use an existing one.</li>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>Make a minimum purchase of five credits to win five more.</li>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>Spend the entire ten (10) credits received on ImLive.com.</li>
                        </ul>


                    </div>

                    <button className={`w-full sm:w-[350px]   border-[#FFED63]  text-black text-[16px] mod:text-[18px] saira font-semibold flex justify-center items-center mt-3 ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>Go to Double Your Money page<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>

                    <p className='text-[18px] lg:text-[24px] text-center font-semibold gradient-linkDouble  mt-2'>{languageData.winPointEnd}</p>


                </div>

            </div>
            <div className=' absolute bottom-2 left-1/2 transform -translate-x-1/2 max-w-[235px] w-full'>
                <Link onClick={e => setOpen(false)} to='/terms' target='_blank' ><p className='text-[12px] text-center font-semibold text-[#D9D9D9] mt-2 underline gradient-link '>{languageData.winPointEndLink}</p></Link>

            </div>
        </div>
    )
}

export default WinTicketModal


