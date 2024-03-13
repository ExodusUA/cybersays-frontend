import React, { useEffect, useState } from 'react';
import HeaderProfile from '../Components/HeaderProfile';
import TableComponent from './Admin/Table';
import { getTransactions, getTransactionsD24, getXoxodayTransaction } from '../Requests/admin';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {

  const queryClient = useQueryClient();

  //page login & password protected

  useEffect(() => {
    /*
    const username = prompt('Enter username');
    const password = prompt('Enter password');

    // You can adjust your authentication logic here
    if (username !== 'admin' || password !== 'admin') {
        window.location.href = '/';
    }
*/
    fetchPaxumTransactions()
    fetchTransactionsD24()
    fetchXoxodayTransaction()
  }, []);

  const [transactions, setTransactions] = useState([]);

  const fetchPaxumTransactions = async () => {
    const res = await getTransactions();
    res.data = res.data.map((transaction) => {
      transaction.type = 'Paxum'
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
    return res
  }

  const fetchTransactionsD24 = async () => {
    const res = await getTransactionsD24();
    res.data = res.data.map((transaction) => {
      transaction.type = transaction.personCODE ? "PIX (D24)" : "D24";
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
    return res
  }

  const fetchXoxodayTransaction = async () => {
    const res = await getXoxodayTransaction()

    res.data = res.data.map((transaction) => {
      transaction.type = 'Xoxoday'
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    })
  }

  const invalidateQueries = () => {
    setTransactions([]);
    fetchPaxumTransactions()
    fetchXoxodayTransaction()
    fetchTransactionsD24()
  }

  return (

    <div className='overflow-y-auto max-h-screen'>
      <HeaderProfile />

      <div className='pt-8 max-w-[1440px] m-auto w-full dark-text'>
        <h1 className='text-black saira text-[26px]'>Latest transactions</h1>

        <TableComponent data={transactions.reverse()} invalidateQueries={invalidateQueries} />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </div>
  )
}

export default Admin;
