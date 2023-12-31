import React from 'react';
import LanguageSwitcher from './LangSwitch';
import { useLanguage } from '../../Helpers/Languages/LanguageContext';

function NewLanguageButton() {
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
        <div className=' relative'>
            <div>
                <button onClick={() => setLangOpen(!langOpen)} className='bg-[#626161]  border-[2px] border-[#FFED63] rounded-[50px] flex items-center gap-2 px-[20px] py-[6px] '>
                    <p className='text-white font-bold text-[18px]'>{getLanguageName()}</p>
                    <img className='w-[20px]' src="https://img.icons8.com/ios-filled/50/ffffff/expand-arrow--v1.png" alt="Arrow" />
                </button>
            </div>

            {langOpen && (
                <div className='mt-0 absolute top-[50px] p-4 border-[2px] border-[#FFED63] bg-white w-[100px] rounded-[12px] py-4 min-w-[50px]  left-0'>
                    <LanguageSwitcher setIsLangOpen={setLangOpen} />
                </div>
            )}
        </div>
    );
}

export default NewLanguageButton;
