import React from "react";
import { changeTransactionStatusD24, changeXoxodayStatus, changePartnerStatus, processVisaWithdraw } from "../../Requests/admin";
import userAPI from "../../Requests/user";
import { toast } from "react-toastify";

function TableRow({ transaction, invalidateQueries, index }) {
  const transactionStatusD24 = async (id, status) => {
    try {
      const res = await changeTransactionStatusD24(id, status);
      toast.success("Transaction status changed successfully");
    } catch (error) {
      toast.error("Error changing transaction status: " + error.response.data.message);
    }
    //invalidateQueries();
  };

  const transactionStatusXoxoday = async (id, status) => {
    try {
      const res = await changeXoxodayStatus(id, status);
      toast.success("Transaction status changed successfully");
    } catch (error) {
      toast.error("Error changing transaction status: " + error.response.data.message);
    }
    //invalidateQueries();
  };

  const transactionStatusRoyalPage = async (id, status) => {
    try {
      const res = await userAPI.processPixWithdraw(id, status);
      toast.success("Transaction status changed successfully");
    } catch (error) {
      toast.error("Error changing transaction status: " + error.response.data.message);
    }
    //invalidateQueries();
  };

  const transactionStatusPartner = async (id, status) => {
    try {
      const res = await changePartnerStatus(id, status);
      toast.success("Transaction status changed successfully");
    } catch (error) {
      toast.error("Error changing transaction status: " + error.response.data.message);
    }
    //invalidateQueries();
  };

  const transactionStatusVisa = async (id, status) => {
    try {
      const res = await processVisaWithdraw(id, status);
      toast.success("Transaction status changed successfully");
    } catch (error) {
      toast.error("Error changing transaction status: " + error.response.data.message);
    }
    //invalidateQueries();
  };

  const getStatusName = (status) => {
    switch (status) {
      case 1:
        return "Processing";
      case 2:
        return "Pending";
      case 3:
        return "Approved";
      case 4:
        return "Declined";
    }
  };

  return (
    <tr key={index}>
      <td class="saira px-4 py-3 text-black">{transaction.transactionId}</td>
      <td class="saira px-4 py-3 text-black">{transaction.email}</td>
      <td class="saira px-4 py-3 text-black">{transaction.userID}</td>
      <td class="saira px-4 py-3 text-black">{transaction.amount}</td>

      <td class="saira px-4 py-3 text-black">{transaction.datetime}</td>
      <td class="saira px-4 py-3 text-black">{transaction.type}</td>
      <td class="saira px-4 py-3 text-black">{getStatusName(transaction.status)}</td>
      <td class="px-4 py-3">
        {transaction.status === 3 || transaction.status === 4 ? (
          <div className="text-black">-</div>
        ) : (
          <>
            <button
              onClick={() => {
                transaction.type === "Xoxoday"
                  ? transactionStatusXoxoday(transaction.id, 3)
                  : transaction.type === "RoyalPag"
                    ? transactionStatusRoyalPage(transaction.id, 3)
                    : transaction.type === "Partner"
                      ? transactionStatusPartner(transaction.id, 3)
                      : transaction.type === "Visa"
                        ? transactionStatusVisa(transaction.id, 3)
                        : transactionStatusD24(transaction.id, 3);
              }}
              class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Approve
            </button>
            <button
              onClick={() => {
                transaction.type === "Xoxoday"
                  ? transactionStatusXoxoday(transaction.id, 4)
                  : transaction.type === "RoyalPag"
                    ? transactionStatusRoyalPage(transaction.id, 4)
                    : transaction.type === "Partner"
                      ? transactionStatusPartner(transaction.id, 4)
                      : transaction.type === "Visa"
                        ? transactionStatusVisa(transaction.id, 4)
                        : transactionStatusD24(transaction.id, 4);
              }}
              class="ml-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              Decline
            </button>
          </>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
