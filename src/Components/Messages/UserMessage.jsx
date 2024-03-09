import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { useDesign } from '../../Helpers/Design/DesignContext'

function UserMessage({ message, owner, index }) {
    const { design } = useDesign()

    /* DELETE LATER */

    const [imageData, setImageData] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            const imageUrl = 'https://picsum.photos/300/300';
            try {
                // Отримання зображення за URL-адресою
                const response = await fetch(imageUrl);
                const blob = await response.blob();

                // Конвертувати зображення в формат base64
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64data = reader.result;
                    setImageData(base64data);
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error('Помилка під час отримання зображення: ', error);
            }
        };

        fetchImage();
    }, []);

    return (
        <div className={`${owner === true ? 'flex justify-end' : ''}`} key={index}>
            <div className={`bg-[#EAEAEA] bg-opacity-10 rounded-[20px] p-2 md:p-5 max-w-[280px] sm:max-w-[450px] w-full ${owner === true ? (design === '0' ? 'border-[#FFED63] my-1 border-[2px]' : 'my-1 border-[2px] border-[#A2DBF0]') : 'my-2'}`}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center max-w-[110px] md:max-w-[225px] w-full mr-4'>
                        <img className='rounded-full w-[32px] h-[32px] mr-2 object-cover' src={imageData} alt="avatar" />
                        <p className='saira text-[14px] md:text-[16px] font-semibold truncate '>{message.name.replace(/(.{2}).*?@/, '$1********@')}</p>
                    </div>
                    <p className='saira text-[14px] md:text-[16px] font-normal'>{moment(message.datetime).format('DD/MM hh:mm A')}</p>
                </div>
                <div className=''>
                    <p className='saira text-[12px] md:text-[14px] font-medium break-words' dangerouslySetInnerHTML={{
                        __html:
                            message.message.indexOf('[GIF]') !== -1 ? `<img class="w-full rounded-[20px] mt-2" src="${message.message.replaceAll('[GIF]', '')}" alt="gif" />` : message.message
            
                    }}></p>
                </div>
            </div>
        </div>
    )
}

export default UserMessage