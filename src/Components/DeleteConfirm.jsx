import React from 'react'
import user from '../Requests/user'
import { useNavigate } from 'react-router-dom'

function DeleteConfirm({ setAccountDelete }) {

    const navigate = useNavigate()

    const deleteAccountHandler = async () => {
        try {
            await user.deleteUser()
            localStorage.removeItem('token')
            navigate('/login')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[10000] bg-cover flex items-center justify-center'>
            {
                <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25   border-[1px] border-[#FF1CBB] max-w-[400px] w-full'>
                    <p className='py-8 text-[24px] font-bold max-w-[500px] w-full text-center'>Are you sure you want to delete your account?</p>

                    <div className='flex justify-end gap-4'>
                        <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer' onClick={e => setAccountDelete(false)}>No</button>
                        <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer' onClick={e => deleteAccountHandler()}>Yes, delete now!</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default DeleteConfirm
