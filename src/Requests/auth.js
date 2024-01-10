import axios from "axios";


/* SOCIAL AUTH */

async function socialUserAuth(email, token, refferalCode, special, country) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/social', {
        email,
        token,
        refferalCode,
        special,
        country
    });
    return response.data;
}

/* OTP SENDING */

async function otpSending(token, email, refferalCode) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/otp', {
        token,
        email,
        refferalCode
    });
    return response;
}

/* OTP VERIFY */

async function otpVerify(token, code, refferalCode, email, special, country) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/verify', {
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
    const response = await axios.get(process.env.REACT_APP_API_URL + '/auth/verify', {
        headers: {
            token: `${token}`
        }

    });
    return response;
}
*/

/* DISCORD AUTH */

async function discordUserAuth(access_token, type, country, refferalCode) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/discord', {
        access_token, type, country, refferalCode
    });
    return response;
}

export { socialUserAuth, otpSending, otpVerify, discordUserAuth };