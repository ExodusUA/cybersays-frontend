import React from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'

function About({ user, setOpen, languageData  }) {

    const { design } = useDesign()

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>
                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                <h1 className='text-[32px] text-white text-center '>{languageData?.aboutModalTitle}</h1>
                <div className='max-h-[70vh] overflow-auto mt-4'>
                    <p className='text-justify saira text-[16px]'>{languageData?.aboutModalDesc1}</p>
                    <p className='text-justify saira text-[16px]'>{languageData?.aboutModalDesc2}</p>
                    <p className='text-justify saira text-[16px]'>{languageData?.aboutModalDesc3}</p>
                    <p className='text-justify saira text-[16px]'>{languageData?.aboutModalDesc4}</p>
                </div>
            </div>
        </div>
    )
}

export default About
