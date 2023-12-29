import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuModal from '../Components/MenuModal'
import DeleteConfirm from '../Components/DeleteConfirm'
import Homepage from './CyberSaysPages/Homepage'
import HeaderMenu from '../Components/HomePage/HeaderMenu'
import CyberSaysMobileMenu from '../Components/CyberSaysMobileMenu'
import RaffleTickets from './CyberSaysPages/RaffleTickets'
import AvatarModal from '../Components/Profile and Refferals Page/AvatarModal'
import Double from './CyberSaysPages/Double'
import { Helmet } from 'react-helmet'
import userAPI from '../Requests/user'
import MyReferralsModal from '../Components/Profile and Refferals Page/MyReferralsModal'
import BottomMenu from '../Components/HomePage/BottomMenu'
import { useQuery } from '@tanstack/react-query'
var mixpanel = require('mixpanel-browser');


function Main({ languageData }) {

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('userid');

    const [menuOpen, setMenuOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const [userData, setUserData] = useState(null);

    useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await userAPI.getUserData();
            setUserData(res)
            return res
        }
    })

    useEffect(() => {

        /* MIXPANEL */

        mixpanel.track("page_view_cyber_says", {
            distinct_id: uid || 'not_set'
        });

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
            {
                /*
        {
            menuOpen && <MenuModal setModalOpen={setMenuOpen} setDeleteOpen={setDeleteOpen} />
        }

        {
            deleteOpen && <DeleteConfirm setDeleteOpen={setDeleteOpen} />
        }

        <Routes>
                <Route path="/" element={<AuthCheck><Homepage setMenuOpen={setMenuOpen} languageData={languageData} /></AuthCheck>} />
            <Route path="/profile" element={<AuthCheck><Profile languageData={languageData} /></AuthCheck>} />
        </Routes >
        */
            }
            <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={userData} />

            <Double languageData={languageData} user={userData} />
            <BottomMenu />
            {
                menuOpen === true && <CyberSaysMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            }

        </>
    )
}

export default Main