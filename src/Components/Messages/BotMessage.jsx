import React from 'react'
import moment from 'moment';

function BotMessage({ message, owner, index }) {
    return (
        <div key={index}>
            <div className={`gradient-tourToggle  rounded-[20px] p-2 md:p-5 max-w-[280px] sm:max-w-[450px] w-full`}>
                <div className='flex justify-between items-center'>
                    <p>THIS IS THE BOT MESSAGE</p>
                    <div className='flex items-center max-w-[110px] md:max-w-[225px] w-full mr-4'>
                        <img className='rounded-full w-[32px] h-[32px] mr-2 object-cover' src={'https://assets.mycast.io/characters/joel-miller-1385861-normal.jpg?1610655293'} alt="avatar" />
                        <p className='saira text-[14px] md:text-[16px] font-semibold truncate text-black'>{message.name.replace(/(.{2}).*?@/, '$1********@')}</p>
                    </div>
                    <p className='saira text-[14px] md:text-[16px] font-normal text-black'>{moment(message.datetime).format('DD/MM hh:mm A')}</p>
                </div>
                <div className=''>
                    <p className='saira text-[12px] md:text-[14px] font-medium break-words text-black' dangerouslySetInnerHTML={{ __html: message.message }}></p>
                </div>
            </div>
        </div>
    )
}

export default BotMessage