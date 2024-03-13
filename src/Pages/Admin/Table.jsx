import React from 'react';
import { changeTransactionStatusD24, changeXoxodayStatus } from '../../Requests/admin';
import { toast } from 'react-toastify';

function TableComponent({ data, invalidateQueries }) {


    const transactionStatusD24 = async (id, status) => {
        try {
            const res = await changeTransactionStatusD24(id, status);
            toast.success('Transaction status changed successfully')
        } catch (error) {
            toast.error('Error changing transaction status: ' + error.response.data.message)
        }
        invalidateQueries()
    }

    const transactionStatusXoxoday = async (id, status) => {
        try {
            const res = await changeXoxodayStatus(id, status);
            toast.success('Transaction status changed successfully')
        } catch (error) {
            toast.error('Error changing transaction status: ' + error.response.data.message)
        }
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
            <thead class="bg-gray-800 text-black saira">
                <tr>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">ID</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Email</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">User ID</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Amount</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Date</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Withdraw Method</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Status</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm text-black saira">Actions</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                {
                    data && data.map((transaction, index) => (
                        <tr key={index}>
                            <td class="py-3 px-4 text-black saira">{transaction.transactionId}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.email}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.userID}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.amount}</td>

                            <td class="py-3 px-4 text-black saira">{transaction.datetime}</td>
                            <td class="py-3 px-4 text-black saira">{transaction.type}</td>
                            <td class="py-3 px-4 text-black saira">{getStatusName(transaction.status)}</td>
                            <td class="py-3 px-4">
                                {
                                    transaction.status === 3 || transaction.status === 4
                                        ? <div className='text-black'>-</div>
                                        : <>
                                            <button onClick={() => {
                                                transaction.type === 'Xoxoday' ? transactionStatusXoxoday(transaction.id, 3) : transactionStatusD24(transaction.id, 3)
                                            }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Approve
                                            </button>
                                            <button onClick={() => {
                                                transaction.type === 'Xoxoday' ? transactionStatusXoxoday(transaction.id, 4) : transactionStatusD24(transaction.id, 4)
                                            }} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
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