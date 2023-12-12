import axios from "axios";
import getToken from "../Helpers/getToken";


/* GET USER DATA */

async function getUserData() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/user', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response.data;

}

/* DELETE USER */

async function deleteUser() {
    const response = await axios.delete(process.env.REACT_APP_API_URL + '/user', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

/* CHANGE PAYMENT TYPE */

async function changePaymentType(payment) {
    const response = await axios.put(process.env.REACT_APP_API_URL + '/user/payment', {
        payment
    }, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}


export default { getUserData, deleteUser, changePaymentType };