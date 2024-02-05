import React, { useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'

function Contact({ user, setOpen, languageData  }) {
    const { design } = useDesign()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [isSended, setIsSended] = useState(false)

    const handleSend = () => {
        if (email === '' || message === '') return alert('Please fill all fields')
        setIsSended(true)
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>
                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                <div className='h-[80vh] flex align-middle items-center justify-center'>
                    <div>
                        <h1 className='text-[32px] text-white text-center'>{languageData?.contactModalSubTitle}</h1>
                        <p className='text-center saira'>{languageData?.contactModalSubTitle}</p>
                        <div>
                            <input value={email} onChange={e => setEmail(e.target.value)} className={`w-full bg-white border ${design === '0' ? 'rounded-[18px] border-[#FFED63]' : 'rounded-[12px] border-[#A2DBF0]'} px-6 py-3 mt-4 saira input-fix text-[#888888]`} placeholder='Email' />
                            <textarea value={message} onChange={e => setMessage(e.target.value)} className={`w-full bg-white border ${design === '0' ? 'rounded-[18px] border-[#FFED63]' : 'rounded-[12px] border-[#A2DBF0]'} px-6 py-3 mt-4 saira min-h-[200px] input-fix text-[#888888]`} placeholder='Message' />
                            <div className="flex justify-center">
                                <button className={`w-full bg-[white] ${design === '0' ? '  rounded-[18px] border-[2px] bg-white text-[#5f5f5f]' : ' rounded-[12px] border-none gradient-homepageBtn text-black'} px-6 py-3 saira p-2 mt-4 max-w-[350px] text-[#5f5f5f] font-semibold`} onClick={e => handleSend()}>
                                    {
                                        isSended ? languageData?.contactModalBtn1 : languageData?.contactModalBtn2
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
