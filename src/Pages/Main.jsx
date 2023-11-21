import React from 'react'
import logotype from '../images/logotype.svg'
import down from '../images/down.svg'
import hero from '../images/hero.png'
import green from '../images/green.svg'
import netflix from '../images/netflix.png'
import coin from '../images/coin.svg'
import purple from '../images/purple.png'
import Language from '../Components/Language/Language'
import { useLanguage } from '../Helpers/Languages/LanguageContext'
import { useEffect } from 'react'

function Main() {

    const { language } = useLanguage();
    const [languageData, setLanguageData] = React.useState(null);
    const [isLinkCopied, setIsLinkCopied] = React.useState(false);

    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            const anchorElement = document.getElementById(anchorName);

            if (anchorElement) {
                anchorElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const languages = {
        en: require('../Helpers/Languages/translations/en.json'),
        pt: require('../Helpers/Languages/translations/pt.json'),
        es: require('../Helpers/Languages/translations/es.json'),
    };


    useEffect(() => {
        let langData = languages[language];
        console.log(langData)
        setLanguageData(langData);
    }, [language]);

    function handleCopy() {
        navigator.clipboard.writeText('https://www.treats.com/offer/1234567');
        setIsLinkCopied(true);
        setTimeout(() => {
            setIsLinkCopied(false);
        }, 3000);
    }

    return (
        <div className='bg-dark relative'>
            <img className='left-0 top-0 absolute select-none' src={green} alt="Green" />

            <div className='max-w-[1440px] m-auto w-[90%] relative z-10 h-screen'>

                <div className='flex md:justify-center py-5 relative'>
                    <img src={logotype} className='w-[128px]' alt="Logotype" />

                    <div className='absolute right-0 top-0 flex items-center align-middle h-full z-20'>
                        <Language />
                    </div>
                </div>

                <div className='lg:flex justify-between items-center'>
                    <div className='sm:min-w-[600px]'>
                        <h1 className='text-[28px] sm:text-[64px] md:text-[72px] font-bold' dangerouslySetInnerHTML={{ __html: languageData?.HeaderTitle }}></h1>
                        <div className='w-full h-[2px] gradient-line mt-[40px] mb-[50px]'></div>

                        <div className='max-w-[1135px] p-5 m-auto mt-[20px] md:mt-[50px] bg-gray/25 rounded-[14px] border-[1px] border-[#088CD9]'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[80px] h-[80px]' src={netflix} alt="Image" />
                                <p className='text-white font-bold text-[18px]'>{languageData?.OfferTitle}</p>
                            </div>

                            <div className='gradient-line w-full h-[2px] my-4'></div>

                            <p className='text-white text-[14px] font-regular saira h-[70px] mb-6 md:mb-0'>{languageData?.OfferDescription}</p>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <div className='flex gap-2'>
                                        <img src={coin} alt="Coin" />
                                        <p className='font-bold text-[18px] text-white'>0.33</p>

                                    </div>
                                    <p className='saira text-[16px]'>{languageData?.TreatCoins}</p>
                                </div>

                                <div>
                                    <button className='px-[25px] py-[10px] saira gradient'>{languageData?.OfferButton}</button>
                                    <p onClick={e => handleCopy()} className={`underline saira text-center text-[12px] text-white mt-2 duration-300 cursor-pointer ${isLinkCopied === true ? 'text-[#088CD9]' : 'text-white'}`}>{isLinkCopied === true ? languageData?.LinkCopied : languageData?.CopyLink}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <img className='left-0 top-0 select-none pointer-events-none hidden lg:block' src={hero} alt="Hero" />
                    </div>
                </div>
            </div>
            <img className='absolute bottom-0 left-0 ' src={purple} alt="Purple" />
        </div>
    )
}

export default Main