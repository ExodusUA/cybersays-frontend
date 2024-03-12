import React from 'react';
import { changeTransactionStatusD24 } from '../../Requests/admin';

function TableComponent({ data, invalidateQueries }) {


    const transactionStatusD24 = async (id, status) => {
        const res = await changeTransactionStatusD24(id, status);
        invalidateQueries()
    }

    const getStatusName = (status) => {
        switch (status) {
            case 1: return 'Processing';
            case 2: return 'Pending';
            case 3: return 'Approved';
            case 4: return 'Declined';
        }
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
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">Withdraw Method</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">Status</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black">Actions</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                {
                    data && data.map((transaction, index) => (
                        <tr key={index}>
                            <td class="py-3 px-4 text-black">{transaction.transactionId}</td>
                            <td class="py-3 px-4 text-black">{transaction.email}</td>
                            <td class="py-3 px-4 text-black">{transaction.userID}</td>
                            <td class="py-3 px-4 text-black">{transaction.amount}</td>

                            <td class="py-3 px-4 text-black">{transaction.datetime}</td>
                            <td class="py-3 px-4 text-black">{transaction.type}</td>
                            <td class="py-3 px-4 text-black">{getStatusName(transaction.status)}</td>
                            <td class="py-3 px-4">
                                {
                                    transaction.status === 3 || transaction.status === 4
                                        ? <div>-</div>
                                        : <>
                                            <button onClick={() => transactionStatusD24(transaction.id, 3)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Approve
                                            </button>
                                            <button onClick={() => transactionStatusD24(transaction.id, 4)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                                Decline
                                            </button>
                                        </>
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableComponent;