import React from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import FAQItem from './FAQItem'

function FAQ({ setOpen, languageData, setContactOpen, setReferralsOpen }) {

    const { design } = useDesign()
    const [creatorsOpen, setCreatorsOpen] = React.useState(false)
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[660px] m-auto'>
                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                <h1 className='text-[18px] text-white text-center'>FAQ</h1>
                <div className='md:m-auto max-w-[1280px] block items-center py-[10px] relative'>
                    <div className='faqblock absolute left-0 top-0 right-0 z-[99] h-full w-1/2 m-auto pointer-events-none'></div>

                    <div className='h-screen max-h-[800px] overflow-y-auto pb-[20px] mac2:pb-[130px]'>
                        {
                            languageData?.FAQ_Questions?.map((item, index) => (
                                index !== 5 && index !== 6 && <FAQItem setFAQOpen={setOpen} referrals={setReferralsOpen} contact={setContactOpen} setCreatorsOpen={setCreatorsOpen} data={item} key={index} index={index} itemsCount={languageData?.FAQ_Questions.length} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
