import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuModal from '../Components/MenuModal'
import DeleteConfirm from '../Components/DeleteConfirm'
import Homepage from './CyberSaysPages/Homepage'
import HeaderMenu from '../Components/HomePage/HeaderMenu'
import CyberSaysMobileMenu from '../Components/CyberSaysMobileMenu'
import RaffleTickets from './CyberSaysPages/RaffleTickets'
import AvatarModal from '../Components/Profile and Refferals Page/AvatarModal'
import Double from './CyberSaysPages/Double'
import MyReferralsModal from '../Components/Profile and Refferals Page/MyReferralsModal'
import BottomMenu from '../Components/HomePage/BottomMenu'
import History from '../Components/Transactions/History'
import MyTickets from '../Components/Transactions/MyTickets'
import Withdraw from '../Components/Transactions/Withdraw'
import Terms from './CyberSaysPages/Terms'
import Refferals from './CyberSaysPages/Refferals'
import Competition from './CyberSaysPages/Competition'

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
           <Competition />
            <BottomMenu />
            {
                menuOpen === true && <CyberSaysMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            }
           

        </>
    )
}

export default Main