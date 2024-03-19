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

async function changeTransactionStatusD24(id, status) {
  const res = await axios.post(process.env.REACT_APP_API_URL + "/api/v1/user/processD24Withdraw", {
    id,
    status,
  }, {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res
}

/* D24 */

async function getTransactionsD24() {
  const res = await axios.get(process.env.REACT_APP_API_URL + "/api/v1/user/getD24WithdrawRecords", {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res
}

/* XOXODAY */

async function getXoxodayTransaction() {
  const res = await axios.get(process.env.REACT_APP_API_URL + "/api/v1/user/xoxoDayWithdrawRecords", {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res
}

async function changeXoxodayStatus(id, status) {
  const res = await axios.post(process.env.REACT_APP_API_URL + "/api/v1/user/processXoxoDayWithdraw", {
    id,
    status,
  }, {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res
}

/* PARTHER */

async function getPartnerTransactions() {
  const res = await axios.get(process.env.REACT_APP_API_URL + "/api/v1/user/getWithdrawPartnerRecords", {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res
}

async function changePartnerStatus(id, status) {
  const res = await axios.post(process.env.REACT_APP_API_URL + "/api/v1/user/processPartnerWithdraw", {
    id,
    status,
  }, {
    headers: {
      token: `${getToken()}`,
    },
  })
  return res
}

export { getTransactions, changeTransactionStatusD24, getTransactionsD24, getXoxodayTransaction, changeXoxodayStatus, getPartnerTransactions, changePartnerStatus };
