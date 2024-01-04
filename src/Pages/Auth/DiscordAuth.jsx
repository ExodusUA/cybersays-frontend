import React, { useEffect } from 'react'
import { discordUserAuth } from '../../Requests/auth';
import { useNavigate } from 'react-router-dom';
import { getUserCountry } from '../../Requests/utills';

function DiscordAuth() {

    const navigate = useNavigate()

    const queryParams = new URLSearchParams(window.location.search);
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    let refferalCode = queryParams.get('ref') || window.localStorage.getItem('ref');
    if (refferalCode === undefined || refferalCode === null) refferalCode = null

    useEffect(() => {

        const auth = async () => {
            try {
                let userCountry = await getUserData();
                const res = await discordUserAuth(accessToken, tokenType, userCountry.country, refferalCode)
                localStorage.setItem('token', res.data.token);
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }
        auth()
    }, [])

    const getUserData = async () => {
        try {
            const res = await getUserCountry();
            return res.data.Data
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='text-black saira'>Loading...</div>
    )
}

export default DiscordAuth