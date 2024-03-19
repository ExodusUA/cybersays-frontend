import React, { useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'

function InviteFriends({scrollToPage, languageData, user,closeAll}) {

    const { design } = useDesign()
    const [isLinkCopied, setIsLinkCopied] = useState(false)

    const shareRefferalLink = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    text: 'Sharing',
                    url: '/' + user?.referral_code,
                })
                .then(() => console.log('Successful share! 🎉'))

        } else {
            window.navigator.clipboard.writeText(window.location.host + '/' + user?.referral_code)
            setIsLinkCopied(true)

            setTimeout(() => {
                setIsLinkCopied(false)
            }, 3000)
        }
    }
    return (
        <div className='w-full max-w-[400px]'>
            <p className='saira text-[16px] font-semibold text-center my-5'>{languageData?.referralInvite}</p>
            <button onClick={e => {
                scrollToPage(4)
                closeAll(false)
                }} className={`w-full  bg-white text-black text-[18px] saira font-semibold py-2 ${design === '0' ? ' rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>
                {
                    isLinkCopied === false
                        ? languageData?.myReferBtn
                        : languageData?.CopyLinkDone
                }
            </button>
        </div>
    )
}

export default InviteFriends
