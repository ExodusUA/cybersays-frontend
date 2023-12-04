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


export default { getUserData, deleteUser };