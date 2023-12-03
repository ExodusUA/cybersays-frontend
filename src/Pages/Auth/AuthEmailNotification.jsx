import React from 'react';
import emailNotif from '../images/emailNotif.png';


function AuthEmailNotification() {


    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>
            <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25 w-[90%] sm:w-auto border-[1px] border-[#FF1CBB]'>
                <img className='w-[110px] m-auto' src={emailNotif} alt="Logo" />
                <p className='py-8 text-[24px] font-bold max-w-[500px] w-full text-center'>Link to restore password was sent to your email</p>
                <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer'>Submit</button>
            </div>
        </div>
    );
}

export default AuthEmailNotification;
