import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import AuthCheck from '../hoc/AuthCheck'

function Main({ languageData }) {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthCheck><Homepage languageData={languageData} /></AuthCheck>} />
            </Routes>
        </>
    )
}

export default Main