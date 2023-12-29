import React from 'react'
import flag_usa from '../../images/flags/flag-en.png'
import flag_es from '../../images/flags/flag_es.png'
import flag_pt from '../../images/flags/flag-pt.png'
import { useLanguage } from '../../Helpers/Languages/LanguageContext'

function LanguageSwitcher({ setIsLangOpen }) {

    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {

        changeLanguage(newLanguage);
        setIsLangOpen(false);
    };

    return (
        <>
            <ul className='max-h-[50vh] sm:max-h-[60vh] '>
                <li className='flex gap-3 item-center mb-6 md:mb-2 cursor-pointer group' onClick={() => handleLanguageChange('en')}>
                    <img className='w-[22px] h-[22px] object-contain' src={flag_usa} alt="EN" />
                    <p className={`tracking-widest text-black text-[16px] duration-300 font-semibold`}>EN</p>
                </li>

                <li className='flex gap-3 item-center mb-6 md:mb-2 cursor-pointer group' onClick={() => handleLanguageChange('es')}>
                    <img className='w-[22px] h-[22px] object-contain' src={flag_es} alt="ES" />
                    <p className={`tracking-widest text-black text-[16px] duration-300 font-semibold`}>ES</p>
                </li>

                <li className='flex gap-3 item-center md:mb-2 cursor-pointer group' onClick={() => handleLanguageChange('pt')}>
                    <img className='w-[22px] h-[22px] object-contain' src={flag_pt} alt="PT" />
                    <p className={`tracking-widest text-black text-[16px] duration-300 font-semibold`}>PT</p>
                </li>

            </ul>

        </>
    )
}

export default LanguageSwitcher