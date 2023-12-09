import React, { useState } from 'react';
import user from '../Requests/user';
import { useNavigate } from 'react-router-dom';
import close from '../images/closeBtn.png'
import { Link } from 'react-router-dom'

function DeleteConfirm({ setAccountDelete, setModalOpen, setDeleteOpen }) {
    const [deletingStep, setDeletingStep] = useState(false);
    const navigate = useNavigate();

    const deleteAccountHandler = async () => {
        try {
            await user.deleteUser();
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='fixed right-0 w-screen h-screen top-0 z-30 bg-[#1b1f3f] backdrop-blur-sm bg-opacity-70 flex justify-center items-center'>
            <div className='p-10 rounded-[12px] bg-[#35324D]  border-[1px] border-[#FF1CBB] max-w-[500px] w-full'>
                <div className=' flex justify-end '>
                    <img onClick={e => {
                        setDeleteOpen(false)
                        setModalOpen(true)
                    }} className='w-[34px] cursor-pointer' src={close} alt="close" />
                </div>
                {deletingStep ? (
                    <div>
                        <p className='py-8 text-[24px] font-bold max-w-[500px] w-full text-center text-[#FF4B60]'>
                            Are you sure you want to delete your account?
                        </p>

                        <div className='flex justify-end gap-4'>

                            <button onClick={e => {
                                setDeleteOpen(false)
                                setModalOpen(true)
                            }}
                                className='gradient-milestoneHeader w-full h-[52px] text-[16px] font-semibold rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer'

                            >
                                No
                            </button>

                            <Link to='/formDeleteConfirm'
                                className='gradient-milestoneHeader w-full h-[52px] text-[16px] font-semibold rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer flex justify-center items-center'
                            >
                                Yes, delete now!
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className='py-8 text-[24px] font-bold max-w-[500px] w-full text-center'>
                            If you delete your account all your achievements will be lost
                        </p>

                        <div className='flex justify-end gap-4'>
                            <button className='gradient-milestoneHeader w-full h-[52px] text-[16px] font-semibold rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer'
                                onClick={e => setDeletingStep(true)}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DeleteConfirm;
