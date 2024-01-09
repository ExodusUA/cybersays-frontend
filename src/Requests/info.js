import axios from "axios";
import getToken from "../Helpers/getToken";

async function getLeaderboardData() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/info/leaderboard', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

async function getInfoData() {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/info/main', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

export default { getLeaderboardData, getInfoData };