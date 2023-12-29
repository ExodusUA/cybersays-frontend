import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuModal from '../Components/MenuModal'
import DeleteConfirm from '../Components/DeleteConfirm'
import BottomMenu from '../Components/BottomMenu'
import Homepage from './CyberSaysPages/Homepage'
import HeaderMenu from '../Components/HeaderMenu'
import CyberSaysMobileMenu from '../Components/CyberSaysMobileMenu'
import RaffleTickets from './CyberSaysPages/RaffleTickets'
import LeaderboardModal from '../Components/LeaderboardModal'
import AvatarModal from '../Components/AvatarModal'
import Double from './CyberSaysPages/Double'
import MyReferralsModal from '../Components/MyReferralsModal'
import TourModal from '../Components/TourModal'
import Congrats from '../Components/Congrats'

function Main({ languageData }) {

    const [menuOpen, setMenuOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    return (
        <>
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
            <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Double />
            <BottomMenu />
            {
                menuOpen === true && <CyberSaysMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            }

            {/* <MyReferralsModal /> */}

            {/* <TourModal /> */}

            <Congrats />

        </>
    )
}

export default Main