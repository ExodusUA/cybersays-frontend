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

async function withdrawPartner() {
  const res = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawPartner",
    {},
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
  return res
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

async function withdrawD24(pixKey, personCODE, country) {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawD24",
    { pixKey, personCODE, country },
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
  return response;
}

async function withdrawXoxoday(email) {
  const res = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/xoxoDayWithdraw",
    { email },
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
}

/* VERIFY OTP VISA */

async function verifyOTPVisa(code, email) {
  const res = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawVisaOtp",
    { code, email },
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
  return res;

}

async function withdrawVisa(fullname, email, country, birthday, lang) {

  const res = await axios.post(
    process.env.REACT_APP_API_URL + "/api/v1/user/withdrawVisa",
    { email, fullname, country, birthday, lang },
    {
      headers: {
        token: `${getToken()}`,
      },
    }
  );
  return res;
}

export { withdrawPaxum, withdrawPartner, withdrawPix, withdrawD24, withdrawXoxoday, verifyOTPVisa, withdrawVisa };

