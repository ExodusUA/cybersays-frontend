import React, { useEffect, useState } from 'react';
import HeaderProfile from '../Components/HeaderProfile';
import TableComponent from './Admin/Table';
import { getTransactions } from '../Requests/admin';

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
}, []);

const [transactions, setTransactions] = useState(null);

const fetchTransactions = async () => {
    const res = await getTransactions();
    console.log(res.data);

    setTransactions(res.data);
};

  return (
    <div>
      <HeaderProfile />

      <div className='pt-8 max-w-[1440px] m-auto w-full dark-text'>
        <h1 className='text-black saira text-[26px]'>Latest transactions</h1>

        <TableComponent data={transactions} />
      </div>

    </div>
  )
}

export default Admin;
