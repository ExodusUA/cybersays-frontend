import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthError from './Auth/AuthError'
import { jwtDecode } from 'jwt-decode'


function Token() {

    const navigate = useNavigate()
    const [error, setError] = useState(false)
    let urlToken = window.location.href.split('/')[4]

    useEffect(() => {
        async function checkToken() {
            const decodedToken = jwtDecode(urlToken)
            if (decodedToken.id === undefined) return setError(true)
            window.localStorage.setItem('token', urlToken)
        
            setTimeout(() => {
                navigate('/')
            }, 100)
        }
        checkToken()
    }, [urlToken])

    return (
        <AuthError error={error} />
    )
}

export default Token