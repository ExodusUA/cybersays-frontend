import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import userAPI from '../Requests/user'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile/Profile'
import Offer from './Profile/Offer'
import SiteMenu from '../Components/SiteMenu'
import Tasks from './Profile/Tasks'
import MobileMenu from '../Components/MobileMenu'
import Gifts from './Profile/Gifts'
import PaymentChoose from '../Components/PaymentChoose'
import DeleteConfirm from '../Components/DeleteConfirm';
var mixpanel = require('mixpanel-browser');


function Main({ languageData }) {

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('userid');

    const [selectPayment, setSelectPayment] = useState(false);
    const [accountDelete, setAccountDelete] = useState(false);

    const [userData, setUserData] = useState(null);

    useEffect(() => {

        /* MIXPANEL */
        

        mixpanel.track("page_view_cyber_says", {
            distinct_id: uid || 'not_set'
        });

        /* USER DATA */

        let token = localStorage.getItem('token');

        if (token === null) return;

        const res = userAPI.getUserData();

        res.then((data) => {
            setUserData(data)
        })

    }, [])


    return (
        <>
            <Helmet>
                <title>{languageData?.siteTitle}</title>
                <meta name="description"
                    content={languageData?.metaDescription} />
                <meta property="og:title" content={languageData?.siteTitle} />
                <meta property="og:description"
                    content={languageData?.metaDescription} />
            </Helmet>

            <SiteMenu userData={userData} setAccountDelete={setAccountDelete} />

            <Routes>
                <Route path="/" element={<Offer languageData={languageData} />} />
                <Route path="/offer" element={<Offer index languageData={languageData} />} />
                <Route path="/profile" element={<Profile languageData={languageData} userData={userData} />} />
                <Route path="/tasks" element={<Tasks languageData={languageData} userData={userData} />} />
                <Route path="/gifts" element={<Gifts languageData={languageData} setSelectPayment={setSelectPayment} />} />
            </Routes>


            <MobileMenu />
            {
                selectPayment && <PaymentChoose setSelectPayment={setSelectPayment} />
            }

            {
                accountDelete && <DeleteConfirm setAccountDelete={setAccountDelete} />
            }
        </>

    )
}

export default Main