import React from 'react';
import LanguageSwitcher from './LangSwitch';
import { useLanguage } from '../../Helpers/Languages/LanguageContext';
import { useDesign } from '../../Helpers/Design/DesignContext'

function NewLanguageButton() {
    const [langOpen, setLangOpen] = React.useState(false);
    const { language } = useLanguage();

    const { design } = useDesign()

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
                <button onClick={() => {

                    setLangOpen(!langOpen)
                }} className={`bg-[#626161]  border-[2px]  ${design === '0' ? 'border-[#FFED63] rounded-[50px]' : 'border-[#A2DBF0] rounded-[14px] lg:rounded-[50px]'}  flex items-center gap-1 px-[8px] lg:px-[10px] py-[2px] `}>
                    <p className='text-white font-bold text-[14px] lg:text-[24px]'>{getLanguageName()}</p>
                    <img className='w-[16px] lg:w-[20px]' src="https://img.icons8.com/ios-filled/50/ffffff/expand-arrow--v1.png" alt="Arrow" />
                </button>
            </div>

            {langOpen && (
                <div className={`mt-0 absolute top-[35px] lg:top-[50px] p-2 border-[2px] ${design === '0' ? 'border-[#FFED63] ' : 'border-[#A2DBF0]'} bg-[#626161]  w-[85px] rounded-[12px] py-2 min-w-[50px]  left-0`}>
                    <LanguageSwitcher setIsLangOpen={setLangOpen} />
                </div>
            )}
        </div>
    );
}

export default NewLanguageButton;
