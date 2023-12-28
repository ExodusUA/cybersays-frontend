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
            <RaffleTickets />
            <BottomMenu />
            {
              menuOpen === true && <CyberSaysMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            }
            <LeaderboardModal />
        </>
    )
}

export default Main