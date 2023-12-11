import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import AuthCheck from '../hoc/AuthCheck'
import MenuModal from '../Components/MenuModal'
import Profile from './Profile'

function Main({ languageData }) {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {
                menuOpen && <MenuModal setModalOpen={setMenuOpen} />
            }
           
            <Routes>
                <Route path="/" element={<AuthCheck><Homepage setMenuOpen={setMenuOpen} languageData={languageData} /></AuthCheck>} />
                <Route path="/profile" element={<AuthCheck><Profile languageData={languageData} /></AuthCheck>} />

            </Routes>
        </>
    )
}

export default Main