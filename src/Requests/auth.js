import axios from "axios";


/* LOGIN */

async function authUser(email, token, auth, refferalCode) {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/login', {
        email,
        token,
        auth,
        refferalCode: refferalCode
    });
    return response.data;
}


export { authUser };