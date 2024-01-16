import React, { useState, useEffect, useRef } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import imageIcon from '../../images/CyberSaysPage/gridicons_image.png'
import userAPI from '../../Requests/user'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function AvatarModal({ setOpenAvatar, saveAvatar, handleImageChange, selectedImage, setSelectedImage, inputRef  }) {

    

    
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 md:flex justify-center items-center'>
            <div className='max-w-[600px] w-full m-auto'>
                <div className='flex justify-end mb-6'>
                    <img onClick={e => setOpenAvatar(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>

                <div>
                    <p className='text-[18px] md:text-[24px] text-[#FFED63] text-center font-semibold mt-5'>Add 3 face images of you and two of your friends and we will create a personalized video you will be able to share with them!</p>
                    {
                        selectedImage !== null && <img className='w-[140px] md:w-[300px] h-[140px] md:h-[300px] object-cover m-auto rounded-[20px] mt-5' src={selectedImage} alt="selectedImage" />
                    }
                    {
                        selectedImage === null
                            ? <button className='max-w-[350px] m-auto mt-4 w-full bg-transparent  border-[2px] border-[#FFED63] rounded-[50px] text-white text-[18px] saira font-semibold py-2 flex justify-center' onClick={e => inputRef.current.click()}>
                                Attach image
                                <img className='w-[24px] h-[24px] ml-1' src={imageIcon} alt="imageIcon" />
                            </button>
                            : <p className=' px-4 py-2 text-center underline text-[16px] saira font-semibold cursor-pointer mt-1 flex justify-center' onClick={e => inputRef.current.click()}>
                                Replace image
                                <img className='w-[24px] h-[24px] ml-1' src={imageIcon} alt="imageIcon" />
                            </p>
                    }

                    <input className='w-full' accept='image/*' onChange={handleImageChange} ref={inputRef} type="file" hidden />
                    <div className='flex justify-center'>
                        <button onClick={e => saveAvatar()} className='max-w-[350px] m-auto mt-4 w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2 disabled:opacity-60' disabled={selectedImage === null}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarModal
