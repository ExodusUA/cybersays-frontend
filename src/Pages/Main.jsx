import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './CyberSaysPages/Homepage'
import HeaderMenu from '../Components/HomePage/HeaderMenu'
import CyberSaysMobileMenu from '../Components/CyberSaysMobileMenu'
import RaffleTickets from './CyberSaysPages/RaffleTickets'
import Double from './CyberSaysPages/Double'
import { Helmet } from 'react-helmet'
import userAPI from '../Requests/user'
import BottomMenu from '../Components/HomePage/BottomMenu'
import { useQuery } from '@tanstack/react-query'
import AuthCheck from '../hoc/AuthCheck'
import Competition from './CyberSaysPages/Competition'
import { useSwipeable } from 'react-swipeable';
import Refferals from './CyberSaysPages/Refferals'
import Terms from './CyberSaysPages/Terms'
import Withdraw from '../Components/Transactions/Withdraw'
import TourModal from '../Components/DoubleMoneyPage/TourModal'
var mixpanel = require('mixpanel-browser');


function Main({ languageData }) {

    const [imLiveURL, setImLiveURL] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('userid');

    const [menuOpen, setMenuOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const [userData, setUserData] = useState(null);

    const [tourModal, setTourModal] = useState(false)


    useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await userAPI.getUserData();
            setUserData(res)
            setImLiveURL(`https://imlive.com/wmaster.ashx?QueryID=197&WID=126670106835&linkID=701&from=freevideo6&promocode=${res?.id}`)
            return res
        }
    })

    useEffect(() => {

        /* MIXPANEL */

        mixpanel.track("page_view_cyber_says", {
            distinct_id: uid || 'not_set'
        });

    }, [])

    const [activePageIndex, setActivePageIndex] = React.useState(0)
    const [menuScroll, setMenuScroll] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMenuScroll(false);
        }, 500);
    }, [menuScroll]);

    let config = {
        delta: 10,
        preventScrollOnSwipe: false,
        trackTouch: true,
        trackMouse: false,
        rotationAngle: 0,
        swipeDuration: Infinity,
        touchEventOptions: { passive: true },
    }

    const handlers = useSwipeable({
        onSwiped: (eventData) => calculatePageIndex(eventData),
        ...config,
    });

    function calculatePageIndex(data) {

        let activePage = activePageIndex

        if (data.dir === 'Left') {
            setActivePageIndex(400)

        } else if (data.dir === 'Right') {
            setActivePageIndex(-400)
        }
    }



    const HomepageSwiper = () => {

        return (
            <div className='overflow-y-hidden overflow-x-hidden'>
                <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={userData} />
                <div {...handlers} className='transition-custom flex w-[400vw] overflow-y-hidden overflow-x-hidden h-screen' style={{ transform: `translateX(${activePageIndex < 4 && activePageIndex * 100}vw)` ? `translateX(-${activePageIndex < 4 && activePageIndex * 100}vw)` : undefined }}>
                    <Homepage menuScroll={menuScroll} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} imLiveURL={imLiveURL} />
                    <RaffleTickets menuScroll={menuScroll} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} imLiveURL={imLiveURL} setTourModal={setTourModal} />
                    <Double menuScroll={menuScroll} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} />
                    <Refferals menuScroll={menuScroll} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} />
                </div>
                <BottomMenu menuScroll={menuScroll} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} />

            </div>
        )
    }

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

            <Routes>
                <Route path="/" element={<AuthCheck>{HomepageSwiper()}</AuthCheck>} />
                <Route path="/competition" element={<AuthCheck><Competition imLiveURL={imLiveURL} user={userData} /></AuthCheck>} />
                <Route path="/terms" element={<Terms languageData={languageData} />} />
            </Routes >

            {
                menuOpen === true && <CyberSaysMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            }
            {
                tourModal && <TourModal setOpen={setTourModal} />
            }
        </>
    )
}

export default Main