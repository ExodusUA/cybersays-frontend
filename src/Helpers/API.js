import axios from 'axios'

async function getUserCountry() {
    const res = await axios.get('https://geosvc.globalmailer.com/mygeoipinfo?json=1&corsdef=1')
    return res.data.Data.country
}

export default getUserCountry