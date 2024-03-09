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

export { withdrawPaxum, withdrawImLive };
