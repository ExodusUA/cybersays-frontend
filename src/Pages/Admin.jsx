import React, { useEffect, useState } from 'react';
import HeaderProfile from '../Components/HeaderProfile';
import TableComponent from './Admin/Table';
import { getTransactions, getTransactionsD24 } from '../Requests/admin';

function Admin() {

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
    fetchTransactions()
    fetchTransactionsD24()
  }, []);

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await getTransactions();
    if (res.data === null) return;

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
  };

  const fetchTransactionsD24 = async () => {
    const res = await getTransactionsD24();
    if (res.data === null) return;
    
    res.data = res.data.map((transaction) => {
      transaction.type = transaction.currency === "BRL" ? "PIX (D24)" : "D24";
      return transaction;
    });

    setTransactions((prev) => {
      return [...prev, ...res.data];
    });
  };

  useEffect(() => {

    setTransactions((prev) => {
      return prev.sort((a, b) => {
        return b.transactionId - a.transactionId;
      });
    });
  }, [transactions]);

  return (
    <div className='overflow-y-auto max-h-screen'>
      <HeaderProfile />

      <div className='pt-8 max-w-[1440px] m-auto w-full dark-text'>
        <h1 className='text-black saira text-[26px]'>Latest transactions</h1>

        <TableComponent data={transactions} />
      </div>

    </div>
  )
}

export default Admin;
