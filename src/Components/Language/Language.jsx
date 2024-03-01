import React from 'react';
import LanguageSwitcher from './LangSwitch';
import { useLanguage } from '../../Helpers/Languages/LanguageContext';

function Language() {
    const [langOpen, setLangOpen] = React.useState(false);
    const { language } = useLanguage();

    function getLanguageName() {
        switch (language) {
            case 'en':
                return 'English';
            case 'es':
                return 'Spanish';
            case 'pt':
                return 'Portuguese';
            default:
                return 'English';
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => setLangOpen(!langOpen)} className='gradient-button flex items-center gap-2 px-[10px] lg:px-[25px] py-[5px] lg:py-[10px] mr-4'>
                    <p className='text-white font-bold text-[14px] md:text-[18px]'>{getLanguageName()}</p>
                    <img className='w-[20px]' src="https://img.icons8.com/ios-filled/50/ffffff/expand-arrow--v1.png" alt="Arrow" />
                </button>
            </div>

            {langOpen && (
                <div className='mt-0 absolute top-[50px] md:top-[60px]  bg-gray rounded-[12px] pb-2 lg:pb-0 pt-2 lg:pt-2 w-[140px] md:w-[155px] right-4 lg:right-0 md:left-0'>
                    <LanguageSwitcher setIsLangOpen={setLangOpen} />
                </div>
            )}
        </div>
    );
}

export default Language;
