import axios from "axios";
import getToken from "../Helpers/getToken";

async function searchGif(text) {
    const response = await axios.get(process.env.REACT_APP_CHAT_URL + '/chat/giphy/gifs/search?search=' + text, {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

async function getTrendingGifs() {
    const response = await axios.get(process.env.REACT_APP_CHAT_URL + '/chat/giphy/gifs/trending', {
        headers: {
            token: `${getToken()}`
        }
    });
    return response;
}

export { searchGif, getTrendingGifs };