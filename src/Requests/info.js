import axios from "axios";
import getToken from "../Helpers/getToken";

async function getLeaderboardData() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/info/leaderboard', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

async function getInfoData() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/info/main', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}


async function getFeedData() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/info/livefeed', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

export default { getLeaderboardData, getInfoData, getFeedData };