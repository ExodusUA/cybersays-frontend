import React, { useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'

function Contact({ user, setOpen, languageData }) {
    const { design } = useDesign()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [isSended, setIsSended] = useState(false)
    const [whatAbout, setWhatAbout] = useState(false)

    const handleSend = () => {
        if (email === '' || message === '') return alert('Please fill all fields')
        setIsSended(true)
    }
    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 lg:flex items-center'>
            <div className='max-w-[600px] m-auto w-full'>
                <div className='flex justify-end'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                <div className='align-middle items-center justify-center '>
                    <div>
                        <h1 className=' text-[18px] lg:text-[32px] text-white text-center'>{languageData?.contactModalTitle}</h1>
                        <p className='text-center saira text-[16px] font-semibold mx-2'>{languageData?.contactModalSubTitle}</p>
                        <div>
                            <input value={email} onChange={e => setEmail(e.target.value)} className={`w-full bg-white border-[2px] ${design === '0' ? 'rounded-[18px] border-[#FFED63]' : 'rounded-[12px] border-[#A2DBF0]'} text-[14px] saira px-4 py-2 lg:py-3 mt-4 saira input-fix text-[#888888]`} placeholder={languageData?.contactQuestionEmail} />
                            <div className={` bg-white px-6 py-2 lg:py-3 mt-2 border ${design === '0' ? 'rounded-[18px] border-[#FFED63]' : 'rounded-[12px] border-[#A2DBF0]'}`} >
                                <div onClick={e => setWhatAbout(!whatAbout)} className={`flex  items-center justify-between cursor-pointer`}>
                                    <div className='flex items-center' >
                                        <p className='saira text-[14px] font-semibold  text-[#1E1E1E]'>{languageData?.contactQuestionTitle}</p>
                                    </div>
                                    <div className='ml-2'>
                                        {
                                            whatAbout
                                                ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                        }
                                    </div>
                                </div>
                                {
                                    whatAbout && <>
                                        <div className='mt-2'>
                                            <label className="checkbox-container flex items-center ml-2">
                                                <input checked={selectedOption === 'option1'}
                                                    onChange={() => setSelectedOption('option1')} type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className='text-[#1E1E1E] saira text-[14px] font-medium'>{languageData?.contactQuestion1}</p>
                                            </label>
                                            <label className="checkbox-container flex items-center ml-2">
                                                <input checked={selectedOption === 'option2'}
                                                    onChange={() => setSelectedOption('option2')} type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className='text-[#1E1E1E] saira text-[14px] font-medium'>{languageData?.contactQuestion2}</p>
                                            </label>
                                            <label className="checkbox-container flex items-center ml-2">
                                                <input checked={selectedOption === 'option3'}
                                                    onChange={() => setSelectedOption('option3')} type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className='text-[#1E1E1E] saira text-[14px] font-medium'>{languageData?.contactQuestion3}</p>
                                            </label>
                                            <label className="checkbox-container flex items-center ml-2">
                                                <input checked={selectedOption === 'option4'}
                                                    onChange={() => setSelectedOption('option4')} type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className='text-[#1E1E1E] saira text-[14px] font-medium'>{languageData?.contactQuestion4}</p>
                                            </label>
                                            <label className="checkbox-container flex items-center ml-2">
                                                <input checked={selectedOption === 'option5'}
                                                    onChange={() => setSelectedOption('option5')} type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className='text-[#1E1E1E] saira text-[14px] font-medium'>{languageData?.contactQuestion5}</p>
                                            </label>
                                            <label className="checkbox-container flex items-center ml-2">
                                                <input checked={selectedOption === 'option6'}
                                                    onChange={() => setSelectedOption('option6')} type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className='text-[#1E1E1E] saira text-[14px] font-medium'>{languageData?.contactQuestion6}</p>
                                            </label>
                                            <label className="checkbox-container flex items-center ml-2">
                                                <input checked={selectedOption === 'option7'}
                                                    onChange={() => setSelectedOption('option7')} type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className='text-[#1E1E1E] saira text-[14px] font-medium'>{languageData?.contactQuestion7}</p>
                                            </label>
                                        </div>
                                    </>
                                }
                            </div>

                        </div>

                        <textarea value={message} onChange={e => setMessage(e.target.value)} className={`w-full bg-white border ${design === '0' ? 'rounded-[18px] border-[#FFED63]' : 'rounded-[12px] border-[#A2DBF0]'} px-4 py-2 mt-2 text-[14px] saira min-h-[70px] lg:min-h-[100px] resize-none input-fix text-[#888888]`} placeholder={languageData?.contactQuestionDesc} />
                        <button className={`w-full bg-white border-[2px] ${design === '0' ? 'rounded-[18px] border-[#FFED63]' : 'rounded-[12px] border-[#A2DBF0]'} text-[14px] saira px-4 py-2 mt-1 saira input-fix text-[#1E1E1E] font-semibold flex justify-center items-center cursor-pointer`} >{languageData?.contactQuestionAttach}
                            <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2.2V7H4.7L5.1 6.5L9 2.5L9.5 2.2ZM11.5 2V7C11.5 7.53043 11.2893 8.03914 10.9142 8.41421C10.5391 8.78929 10.0304 9 9.5 9H4.5V20C4.5 21.1 5.4 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V4C20.5 3.46957 20.2893 2.96086 19.9142 2.58579C19.5391 2.21071 19.0304 2 18.5 2H11.5Z" fill="#1E1E1E" />
                            </svg></button>

                        <div className="flex justify-center">
                            <button className={`w-full bg-[white] text-[18px] ${design === '0' ? '  rounded-[18px] border-[2px] bg-white text-[#5f5f5f]' : ' rounded-[12px] border-none gradient-homepageBtn text-black'} px-6 py-2 saira p-2 mt-2 sm:max-w-[350px] text-[#5f5f5f] font-semibold`} onClick={e => handleSend()}>
                                {
                                    isSended ? languageData?.contactModalBtn1 : languageData?.contactModalBtn2
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
