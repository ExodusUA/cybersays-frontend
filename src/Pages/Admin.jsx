import React, { useEffect, useState } from "react";
import HeaderProfile from "../Components/HeaderProfile";
import TableComponent from "./Admin/Table";
import { getTransactions, getTransactionsD24, getXoxodayTransaction, getPartnerTransactions, getVisaTransactions } from "../Requests/admin";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonsSection from "./Admin/ButtonsSection";

function Admin() {
  const queryClient = useQueryClient();

  const [transactions, setTransactions] = useState([]);
  const [selectedType, setSelectedType] = useState("RoyalPag");

  useEffect(() => {
    setTransactions([]);
    if (selectedType === "RoyalPag") {
      fetchRoyalPageTransactions();
    } else if (selectedType === "D24") {
      fetchTransactionsD24();
    } else if (selectedType === "Xoxoday") {
      fetchXoxodayTransaction();
    } else if (selectedType === "Partner") {
      fetchPartnerTransactions();
    } else if (selectedType === "Visa") {
      fetchVisaTransactions();
    }
  }, [selectedType]);

  const fetchRoyalPageTransactions = async () => {
    const res = await getTransactions();
    res.data = res.data.map((transaction) => {
      transaction.type = "RoyalPag";
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
    return res;
  };

  const fetchTransactionsD24 = async () => {
    const res = await getTransactionsD24();
    res.data = res.data.map((transaction) => {
      transaction.type = transaction.personCODE ? "PIX (D24)" : "D24";
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
    return res;
  };

  const fetchXoxodayTransaction = async () => {
    const res = await getXoxodayTransaction();

    if (res.data === null) return;

    res.data = res.data.map((transaction) => {
      transaction.type = "Xoxoday";
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
  };

  const fetchPartnerTransactions = async () => {
    const res = await getPartnerTransactions();
    res.data = res.data.map((transaction) => {
      transaction.type = "Partner";
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
  };

  const fetchVisaTransactions = async () => {
    const res = await getVisaTransactions();
    res.data = res.data.map((transaction) => {
      transaction.type = "Visa";
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
  };

  const handleSearch = (text) => {
    if (text === "") {
      if (selectedType === "RoyalPag") {
        fetchRoyalPageTransactions();
      } else if (selectedType === "D24") {
        fetchTransactionsD24();
      } else if (selectedType === "Xoxoday") {
        fetchXoxodayTransaction();
      } else if (selectedType === "Partner") {
        fetchPartnerTransactions();
      } else if (selectedType === "Visa") {
        fetchVisaTransactions();
      }
      return;
    }
    const filteredData = transactions.filter((transaction) => {
      const idString = String(transaction.transactionId); // Конвертуємо id у рядок
      return transaction.email.toLowerCase().includes(text.toLowerCase()) || idString.toLowerCase().includes(text.toLowerCase());
    });
    setTransactions(filteredData);
  };

  return (
    <div className="max-h-screen overflow-y-auto">
      <HeaderProfile />
      <div className="dark-text m-auto w-full max-w-[1440px] pt-8">
        <ButtonsSection setSelectedType={setSelectedType} selectedType={selectedType} handleSearch={handleSearch} />
        <h1 className="saira text-[26px] text-black/80">
          <span className="saira font-bold text-black/80">{selectedType}</span> transactions
        </h1>
        <TableComponent data={transactions.reverse()} />
      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} draggable theme="light" />
    </div>
  );
}

export default Admin;
