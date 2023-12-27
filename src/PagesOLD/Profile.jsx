import React, { useState } from 'react';
import HeaderProfile from '../Components/HeaderProfile'
import DeleteConfirm from '../ComponentsOLD/DeleteConfirm';

function Profile() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const inputClass = 'w-full p-4 saira border-[1px] border-[#1E1E1E] rounded-[12px] text-[#1E1E1E] outline-none';
    const errorInputClass = 'border-1 border-red-500 ' + inputClass;

    const handleApply = (e) => {
        e.preventDefault();
        if (!email || !username) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <div>
            <HeaderProfile />
            <h2 className='text-[#1E1E1E] text-[20px] lg:text-[30px] font-bold text-center my-4'>MY ACCOUNT</h2>
            <div className='max-w-[345px] m-auto'>
                <p className='text-[16px] saira font-semibold text-[#1E1E1E] '>Personal information</p>
                <div>
                    <p className='text-[12px] saira font-normal text-[#1E1E1E] my-1'>User name</p>
                    <input
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        className={`${error ? errorInputClass : inputClass}`}
                        type="username"
                        placeholder='Enter your user name' />
                </div>
                <div>
                    <p className='text-[12px] saira font-normal text-[#1E1E1E] my-1'>E-mail</p>
                    <input
                        className={`${error ? errorInputClass : inputClass}`}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder='Enter your E-mail' />
                </div>
                <button onClick={handleApply} className='gradient-milestoneHeader w-full h-[52px] text-[16px] font-semibold rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer' >
                    Apply changes
                </button>
                <p onClick={e => setDeleteOpen(true)} className='text-[#FF4B60] font-semibold text-[16px] saira flex items-center cursor-pointer justify-center mt-5'>
                    Delete account
                </p>
            </div>

            {
              deleteOpen && <DeleteConfirm deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} />
            }
        </div>
    )
}

export default Profile
