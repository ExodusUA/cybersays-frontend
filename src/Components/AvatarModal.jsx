import React, { useState, useEffect, useRef } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import imageIcon from '../images/CyberSaysPage/gridicons_image.png'
import userAPI from '../Requests/user'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function AvatarModal() {

    const inputRef = useRef()
    const [userData, setUserData] = useState(null)
    const queryClient = useQueryClient()
    const [selectedImage, setSelectedImage] = useState(null);

    useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await userAPI.getUserData()
            setUserData(res)

            if (res.avatar !== null) {
                setSelectedImage(res.avatar)
            }

            return res
        }
    })

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result;
                setSelectedImage(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const saveAvatar = async () => {
        try {
            const res = await userAPI.updateUserAvatar(inputRef.current.files[0])
            queryClient.invalidateQueries('userData')
            alert('Done!')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>

            <div>
                <p className='text-[18px] text-[#FFED63] text-center font-semibold mt-5'>Add 3 face images of you and two of your friends and we will create a personalized video you will be able to share with them!</p>
                {
                    selectedImage !== null && <img className='w-[140px] h-[140px] object-cover m-auto rounded-[20px] mt-5' src={selectedImage} alt="selectedImage" />
                }
                {
                    selectedImage === null
                        ? <button className='w-full bg-transparent  border-[2px] border-[#FFED63] rounded-[50px] text-white text-[18px] saira font-semibold py-2 flex justify-center' onClick={e => inputRef.current.click()}>
                            Attach image
                            <img className='w-[24px] h-[24px] ml-1' src={imageIcon} alt="imageIcon" />
                        </button>
                        : <p className=' px-4 py-2 text-center underline text-[16px] saira font-semibold cursor-pointer mt-1 flex justify-center' onClick={e => inputRef.current.click()}>
                            Replace image
                            <img className='w-[24px] h-[24px] ml-1' src={imageIcon} alt="imageIcon" />
                        </p>
                }

                <input className='w-full' accept='image/*' onChange={handleImageChange} ref={inputRef} type="file" hidden />

                <button onClick={e => saveAvatar()} className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2 disabled:opacity-60' disabled={selectedImage === null}>Send</button>
            </div>
        </div>
    )
}

export default AvatarModal
