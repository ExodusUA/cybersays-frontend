import React from 'react';
import LanguageSwitcher from './LangSwitch';
import { useLanguage } from '../../Helpers/Languages/LanguageContext';
import flag_usa from '../../images/flags/flag-en.png'
import flag_es from '../../images/flags/flag_es.png'
import flag_pt from '../../images/flags/flag-pt.png'

function Language() {
    const [langOpen, setLangOpen] = React.useState(false);
    const { language } = useLanguage();

    function getLanguageInfo() {
        switch (language) {
            case 'en':
                return { name: 'EN', flag: flag_usa };
            case 'es':
                return { name: 'ES', flag: flag_es };
            case 'pt':
                return { name: 'PT', flag: flag_pt };
            default:
                return { name: 'EN', flag: flag_usa };
        }
    }
    const { name, flag } = getLanguageInfo();
    return (
        <div>
            <div>
                <button onClick={() => setLangOpen(!langOpen)} className='gradient-tourToggle langaugeBtnShadow outline-none rounded-[8px] lg:rounded-[12px] flex items-center gap-2 px-[12px] lg:px-[25px] py-[7px] lg:py-[10px] mr-4'>

                    <p className='text-white font-bold text-[14px] md:text-[16px]'>{name}</p>
                    <img src={flag} alt={name} className="w-[26px] h-[18px]" />
                    {
                        langOpen
                            ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17L12 7L22 17" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 7L12 17L2 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                    }
                </button>
            </div>

            {langOpen && (
                <div className='mt-0 absolute top-[43px] md:top-[55px] border-[1px] border-[#DDBBFD] bg-[#83869b] bg-opacity-20 backdrop-blur-lg rounded-[8px] lg:rounded-[12px] pb-2 lg:pb-0 pt-2 lg:pt-2 w-[112px] md:w-[141px] right-4 lg:right-0 md:left-0'>
                    <LanguageSwitcher setIsLangOpen={setLangOpen} />
                </div>
            )}
        </div>
    );
}

export default Language;
