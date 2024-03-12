import React from 'react';
import { changeTransactionStatus } from '../../Requests/admin';

function TableComponent({ data }) {


    const transactionStatus = async (id, status) => {
        // Approve transaction

        const res = await changeTransactionStatus(id, status);
    }

    return (
        <table class="min-w-full bg-white rounded-lg overflow-hidden mt-4">
            <thead class="bg-gray-800 text-black">
                <tr>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">ID</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">Email</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">User ID</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">Amount</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">Date</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">Status</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                {
                   data && data.map((transaction, index) => (
                        <tr key={index}>
                            <td class="py-3 px-4 text-black">{transaction.id}</td>
                            <td class="py-3 px-4 text-black">{transaction.email}</td>
                            <td class="py-3 px-4 text-black">{transaction.userID}</td>
                            <td class="py-3 px-4 text-black">{transaction.amount}</td>
                            <td class="py-3 px-4 text-black">{transaction.datetime}</td>
                            <td class="py-3 px-4">
                                <button onClick={() => transactionStatus(transaction.id, 3)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Approve
                                </button>
                                <button onClick={() => transactionStatus(transaction.id, 4)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                    Decline
                                </button>
                            </td>
                        </tr>
                    ))
                }  
            </tbody>
        </table>
    )
}

export default TableComponent;