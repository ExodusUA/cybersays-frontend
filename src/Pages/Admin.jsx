import React, { useEffect, useState } from 'react';
import HeaderProfile from '../Components/HeaderProfile';
import TableComponent from './Admin/Table';
import { getTransactions, getTransactionsD24 } from '../Requests/admin';
import { useQuery, useQueryClient } from '@tanstack/react-query';


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
  }, []);

  const [transactions, setTransactions] = useState([]);

  useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const res = await getTransactions();
      setTransactions((prev) => {
        return [...prev, ...res.data];
      });
      return res
    }
  });

  useQuery({
    queryKey: ['transactions24'],
    queryFn: async () => {
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
  });

  useEffect(() => {

    setTransactions((prev) => {
      return prev.sort((a, b) => {
        return b.transactionId - a.transactionId;
      });
    });
  }, [transactions]);

  const invalidateQueries = () => {
    queryClient.invalidateQueries('transactions');
    queryClient.invalidateQueries('transactions24');
  }

  return (
    <div className='overflow-y-auto max-h-screen'>
      <HeaderProfile />

      <div className='pt-8 max-w-[1440px] m-auto w-full dark-text'>
        <h1 className='text-black saira text-[26px]'>Latest transactions</h1>

        <TableComponent data={transactions} invalidateQueries={invalidateQueries} />
      </div>

    </div>
  )
}

export default Admin;
