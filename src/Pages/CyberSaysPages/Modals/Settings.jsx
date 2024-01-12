import React, { useEffect, useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import checkmarkImg from '../../../images/checkmarkWhite.png'
import { useNavigate } from 'react-router-dom'
import userAPI from '../../../Requests/user'

function Settings({ user, setOpen }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (user) {
            setUsername(user.username)
            setEmail(user.email)
        }
    }, [user])


    const [isSended, setIsSended] = useState(false)

    const handleSend = () => {
        if (email === '' || username === '') return alert('Please fill all fields')
        setIsSended(true)
    }

    const [checkmark, setCheckmark] = useState(true)

    const [deleteStep, setDeleteStep] = useState(0)

    const navigate = useNavigate();

    const deleteAccountHandler = async () => {
        try {
            await userAPI.deleteUser();
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>
                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>

                <div className='h-[80vh] flex align-middle items-center justify-center w-full'>
                    <div className='w-full'>
                        <h1 className='text-[32px] text-white text-center'>Account settings</h1>
                        <div className='mt-4'>
                            <p className='text-[14px] text-white saira'>User name</p>
                            <input value={username} onChange={e => setUsername(e.target.value)} className='w-full bg-white border border-[#FFD700] rounded-[18px] px-6 py-3 saira input-fix text-[#888888] mt-1' placeholder='Username' />

                            <p className='text-[14px] text-white saira mt-6'>E-mail</p>
                            <input value={email} onChange={e => setEmail(e.target.value)} className='w-full bg-white border border-[#FFD700] rounded-[18px] px-6 py-3 saira input-fix text-[#888888] mt-1' placeholder='E-mail' />

                            <div className='flex items-center gap-2 mt-4'>
                                <input type="checkbox" name="notification" id="notification" hidden onChange={e => setCheckmark(!checkmark)} />
                                <div className='w-[22px] h-[22px] border-2 border-white rounded-md flex justify-center items-center align-middle' onClick={e => setCheckmark(true)}>
                                    {
                                        checkmark === true && <img className='w-3' src={checkmarkImg} alt="" />
                                    }
                                </div>
                                <label className='saira' htmlFor="notification">Receive notifications and reminders via email</label>

                            </div>

                            <div className="flex justify-center">
                                <button className='w-full bg-[white] border-[#FFD700] px-6 py-3 saira p-2 mt-4 max-w-[350px] rounded-[18px] text-[#5f5f5f] font-semibold' onClick={e => handleSend()}>
                                    {
                                        isSended ? 'Saved!' : 'Apply changes'
                                    }
                                </button>
                            </div>
                            <p className='text-center mt-2 text-[#FF4B60] saira font-semibold cursor-pointer' onClick={e => setDeleteStep(1)}>Delete account</p>
                        </div>
                    </div>

                    {
                        deleteStep === 1 ?
                            <div className='absolute  backdrop-blur-lg p-6 bg-black/50 rounded-[20px] max-w-[345px] border-[#FFD700] border'>
                                <div className='flex justify-end mb-2'>
                                    <img onClick={e => setDeleteStep(0)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                                </div>
                                <h1 className='text-[16px] text-white text-center font-semibold'>If you delete your account
                                    all your achievements
                                    will be lost</h1>

                                <button onClick={e => setDeleteStep(2)} className='w-full bg-[white] border-[#FFD700] px-6 py-3 saira p-2 mt-4 max-w-[350px] rounded-[50px] text-[18px] text-[#5f5f5f] font-semibold'>Continue</button>
                            </div>
                            : deleteStep === 2
                                ? <div className='absolute  backdrop-blur-lg p-6 bg-black/50 rounded-[20px] border-[#FFD700] border'>
                                    <div className='flex justify-end mb-2'>
                                        <img onClick={e => setDeleteStep(0)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                                    </div>
                                    <h1 className='text-[16px] text-center text-[#FF4B60] font-semibold'>Are you sure you want to delete your account?</h1>

                                    <div className='flex items-center gap-4'>
                                        <button onClick={e => setDeleteStep(0)} className='w-full bg-transparent border-[#FFD700] border px-6 py-3 saira p-2 mt-4 max-w-[350px] rounded-[50px] text-[18px] text-white font-semibold'>No</button>
                                        <button onClick={e => deleteAccountHandler()} className='w-full bg-[white] border-[#FFD700] px-6 py-3 saira p-2 mt-4 max-w-[350px] rounded-[50px] text-[18px] text-[#5f5f5f] font-semibold'>Yes</button>
                                    </div>
                                </div>
                                : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Settings
