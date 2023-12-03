import React from 'react';
import logoCyber from '../images/CyberSaysLogo.png'
import coin from '../images/coin.png'
var mixpanel = require('mixpanel-browser');

function FinishSteps({ languageData, targetURL, uid }) {

    const [isLinkCopied, setIsLinkCopied] = React.useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(targetURL);
        setIsLinkCopied(true);
        setTimeout(() => {
            setIsLinkCopied(false);
        }, 3000);
    }
    console.log(languageData.listTexts[0])
    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>

            <div className='max-w-[400px] mx-3  m-auto mt-[20px] md:mt-[50px]  rounded-[14px]  '>
                <div className='flex items-center gap-3'>
                    <img className=' w-[95px] mb-[-5px]' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[18px]'>finish the 4 <span className='text-gradient'>steps</span> 🎉</p>
                </div>

                <div className='gradient-line w-full h-[2px] mt-2 mb-3'></div>
                <p className=' font-normal saira text-[16px] text-center mb-4'>A '✅' will appear for each step <span className='font-bold saira'>completed.</span></p>
                <ul>
                    {
                        languageData?.listTexts.map((item, index) => (

                            <div key={index} className='flex items-center justify-between gap-1 bg-gray/25 rounded-[14px] p-3 mb-2 mx-2'>
                                <p className='text-white text-[18px] font-regular saira flex items-center '>
                                    <div className='border-[1px] border-[#088CD9] bg-gray/25 !rounded-full gradient-number p-2 w-[32px] h-[32px] flex items-center justify-center'>{index + 1}</div>
                                    <span className='mr-1 '> </span>  {item}✅</p>

                            </div>

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
                            e.preventDefault();
                            mixpanel.track("cyber_says_click", {
                                distinct_id: uid || 'not_set'
                            });
                            window.location.replace(targetURL);
                        }}> <button className='px-[25px] py-[10px] saira gradient text-[20px]'>{languageData?.OfferButton}</button></a>
                        <p onClick={e => handleCopy()} className={`underline saira text-center text-[16px] text-white mt-2 duration-300 cursor-pointer ${isLinkCopied === true ? 'text-[#088CD9]' : 'text-white'}`}>{isLinkCopied === true ? languageData?.LinkCopied : languageData?.CopyLink}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinishSteps;
