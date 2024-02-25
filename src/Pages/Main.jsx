import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from './CyberSaysPages/Homepage'
import HeaderMenu from '../Components/HomePage/HeaderMenu'
import ModalMenu from '../Components/ModalMenu'
import RaffleTickets from './CyberSaysPages/RaffleTickets'
import Double from './CyberSaysPages/Double'
import { Helmet } from 'react-helmet'
import userAPI from '../Requests/user'
import CircleNavigation from '../Components/CircleNavigation'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import AuthCheck from '../hoc/AuthCheck'
import Competition from './CyberSaysPages/Competition'
import Refferals from './CyberSaysPages/Refferals'
import Terms from './CyberSaysPages/Terms'
import Withdraw from '../Components/Transactions/Withdraw'
import TourModal from '../Components/DoubleMoneyPage/TourModal'
import LeaderboardModal from '../Components/LeaderboardModal'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react';
import ChatModal from '../Components/ChatModal'
import infoAPI from '../Requests/info'
import MyReferralsModal from '../Components/ProfileReferrals/MyReferralsModal'
import chatImage from '../images/CyberSaysPage/mobileMenuLink/link9.png'
import Message from './CyberSaysPages/Modals/Message'
import AvatarModal from '../Components/ProfileReferrals/AvatarModal'
import { useDesign } from '../Helpers/Design/DesignContext'
import API from '../Helpers/API'
import LiveFeed from '../Components/LiveFeed'
import Verify from './Verify'
import WinVegasModal from '../Components/WinVegasModal'
import infoBtn from '../images/NewDesign/infoBtn.png'

import first from '../images/gifs/first.png'
import second from '../images/gifs/second.png'
import third from '../images/gifs/third.png'
import ImageModals from '../Components/ImageModals'
import CompetitionRules from '../Components/CompetitionRules'
import ToolTipInfo from '../Components/ToolTipInfo'

var mixpanel = require('mixpanel-browser');


function Main({ languageData }) {
    const { design } = useDesign()

    const queryClient = useQueryClient()
    const dataMessage = [
        {
            desc: 'Message text Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
    ]
    const [messageCopied, setMessagetCopied] = useState(Array(dataMessage.length).fill(false));
    const copyToMessage = (text, messageIndex) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        const newTextCopied = [...messageCopied];
        newTextCopied[messageIndex] = true;
        setMessagetCopied(newTextCopied);
    };

    const [imLiveURL, setImLiveURL] = useState(null);
    const navigate = useNavigate()
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');

    const [menuOpen, setMenuOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const [userData, setUserData] = useState(null);
    const [tourModal, setTourModal] = useState(false)
    const [leaderboardModal, setLeaderboardModal] = useState(false)

    const [loading, setLoading] = useState(true)
    const [leaderboardData, setLeaderboardData] = useState([])

    const [siteData, setSiteData] = useState(null)
    const [withdrawModal, setWithdrawModal] = useState(false)

    const [chatModal, setChatModal] = useState(false)
    const [openMessage, setOpenMassege] = useState(false);
    const [openAvatar, setOpenAvatar] = useState(false);
    const [winMoadal, setWinModal] = useState(false);
    const [rulesModal, setRulesModal] = useState(false);
    const [imageModal, setImageModal] = useState(false)
    const [toolInfo, setToolInfo] = useState(false)

    const [selectedMessage, setSelectedMassege] = useState(null);

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
        setActivePageIndex(swiper.activeIndex)

        if (swiper.realIndex === 5) {
            swiper.slideTo(0)
        }
    }

    const [mainSwiper, setMainSwiper] = useState(null);

    useEffect(() => {
        console.log(activePageIndex)
        if (mainSwiper) {
            mainSwiper.slideTo(activePageIndex);
        }
    }, [activePageIndex])

    const [referralsOpen, setReferralsOpen] = useState(false)


    const [selectedImage, setSelectedImage] = useState(null);
    const inputRef = useRef()
    const [uploadedPhotos, setUploadedPhotos] = useState(() => {
        const storedPhotos = localStorage.getItem('uploadedPhotos');
        return storedPhotos ? JSON.parse(storedPhotos) : [first, second, third];
    });

    const savePhotosToLocalStorage = (photos) => {
        console.log(photos)
        localStorage.setItem('uploadedPhotos', JSON.stringify(photos));
    };

    useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await userAPI.getUserData()
            setUserData(res)

            if (res.avatar !== null) {
                setSelectedImage(res.avatar)
            }

            return res
        }
    })
    async function convertImageToBase64(imageFile) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(imageFile);
        });
    }
    const saveAvatar = async () => {
        try {
            const res = await userAPI.updateUserAvatar(inputRef.current.files[0])
            console.log(res)
            alert('Done!')

            console.log(res.data.url)
            setUploadedPhotos((prevPhotos) => [...prevPhotos, res.data.url]);
            let photos = [...uploadedPhotos, res.data.url];
            savePhotosToLocalStorage(photos);
        } catch (error) {
            alert(error)
        }
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result;


                {/* setUploadedPhotos((prevPhotos) => [...prevPhotos, { image: base64String }]);*/ }
                setSelectedImage(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const [userCountry, setUserCountry] = useState(null)

    useEffect(() => {
        getUserCountry()
        async function getUserCountry() {
            const res = await API.getUserCountry()
            setUserCountry(res)
        }
    }, [])

    const HomepageSwiper = () => {

        return (
            <div className='overflow-y-hidden overflow-x-hidden'>
                <HeaderMenu languageData={languageData} menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={userData} setTourModal={setTourModal} />
                <LiveFeed user={userData} />
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
                        <Homepage scrollToPage={scrollToPage} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} imLiveURL={imLiveURL} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RaffleTickets setWinModal={setWinModal} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} imLiveURL={imLiveURL} setTourModal={setTourModal} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Double setOpen={setWithdrawModal} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} imLiveURL={imLiveURL} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Refferals setImageModal={setImageModal} imageModal={imageModal} uploadedPhotos={uploadedPhotos} saveAvatar={saveAvatar} selectedImage={selectedImage} setSelectedImage={setSelectedImage} message={selectedMessage !== null ? dataMessage[selectedMessage].desc : ''} copyToMessage={copyToMessage} setSelectedMassege={setSelectedMassege} selectedMessage={selectedMessage} setOpenAvatar={setOpenAvatar} setOpenMassege={setOpenMassege} dataMessage={dataMessage} setReferralsOpen={setReferralsOpen} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} user={userData} languageData={languageData} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Competition setRulesModal={setRulesModal} siteData={siteData} imLiveURL={imLiveURL} user={userData} languageData={languageData} setLeaderboardModal={setLeaderboardModal} loading={loading} leaderboardData={leaderboardData} setActivePageIndex={setActivePageIndex} activePageIndex={activePageIndex} setLeaderboardData={setLeaderboardData} setLoading={setLoading} />
                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>

                </Swiper>
                <CircleNavigation activePageIndex={activePageIndex} setActivePageIndex={setActivePageIndex} />

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
                <Route path="/verify" element={<Verify userData={userData} />} />
                <Route path="/" element={<AuthCheck>{HomepageSwiper()}</AuthCheck>} />
                <Route path="/competition" element={<AuthCheck><Competition imLiveURL={imLiveURL} user={userData} /></AuthCheck>} />
                <Route path="/terms" element={<Terms languageData={languageData} />} />

            </Routes >
            {
                leaderboardModal && <LeaderboardModal languageData={languageData} setOpen={setLeaderboardModal} loading={loading} leaderboardData={leaderboardData} />

            }
            {
                menuOpen === true && <ModalMenu languageData={languageData} setChatModal={setChatModal} chatModal={chatModal} siteData={siteData} scrollToPage={scrollToPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={userData} />
            }
            {
                tourModal && <TourModal languageData={languageData} setOpen={setTourModal} />
            }
            {
                withdrawModal && <Withdraw languageData={languageData} setOpen={setWithdrawModal} user={userData} />
            }

            {
                referralsOpen && <MyReferralsModal languageData={languageData} setOpen={setReferralsOpen} user={userData} />
            }

            {
                chatModal && <ChatModal languageData={languageData} setOpen={setChatModal} user={userData} userCountry={userCountry} />
            }
            {
                winMoadal && <WinVegasModal languageData={languageData} setOpen={setWinModal} />
            }
            {
                rulesModal && <CompetitionRules setOpen={setRulesModal} languageData={languageData} />
            }
            {
                openMessage && <Message onCloseCopied={() => {
                    setMessagetCopied(Array(dataMessage.length).fill(false));

                }} selectedMessage={selectedMessage} messageCopied={messageCopied} copyToMessage={copyToMessage} message={selectedMessage !== null ? dataMessage[selectedMessage].desc : ''} setOpenMassege={setOpenMassege} />
            }
            {
                openAvatar && <AvatarModal inputRef={inputRef} setSelectedImage={setSelectedImage} selectedImage={selectedImage} handleImageChange={handleImageChange} saveAvatar={saveAvatar} setOpenAvatar={setOpenAvatar} />
            }
            {
                imageModal && <ImageModals setSelectedImage={setSelectedImage} selectedImage={selectedImage} setOpen={setImageModal} languageData={languageData} />
            }

            <div className={`fixed right-2 bottom-4 sm:right-8 sm:bottom-8 z-[99] ${menuOpen && 'hidden'}`}>
                <img onClick={e => setChatModal(true)} className='w-[24px] sm:w-12 cursor-pointer' src={design === '0' ? chatImage : require('../images/NewDesign/chatBtn.png')} alt="Chat" />
            </div>
            <div className={`fixed left-2 bottom-4 sm:left-8 sm:bottom-8 z-[99] ${menuOpen && 'hidden'}`}>
                <img onClick={e => setToolInfo(true)} className='w-[24px] sm:w-12 cursor-pointer' src={infoBtn} alt="Chat" />
            </div>
            {
                toolInfo && <ToolTipInfo setToolInfo={setToolInfo} languageData={languageData} />
            }

        </>
    )
}

export default Main