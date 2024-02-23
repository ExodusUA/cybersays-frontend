import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import win from '../images/NewDesign/win.png'
import seven from '../images/NewDesign/777.png'
import point1 from '../images/NewDesign/newPoint1.png'
import point2 from '../images/NewDesign/newPoint2.png'
import point3 from '../images/NewDesign/newPoint3.png'


function ImageModals({ setOpen, languageData, selectedImage, setSelectedImage }) {

    const { design } = useDesign()


    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 lg:flex'>
            <div className='max-w-[600px] m-auto relative'>


            <div className='flex justify-end md:my-4 lg:mb-10 lg:absolute right-0 top-[-70px]'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                {selectedImage && (
                      <img className='w-full lg:w-[600px] rounded-[14px] mt-2 lg:mt-0' src={selectedImage} alt="" />
                )}
              
            </div>
        </div>
    )
}

export default ImageModals
