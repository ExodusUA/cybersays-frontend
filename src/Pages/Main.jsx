import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Privacy from '../Components/Privacy'
import Terms from '../Components/Terms'
import FormDeleteConfirm from '../Components/FormDeleteConfirm'

function Main() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage  />} />
                <Route path="/privacy" element={ <Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/formDeleteConfirm" element={<FormDeleteConfirm />} />
            </Routes>
        </>
    )
}

export default Main