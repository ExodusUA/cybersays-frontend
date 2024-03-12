import React from 'react';
import { changeTransactionStatus } from '../../Requests/admin';

function TableComponent({ data }) {


    const transactionStatus = async (id, status) => {
        // Approve transaction

        const res = await changeTransactionStatus(id, status);
    }

    return (
        <table class="min-w-full bg-white rounded-lg overflow-hidden mt-4">
            <thead class="bg-gray-800 text-black ">
                <tr>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">ID</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Email</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">User ID</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Amount</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Date</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Status</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                {
                   data && data.map((transaction, index) => (
                        <tr key={index}>
                            <td class="py-3 px-4 text-black saira">{transaction.id}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.email}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.userID}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.amount}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.datetime}</td>
                            <td class="py-3 px-4">
                                <button onClick={() => transactionStatus(transaction.id, 3)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded saira">
                                    Approve
                                </button>
                                <button onClick={() => transactionStatus(transaction.id, 4)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 saira">
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