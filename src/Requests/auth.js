import axios from "axios";


/* SOCIAL AUTH */

async function socialUserAuth(email, token, refferalCode, special, country, lang) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/createBySocial', {
        email,
        token,
        refferalCode,
        special,
        country,
        lang
    });
    return response.data;
}

/* OTP SENDING */

async function createUser(token, email, refferalCode, country, lang, special) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/addUserRequest', {
        token,
        email,
        refferalCode,
        country,
        lang,
        special,
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

/* PROCESS USER REGISTRATION */

async function processUserRegistration(token, lang) {
    const res = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/addUser', {
        token, lang
    });
    return res
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

async function discordUserAuth(access_token, type, country, refferalCode, lang, special) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/createByDiscord', {
        access_token, type, country, refferalCode, lang, special,
    });
    return response;
}

export { socialUserAuth, createUser, otpVerify, discordUserAuth, processUserRegistration };