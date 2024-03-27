import React from 'react'
import flag_usa from '../../images/flags/flag-en.png'
import flag_es from '../../images/flags/flag_es.png'
import flag_pt from '../../images/flags/flag-pt.png'
import { useLanguage } from '../../Helpers/Languages/LanguageContext'
import mixpanel from 'mixpanel-browser'
import moengage from '@moengage/web-sdk';

function LanguageSwitcher({ setIsLangOpen }) {

    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {

        mixpanel.track('language_select', {
            current_language: language,
            new_language: newLanguage
        })
        moengage.track_event('language_select', {
            current_language: language,
            new_language: newLanguage
        })
        changeLanguage(newLanguage);
        setIsLangOpen(false);
    };

    return (
        <>
            <ul className='max-h-[50vh] sm:max-h-[60vh]  m-auto w-[70px]'>
                <li className='flex gap-3 item-center mb-2 md:mb-2 cursor-pointer group' onClick={() => handleLanguageChange('en')}>
                    <img className='w-[22px] h-[22px] object-contain ml-1' src={flag_usa} alt="EN" />
                    <p className={`tracking-wides text-[16px] duration-300 font-semibold`}>EN</p>
                </li>

                <li className='flex gap-3 item-center mb-2 md:mb-2 cursor-pointer group' onClick={() => handleLanguageChange('es')}>
                    <img className='w-[22px] h-[22px] object-contain ml-1' src={flag_es} alt="ES" />
                    <p className={`tracking-widest text-[16px] duration-300 font-semibold`}>ES</p>
                </li>

                <li className='flex gap-3 item-center cursor-pointer group' onClick={() => handleLanguageChange('pt')}>
                    <img className='w-[22px] h-[22px] object-contain ml-1' src={flag_pt} alt="PT" />
                    <p className={`tracking-widest text-[16px] duration-300 font-semibold`}>PT</p>
                </li>

            </ul>

        </>
    )
}

export default LanguageSwitcher