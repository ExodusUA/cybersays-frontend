import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
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
import LeaderboardModal from '../Components/LeaderboardModal'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react';
import user from '../Requests/user'
import ChatModal from '../Components/ChatModal'
import infoAPI from '../Requests/info'
var mixpanel = require('mixpanel-browser');


function Main({ languageData }) {

    const [imLiveURL, setImLiveURL] = useState(null);
    const navigate = useNavigate()
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('userid');

    const [menuOpen, setMenuOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const [userData, setUserData] = useState(null);
    const [tourModal, setTourModal] = useState(false)
    const [leaderboardModal, setLeaderboardModal] = useState(false)

    const [loading, setLoading] = useState(true)
    const [leaderboardData, setLeaderboardData] = useState([])

    const [siteData, setSiteData] = useState(null)

    useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await userAPI.getUserData();
            if (res.id === undefined) return navigate('/login')
            setUserData(res)
            setImLiveURL(`https://imlive.com/wmaster.ashx?QueryID=197&WID=126670106835&linkID=701&from=freevideo6&promocode=${res?.id}`)
            return res
        }
    })

    useQuery({
        queryKey: ['siteData'],
        queryFn: async () => {
            const res = await infoAPI.getInfoData();
            console.log(res.data)
            setSiteData(res.data)
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

    async function scrollToPage(pageIndex) {
        setMenuOpen(false)
        setActivePageIndex(pageIndex)
    }

    function handleSwiperChange(swiper) {
        setActivePageIndex(swiper.realIndex)
    }

    const [mainSwiper, setMainSwiper] = useState(null);

    useEffect(() => {
        console.log(activePageIndex)
        if (mainSwiper) {
            mainSwiper.slideTo(activePageIndex);
        }
    }, [activePageIndex])

    const HomepageSwiper = () => {

        return (
            <div className='overflow-y-hidden overflow-x-hidden'>
                <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={userData} />

                <Swiper
                    className='w-screen h-screen'
                    initialSlide={activePageIndex}
                    onSwiper={(swiper) => {
                        setMainSwiper(swiper);
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={false}
                    onSlideChange={(swiper) => handleSwiperChange(swiper)}
                >
                    <SwiperSlide>
                        <Homepage setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} imLiveURL={imLiveURL} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RaffleTickets setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} imLiveURL={imLiveURL} setTourModal={setTourModal} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Double setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} imLiveURL={imLiveURL} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Refferals setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Competition siteData={siteData} imLiveURL={imLiveURL} user={userData} languageData={languageData} setLeaderboardModal={setLeaderboardModal} loading={loading} leaderboardData={leaderboardData} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} setLeaderboardData={setLeaderboardData} setLoading={setLoading} />
                    </SwiperSlide>

                </Swiper>
                <BottomMenu activePageIndex={activePageIndex} setActivePageIndex={setActivePageIndex} />

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
                leaderboardModal && <LeaderboardModal setOpen={setLeaderboardModal} loading={loading} leaderboardData={leaderboardData} />

            }
            {
                menuOpen === true && <CyberSaysMobileMenu siteData={siteData} scrollToPage={scrollToPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={userData} />
            }
            {
                tourModal && <TourModal setOpen={setTourModal} />
            }
        </>
    )
}

export default Main