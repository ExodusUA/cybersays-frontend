import axios from "axios";

async function getUserCountry() {
    const response = await axios.get("https://geosvc.globalmailer.com/mygeoipinfo?json=1&corsdef=1");
    return response;
}

export { getUserCountry };