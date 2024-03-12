import axios from "axios";
import getToken from "../Helpers/getToken";

async function getTransactions() {
  const res = await axios.get(process.env.REACT_APP_API_URL + "/api/v1/user/getPointsWithdrawRecords", {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res
}

async function changeTransactionStatus(id, status) {
  const res = await axios.post(process.env.REACT_APP_API_URL + "/api/v1/user/proccessPointsWithdraw", {
    id,
    status,
  }, {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res

}

export { getTransactions, changeTransactionStatus };
