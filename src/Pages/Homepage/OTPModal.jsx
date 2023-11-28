import React, { useState } from 'react';
import logotype from '../../images/logotype.svg';
import clock from '../../images//landing/clock.png';
import { Link } from 'react-router-dom';

function OTPModal() {
    const [otpCode, setOtpCode] = useState('');

    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>

            <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25 w-[90%] sm:w-auto border-[1px] border-[#FF1CBB]'>
                <img className='w-[175px] m-auto' src={logotype} alt="Logo" />

                <p className='py-8 text-[24px] font-bold'>Verify your account</p>
                <input
                    className='saira px-5 bg-white text-[] h-[52px] rounded-[12px] w-full sm:w-[485px]'
                    value={otpCode}
                    onChange={e => setOtpCode(e.target.value)}
                    type="text"
                    placeholder='Enter verification code sent by e-mail'
                />

                <div className='w-full items-center flex justify-center gap-2 mt-5'>
                    <img className='w-[20px] h-[20px]' src={clock} alt="Clock" />
                    <p className='saira'>09:53</p>
                </div>

                <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-80' disabled={true}>Submit</button>

                <p className='saira mt-5'>Already have an account? <Link className='text-[#9D3EFD] saira' to={'/login'}>Sign in</Link></p>
            </div>

        </div>
    );
}

export default OTPModal;
