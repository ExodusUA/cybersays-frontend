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

    const response = await axios.delete(process.env.REACT_APP_API_URL + '/api/v1/user/delete/' + decodedToken.userId, {
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

    formData.append('file', avatar);

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
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/referrals', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

/* GET TRANSACTIONS */

async function getTransactions() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/transactions', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;

}

/* GET TICKETS & POINTS */

async function getTicketsAndPoints() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/user/tickets-points', {
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

export default { getUserData, deleteUser, changePaymentType, updateUserAvatar, getReferralsList, getTransactions, getTicketsAndPoints, sendEmail };