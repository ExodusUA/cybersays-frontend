import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuModal from '../Components/MenuModal'
import DeleteConfirm from '../Components/DeleteConfirm'
import BottomMenu from '../Components/BottomMenu'

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
                {
                    /*
                    <Route path="/" element={<AuthCheck><Homepage setMenuOpen={setMenuOpen} languageData={languageData} /></AuthCheck>} />
                <Route path="/profile" element={<AuthCheck><Profile languageData={languageData} /></AuthCheck>} />
                    */
                }

            </Routes>

            <BottomMenu />
        </>
    )
}

export default Main