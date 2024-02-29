import axios from "axios";


/* SOCIAL AUTH */

async function socialUserAuth(email, token, refferalCode, special, country) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/createBySocial', {
        email,
        token,
        refferalCode,
        special,
        country
    });
    return response.data;
}

/* OTP SENDING */

async function createUser(token, email, refferalCode, country) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/create', {
        token,
        email,
        refferalCode,
        country
    });
    return response;
}

/* OTP VERIFY */

async function otpVerify(token, code, refferalCode, email, special, country) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/create', {
        token,
        code,
        refferalCode,
        email,
        special,
        country
    });
    return response;
}

/*
async function checkTokenValidity(token) {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/auth/verify', {
        headers: {
            token: `${token}`
        }

    });
    return response;
}
*/

/* DISCORD AUTH */

async function discordUserAuth(access_token, type, country, refferalCode) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/createByDiscord', {
        access_token, type, country, refferalCode
    });
    return response;
}

export { socialUserAuth, createUser, otpVerify, discordUserAuth };