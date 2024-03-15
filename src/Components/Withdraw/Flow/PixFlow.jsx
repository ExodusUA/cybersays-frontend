import React, { useState } from 'react'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import { withdrawD24 } from '../../../Requests/withdraw'
import userAPI from '../../../Requests/user'

function PixFlow({ languageData, setConfirm, setError, email, userCountry }) {
    const { design } = useDesign()
    const [PIX, setPIX] = useState(null)
    const [CPF, setCPF] = useState(null)
    const [pixType, setPixType] = useState(null)
    const [pixTypeOption, setPixTypeOption] = useState(null)
    const selectedPixType = [
        {
            option: languageData?.pixTypeOption1,
        },
        {
            option: languageData?.pixTypeOption2,
        },
        {
            option: languageData?.pixTypeOption3,
        },
        {
            option: languageData?.pixTypeOption4,
        }
    ]

    async function creteWithdraw() {
        if ((PIX === null || PIX === undefined || PIX.length === '') && pixTypeOption !== languageData?.pixTypeOption1) return alert('Please enter a valid PIX')
        if (CPF === null || CPF === undefined || CPF.length === '') return alert('Please enter a valid CPF')
        try {
            //await withdrawD24(PIX, CPF, userCountry)
            let pixType = pixTypeOption === languageData?.pixTypeOption1 && 'CPF' || pixTypeOption === languageData?.pixTypeOption2 && 'PHONE' || pixTypeOption === languageData?.pixTypeOption3 && 'EMAIL' || pixTypeOption === languageData?.pixTypeOption4 && 'EVP'
            await userAPI.createPixWithdraw(PIX, CPF, email, pixType)
            setConfirm(true)
        } catch (error) {
            setError(true)
        }

    }

    return (
        <div className='max-w-[600px] w-full m-auto'>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>{languageData?.PIXTitle}</p>
            <div>

                <p className='saira text-[12px] font-medium my-1'>{languageData?.pixType}</p>
                <div className={` bg-white px-3 py-2 lg:py-3 mt-1 border relative ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                    <div onClick={e => setPixType(!pixType)} className={`flex  items-center justify-between cursor-pointer`}>
                        <div className='flex items-center' >
                            <p className='saira text-[16px] font-normal text-[#1E1E1E]'>{pixTypeOption || languageData?.pixTypeSelectMain}</p>
                        </div>
                        <div className='ml-2'>
                            {
                                pixType
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

                </div>

                {
                    pixType && <>
                        <div className={`bg-white px-3 py-2 lg:py-3 mt-2 border absolute shadow-sm max-w-[600px] w-full ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                            {
                                selectedPixType.map((item, index) => (
                                    <div key={index} className='flex items-center gap-1 hover:bg-slate-200 rounded-[12px] cursor-pointer h-[50px]' onClick={e => {
                                        setPixTypeOption(item.option)
                                        setPixType(false)
                                    }}>
                                        <label className=" flex items-center ml-2">
                                            <p className='text-[#1E1E1E] saira text-[16px] font-normal cursor-pointer' id={item.option} name={item.option} value={item.option} checked={pixTypeOption === item.option} >{item.option}</p>
                                        </label>
                                    </div>

                                ))
                            }

                        </div>
                    </>
                }
            </div>
            
            {
                (pixTypeOption === languageData?.pixTypeOption2 || pixTypeOption === languageData?.pixTypeOption3 || pixTypeOption === languageData?.pixTypeOption4) && <div>
                    <p className='saira text-[12px] font-medium my-1'>{
                        pixTypeOption === languageData?.pixTypeOption2 && languageData?.pixTypeSelectName2 ||
                        pixTypeOption === languageData?.pixTypeOption3 && languageData?.pixTypeSelectName3 ||
                        pixTypeOption === languageData?.pixTypeOption4 && 'Pix Key'
                    }</p>
                    <div className='flex justify-center'>
                        <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={PIX} onChange={e => setPIX(e.target.value)}
                            placeholder={
                                pixTypeOption === languageData?.pixTypeOption2 && '(XX)XXXXX-XXXX' ||
                                pixTypeOption === languageData?.pixTypeOption3 && 'username@cybersays.com' ||
                                pixTypeOption === languageData?.pixTypeOption4 && 'Pix Key'

                            } />
                    </div>
                </div>
            }

{
                (pixTypeOption === languageData?.pixTypeOption1 || pixTypeOption === languageData?.pixTypeOption2 || pixTypeOption === languageData?.pixTypeOption3 || pixTypeOption === languageData?.pixTypeOption4) && <div>
                    <p className='saira text-[12px] font-medium my-1'>{languageData?.pixTypeSelectName1}</p>
                    <div className='flex justify-center'>
                        <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={CPF} onChange={e => setCPF(e.target.value)}
                            placeholder={'000.000.000-00'} />
                    </div>
                </div>
            }

            <div className='flex justify-center mt-4'>
                <button onClick={e => creteWithdraw()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-3 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>
            </div>
        </div>
    )
}

export default PixFlow
