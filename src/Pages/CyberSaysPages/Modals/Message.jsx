import React from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'

function Message({ setOpenMassege, message, copyToMessage, messageCopied, onCloseCopied, selectedMessage, languageData }) {

    const { design } = useDesign()

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex justify-between items-center'>
            <div className='max-w-[600px] w-full m-auto'>
                <div className='flex justify-end mb-4 md:mb-10'>
                    <img onClick={e => {
                        onCloseCopied()
                        setOpenMassege(false)
                    }} className='w-[24px] h-[24px] cursor-pointer' src={ design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div className='my-6'>
                    <p className='h-auto max-h-[400px] md:max-h-[650px] saira text-[14px] font-medium  text-center overflow-y-scroll'>{message}</p>
                </div>

                <button onClick={e => copyToMessage(message, selectedMessage)} disabled={messageCopied[selectedMessage]} className={`max-w-[350px] m-auto w-full bg-white  border-[2px] border-[#FFED63]  text-black text-[18px] saira font-semibold py-2 disabled:opacity-60 flex justify-center items-center ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>
                    Copy message
                    <svg className='ml-3 cursor-pointer mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 9.667C7 8.95967 7.28099 8.28131 7.78115 7.78115C8.28131 7.28099 8.95967 7 9.667 7H18.333C18.6832 7 19.03 7.06898 19.3536 7.20301C19.6772 7.33704 19.9712 7.53349 20.2189 7.78115C20.4665 8.0288 20.663 8.32281 20.797 8.64638C20.931 8.96996 21 9.31676 21 9.667V18.333C21 18.6832 20.931 19.03 20.797 19.3536C20.663 19.6772 20.4665 19.9712 20.2189 20.2189C19.9712 20.4665 19.6772 20.663 19.3536 20.797C19.03 20.931 18.6832 21 18.333 21H9.667C9.31676 21 8.96996 20.931 8.64638 20.797C8.32281 20.663 8.0288 20.4665 7.78115 20.2189C7.53349 19.9712 7.33704 19.6772 7.20301 19.3536C7.06898 19.03 7 18.6832 7 18.333V9.667Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.012 16.737C3.70534 16.5622 3.45027 16.3095 3.27258 16.0045C3.09488 15.6995 3.00085 15.353 3 15V5C3 3.9 3.9 3 5 3H15C15.75 3 16.158 3.385 16.5 4" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    
                </button>
            </div>
        </div>
    )
}

export default Message
