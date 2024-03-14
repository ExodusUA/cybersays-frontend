import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

function Referral() {

    let ref = window.location.pathname.split('/')[1];
    let path = new URL(window.location).pathname;
    let imagePath = window.location.origin + path.substring(path.indexOf("/static"));

   useEffect(() => {
    window.localStorage.setItem('ref', ref);
   }, []);

    return (
        <div className='text-black'>
            Referrals
        </div>
    )
}

export default Referral