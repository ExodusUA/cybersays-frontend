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
                <button onClick={() => setLangOpen(!langOpen)} className='gradient-button flex items-center gap-2 px-[25px] py-[10px]'>
                    <p className='text-white font-bold text-[18px]'>{getLanguageName()}</p>
                    <img className='w-[20px]' src="https://img.icons8.com/ios-filled/50/ffffff/expand-arrow--v1.png" alt="Arrow" />
                </button>
            </div>

            {langOpen && (
                <div className='mt-0 absolute top-[100px] pl-7 bg-gray w-full rounded-[12px] py-4 min-w-[200px] right-0 md:left-0'>
                    <LanguageSwitcher setIsLangOpen={setLangOpen} />
                </div>
            )}
        </div>
    );
}

export default Language;
