import React from 'react'
import logotype from '../images/logotype.svg'
import hero from '../images/hero.png'
import green from '../images/green.svg'
import purple from '../images/purple.png'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import left from '../images/left.svg'
import right from '../images/right.svg'
import Slide from '../Components/Slide'
import { useState } from 'react';
import UserMenuButton from '../Components/UserMenuButton'
import LoginButton from '../Components/Buttons/LoginButton'
import userAPI from '../Requests/user'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile/Profile'
import Offer from './Profile/Offer'
import SiteMenu from '../Components/SiteMenu'
import Tasks from './Profile/Tasks'
import MobileMenu from '../Components/MobileMenu'
var mixpanel = require('mixpanel-browser');


function Main({ languageData }) {

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('userid');

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

            <SiteMenu userData={userData} />

            <Routes>
                <Route path="/" element={<Offer languageData={languageData} />} />
                <Route path="/offer" element={<Offer index languageData={languageData} />} />
                <Route path="/profile" element={<Profile languageData={languageData} userData={userData} />} />
                <Route path="/tasks" element={<Tasks languageData={languageData} userData={userData} />} />
            </Routes>


            <MobileMenu />
        </>

    )
}

export default Main