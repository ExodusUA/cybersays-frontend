import React from 'react'
import moment from 'moment';
import { useDesign } from '../../Helpers/Design/DesignContext'

function UserMessage({ message, owner, index }) {
    const { design } = useDesign()

    return (
        <div className={`${owner === true ? 'flex justify-end' : ''}`} key={index}>
            <div className={`bg-[#EAEAEA] bg-opacity-10 rounded-[20px] p-2 md:p-5 max-w-[280px] sm:max-w-[450px] w-full ${owner === true ? (design === '0' ? 'border-[#FFED63] my-1 border-[2px]' : 'my-1 border-[2px] border-[#A2DBF0]') : 'my-2'}`}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center max-w-[110px] md:max-w-[225px] w-full mr-4'>
                        <img className='rounded-full w-[32px] h-[32px] mr-2 object-cover' src={'https://i.pinimg.com/736x/99/c2/d5/99c2d588c483065eed6a676304f6e5da.jpg'} alt="avatar" />
                        <p className='saira text-[14px] md:text-[16px] font-semibold truncate '>{message.name.replace(/(.{2}).*?@/, '$1********@')}</p>
                    </div>
                    <p className='saira text-[14px] md:text-[16px] font-normal'>{moment(message.datetime).format('DD/MM hh:mm A')}</p>
                </div>
                <div className=''>
                    <p className='saira text-[12px] md:text-[14px] font-medium break-words' dangerouslySetInnerHTML={{ __html: message.message }}></p>
                </div>
            </div>
        </div>
    )
}

export default UserMessage