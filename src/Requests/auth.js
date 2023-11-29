import axios from "axios";


/* SOCIAL AUTH */

async function socialUserAuth(email, token, refferalCode) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/social', {
        email,
        token,
        refferalCode: refferalCode
    });
    return response.data;
}

/* OTP SENDING */

async function otpSending(token, email) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/otp', {
        token,
        email
    });
    return response;
}

/* OTP VERIFY */

async function otpVerify(token, code) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/verify', {
        token,
        code
    });
    return response;
}

/* REGISTER USER */

async function registerUser(token, email, password, username, refferalCode) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/register', {
        token,
        email,
        password,
        username,
        refferalCode
    });
    return response;

}


export { socialUserAuth, otpSending, otpVerify, registerUser };