import React from 'react'
import netflix from '../images/product.jpeg'
import coin from '../images/coin.png'
var mixpanel = require('mixpanel-browser');

function Slide({ languageData, targetURL, uid }) {

    const [isLinkCopied, setIsLinkCopied] = React.useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(targetURL);
        setIsLinkCopied(true);
        setTimeout(() => {
            setIsLinkCopied(false);
        }, 3000);
    }

    return (
        <div className='max-w-[1135px] px-5 py-2 md:py-5 m-auto mt-[10px] md:mt-[50px] bg-gray/25 rounded-[14px] border-[1px] border-[#088CD9]'>
            <div className='flex items-center gap-3'>
                <img className=' h-[45px]' src={netflix} alt="Image" />
                <p className='text-white font-bold text-[17px] sm:text-[18px]'>{languageData?.OfferTitle}</p>
            </div>

            <div className='gradient-line w-full h-[2px] my-4'></div>

            <ul>
                {
                    languageData?.listTexts.map((item, index) => (
                        <li key={index} className='flex items-center gap-1 mb-1'>
                            <p className='text-white text-[18px] font-regular saira'><span className='mr-1'>✅ </span>  {item}</p>
                        </li>
                    ))
                }
            </ul>
            <div className='flex justify-between items-center mt-4'>
                <div>
                    <div className='flex gap-2'>
                        <img src={coin} className='w-6 h-6' alt="Coin" />
                        <p className='font-bold text-[18px] text-white'>1,000</p>

                    </div>
                    <p className='saira text-[20px]'>{languageData?.TreatCoins}</p>
                </div>

                <div>
                    <a href={targetURL} onClick={e => {

                        let utmData = {
                            utm_source: window.localStorage.getItem('utm_source'),
                            utm_medium: window.localStorage.getItem('utm_medium'),
                            utm_campaign: window.localStorage.getItem('utm_campaign'),
                            utm_term: window.localStorage.getItem('utm_term'),
                            utm_content: window.localStorage.getItem('utm_content'),
                        }

                        e.preventDefault();
                        mixpanel.track("cyber_says_click", {
                            distinct_id: uid || 'not_set',
                            ...utmData
                        });
                        window.location.replace(targetURL);
                    }}> <button className='px-[25px] py-[10px] saira gradient text-[20px]'>{languageData?.OfferButton}</button></a>
                    <p onClick={e => handleCopy()} className={`underline saira text-center text-[16px] text-white mt-2 duration-300 cursor-pointer ${isLinkCopied === true ? 'text-[#088CD9]' : 'text-white'}`}>{isLinkCopied === true ? languageData?.LinkCopied : languageData?.CopyLink}</p>
                </div>
            </div>
        </div>
    )
}

export default Slide