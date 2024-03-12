import axios from "axios";
import getToken from "../Helpers/getToken";

async function withdrawPaxum({ paxumID }) {
  const res = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawPaxum",
    { paxumID },
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
}

async function withdrawImLive() {
  const res = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawImlive",
    {},
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
}

async function withdrawPix(pixKey, personCODE, email) {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawPix",
    { pixKey, personCODE, email },
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
  return response;
}

async function withdrawD24(pixKey, personCODE, email) {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawD24",
    { pixKey, personCODE },
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
  return response;
}

export { withdrawPaxum, withdrawImLive, withdrawPix, withdrawD24 };
