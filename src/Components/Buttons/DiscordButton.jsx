import React from 'react'
import { Link } from 'react-router-dom'
import discord from '../../images/landing/icons/discord.png'

function DiscordButton({ languageData }) {
    return (
        <div className='w-[50%] lg:w-full'>
            <Link to={`https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_DISCORD_REDIRECT_URL}&scope=identify+guilds.join+email`}>
                <button className='w-full flex gap-2 lg:gap-4   bg-[#1E1E1E] px-1.5 lg:px-3 py-2  rounded-[8px] lg:rounded-[12px] items-center justify-center' type='button'>
                    <img className='w-4 lg:w-6 h-4 lg:h-6' src={discord} alt="discord" />
                    <p className='text-[12px] lg:text-[14px] poppins text-[#888888] font-semibold text-left saira' dangerouslySetInnerHTML={{ __html: languageData?.authDiscord + ' <span class="saira" style="color:#FFFFFF">Discord</span>' }} />
                </button>
            </Link>

        </div>
    )
}

export default DiscordButton