import React from "react";
import { changeTransactionStatusD24, changeXoxodayStatus } from "../../Requests/admin";
import userAPI from "../../Requests/user";
import { toast } from "react-toastify";
import TableRow from "./TableRow";

function TableComponent({ data, invalidateQueries }) {
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
    // invalidateQueries();
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
    <table class="mt-4 min-w-full overflow-hidden rounded-lg bg-white">
      <thead class="bg-gray-800 saira text-black">
        <tr>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">ID</th>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">Email</th>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">User ID</th>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">Amount</th>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">Date</th>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">Withdraw Method</th>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">Status</th>
          <th class="saira px-4 py-3 text-left text-sm font-semibold uppercase text-black">Actions</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        {data.length > 0 ? (
          data.map((transaction, index) => <TableRow key={index} transaction={transaction} invalidateQueries={invalidateQueries} />)
        ) : (
          <tr>
            <td colSpan="8" class="saira px-4 py-3 text-center text-black">
              No transactions found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableComponent;
