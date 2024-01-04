import React from 'react'
import { Link } from 'react-router-dom'

function DiscordButton() {
    return (
        <div>
            <Link to={`https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_DISCORD_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_DISCORD_REDIRECT_URL}&scope=identify+guilds.join+email`}>
                <button className='px-4 py-2 bg-red-300 mt-4' type='button'>Discord Auth</button>
            </Link>

        </div>
    )
}

export default DiscordButton