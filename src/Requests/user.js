import axios from "axios";
import getToken from "../Helpers/getToken";
import { jwtDecode } from "jwt-decode";


/* GET USER DATA */

async function getUserData() {

    let token = getToken();
    let decodedToken = jwtDecode(token);

    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/id/' + decodedToken.userId, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response.data;

}

/* DELETE USER */

async function deleteUser() {

    let token = getToken();
    let decodedToken = jwtDecode(token);

    const response = await axios.delete(process.env.REACT_APP_API_URL + '/api/v1/user/delete/' + decodedToken.id, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

/* CHANGE PAYMENT TYPE */

async function changePaymentType(payment) {
    const response = await axios.put(process.env.REACT_APP_API_URL + '/api/v1/user/payment', {
        payment
    }, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

/* UPDATE USER AVATAR */

async function updateUserAvatar(avatar) {
    let formData = new FormData();

    formData.append('avatar', avatar);

    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/avatar', formData, {
        headers: {
            token: `${getToken()}`,
            'Content-Type': 'multipart/form-data'
        }
    });

    return response;
}

/* GET REFERRALS LIST */

async function getReferralsList() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/getUserReferrals', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

/* GET TRANSACTIONS */

async function getTransactions() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/getTransactions', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;

}

/* GET TICKETS & POINTS */

async function getTickets() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/getTickets', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;

}

async function getPoints() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/getUserPoints', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;

}

/* SEND EMAIL */

async function sendEmail(email, userID) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/sendEmail', {
        email, userID
    }, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

async function getModeratorData(password, userID) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/chat/moderator/password', { password, userID }, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

async function getPDF() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/pdf', {
        headers: {
            token: `${getToken()}`,
            responseType: 'blob'
        }
    });
    return response;

}

async function generateOTP(email) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/generateWithdrawOtp', { email }, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

async function verifyOTP(code, email) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/checkWithdrawOtp', { code, email }, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;

}

async function createPixWithdraw(pixKey, personCODE, email) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/user/withdraw', { pixKey, personCODE, email }, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;

}

export default { getUserData, deleteUser, changePaymentType, updateUserAvatar, getReferralsList, getTransactions, getTickets, getPoints, sendEmail, getModeratorData, getPDF, generateOTP, verifyOTP, createPixWithdraw };