import React, { useEffect, useState } from 'react'
import { checkTokenValidity } from '../Requests/auth'
import { useNavigate } from 'react-router-dom'
import AuthError from './Auth/AuthError'


function Token() {

    const navigate = useNavigate()
    const [error, setError] = useState(false)
    let urlToken = window.location.href.split('/')[4]

    useEffect(() => {
        async function checkToken() {
            try {
                await checkTokenValidity(urlToken)
                localStorage.setItem('token', urlToken)
                navigate('/')
            } catch (error) {
                setError(true)
            }
        }
        checkToken()
    }, [urlToken])

    return (
        <AuthError error={error} />
    )
}

export default Token