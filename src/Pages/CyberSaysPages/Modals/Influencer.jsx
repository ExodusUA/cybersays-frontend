import React, { useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'

function Influencer({ user, setOpen, languageData }) {

    const { design } = useDesign()

    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [who, setWho] = useState(null)
    const [message, setMessage] = useState(null)
    
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>
                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                <h1 className='text-[18px] lg:text-[32px] text-white text-center lg:mt-12 font-semibold'>{languageData?.InfluencerTitle}</h1>
                <p className='saira text-[14px] font-medium text-center gradient-linkDouble leading-4'>{languageData?.InfluencerSubTitle} </p>
                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput1}</p>
                <div className='flex justify-center'>
                    <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder={languageData?.InfluencerInput1} />
                </div>
                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput2}</p>
                <div className='flex justify-center'>
                    <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={name} onChange={e => setName(e.target.value)} placeholder={languageData?.InfluencerInput2} />
                </div>
                
                <p className='text-[12px] saira mb-1 mt-3'>{languageData?.InfluencerSelect1}</p>
                <select
                    value={who}
                    onChange={e => setWho(e.target.value)}
                    className='custom-select bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-2  focus:ring-0 outline-none saira' >
                    <option className='text-black saira' >{languageData?.InfluencerOptoin1}</option>
                </select>
                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput3}</p>
                <div className='flex justify-center'>
                    <textarea className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none h-[100px] resize-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder={languageData?.InfluencerInput3} />
                </div>
                
                <div className='flex justify-center mt-4'>
                    <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.InfluencerBtn}</button>
                </div>
            </div>
        </div>
    )
}

export default Influencer
