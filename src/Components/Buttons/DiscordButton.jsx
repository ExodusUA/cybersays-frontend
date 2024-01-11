import React from 'react'
import { Link } from 'react-router-dom'
import discord from '../../images/landing/icons/discord.png'

function DiscordButton({ languageData }) {
    return (
        <div>
            <Link to={`https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_DISCORD_REDIRECT_URL}&scope=identify+guilds.join+email`}>
                <button className='w-full flex gap-4 bg-white py-3 rounded-[12px] items-center justify-center mt-4' type='button'>
                    <img className='w-6 h-6' src={discord} alt="discord" />
                    <p className='text-[16px] poppins text-[#8E8E8E] font-semibold text-left saira' dangerouslySetInnerHTML={{ __html: languageData?.authDiscord + ' <span class="saira" style="color:#282B54">Discord</span>' }} />
                </button>
            </Link>

        </div>
    )
}

export default DiscordButton