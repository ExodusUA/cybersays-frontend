import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import AuthCheck from '../hoc/AuthCheck'
import MenuModal from '../Components/MenuModal'
import Profile from './Profile'
import DeleteConfirm from '../Components/DeleteConfirm'

function Main({ languageData }) {

    const [menuOpen, setMenuOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    return (
        <>
            {
                menuOpen && <MenuModal setModalOpen={setMenuOpen} setDeleteOpen={setDeleteOpen} />
            }

            {
                deleteOpen && <DeleteConfirm setDeleteOpen={setDeleteOpen} />
            }
           
            <Routes>
                <Route path="/" element={<AuthCheck><Homepage setMenuOpen={setMenuOpen} languageData={languageData} /></AuthCheck>} />
                <Route path="/profile" element={<AuthCheck><Profile languageData={languageData} /></AuthCheck>} />

            </Routes>
        </>
    )
}

export default Main