import React, { useState } from 'react';
import logotype from '../../images/logotype.svg';
import check from '../../images/checkbox.png';
import { Link } from 'react-router-dom';
import { registerUser } from '../../Requests/auth';
import { useNavigate } from 'react-router-dom';

function RegisterModal({ recaptchaRef, refferalCode, email }) {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [agreeEmail, setAgreeEmail] = useState('');
    const [agreeTerms, setAgreeTerms] = useState('');

    const regUser = async () => {

        if (userName === '') return alert('Please enter your username')
        if (password === '') return alert('Please enter your password')

        const token = await recaptchaRef.current.executeAsync();

        const res = await registerUser(token, email, password, userName, refferalCode);

        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            navigate('/')
        }
    }


    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>

            <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25 w-[90%] sm:w-auto border-[1px] border-[#FF1CBB]'>
                <img className='w-[175px] m-auto' src={logotype} alt="Logo" />

                <p className='py-8 text-[24px] font-bold'>Create an account on CyberSays</p>
                <input
                    className='saira px-5 bg-white text-gray h-[52px] rounded-[12px] w-full sm:w-[485px] outline-none'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    type="text"
                    placeholder='Enter your username'
                />

                <div className='w-full items-center flex justify-center gap-2 mt-5'>
                    <input
                        className='saira px-5 bg-white text-gray h-[52px] rounded-[12px] w-full sm:w-[485px] outline-none'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="text"
                        placeholder='Password'
                    />
                </div>
                <div className='flex items-center mt-3'>
                    <input
                        id='agreeEmail'
                        checked={agreeEmail}
                        onChange={e => setAgreeEmail(e.target.checked)}
                        type="checkbox"
                        className=' hidden'
                    />

                    <label className=' border-[3px] border-[#F5F5F5] w-[24px] h-[24px] rounded-[6px] flex items-center justify-center cursor-pointer' htmlFor="agreeEmail">
                        {agreeEmail && (
                            <div className="w-[24px] h-[24px] bg-tramsparent rounded-[4px] flex justify-center items-center ">
                                <img src={check} alt="check" />
                            </div>
                        )}
                    </label>
                    <label htmlFor="agreeEmail" className='select-none cursor-pointer text-[16px] saira font-normal ml-3'>I agree to receive notifications and reminders by email</label>
                </div>
                <div className='flex items-center mt-3'>
                    <input
                        id='agreeTerms'
                        checked={agreeTerms}
                        onChange={e => setAgreeTerms(e.target.checked)}
                        type="checkbox"
                        className='hidden'
                    />

                    <label className=' border-[3px] border-[#F5F5F5] w-[24px] h-[24px] rounded-[6px] flex items-center justify-center cursor-pointer' htmlFor="agreeTerms">
                        {agreeTerms && (
                            <div className="w-[24px] h-[24px] bg-tramsparent rounded-[4px] flex justify-center items-center ">
                                <img src={check} alt="check" />
                            </div>
                        )}
                    </label>
                    <label htmlFor="agreeTerms" className='select-none cursor-pointer text-[16px] saira font-normal ml-3'>I agree with the <span className='text-[#9D3EFD] saira font-semibold'>Terms of use</span> and <span className='text-[#9D3EFD] saira font-semibold'>Privacy policy</span> </label>
                </div>
                <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-70' disabled={!agreeTerms} onClick={e => regUser()}>Create an account</button>

                <p className='saira mt-5'>Already have an account? <Link className='text-[#9D3EFD] saira' to={'/login'}>Sign in</Link></p>
            </div>

        </div>
    );
}

export default RegisterModal;
