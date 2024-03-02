import React from 'react';
import LanguageSwitcher from './LangSwitch';
import { useLanguage } from '../../Helpers/Languages/LanguageContext';

function Language() {
    const [langOpen, setLangOpen] = React.useState(false);
    const { language } = useLanguage();

    function getLanguageName() {
        switch (language) {
            case 'en':
                return 'EN';
            case 'es':
                return 'ES';
            case 'pt':
                return 'PT';
            default:
                return 'EN';
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => setLangOpen(!langOpen)} className='gradient-tourToggle rounded-[8px] lg:rounded-[12px] flex items-center gap-2 px-[12px] lg:px-[25px] py-[7px] lg:py-[10px] mr-4'>
                    <p className='text-white font-bold text-[14px] md:text-[18px]'>{getLanguageName()}</p>
                    <img className='w-[20px]' src="https://img.icons8.com/ios-filled/50/ffffff/expand-arrow--v1.png" alt="Arrow" />
                </button>
            </div>

            {langOpen && (
                <div className='mt-0 absolute top-[40px] md:top-[55px]  bg-[#83869b] bg-opacity-20 backdrop-blur-lg rounded-[8px] lg:rounded-[12px] pb-2 lg:pb-0 pt-2 lg:pt-2 w-[75px] md:w-[107px] right-4 lg:right-0 md:left-0'>
                    <LanguageSwitcher setIsLangOpen={setLangOpen} />
                </div>
            )}
        </div>
    );
}

export default Language;
