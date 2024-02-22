import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import user from '../Requests/user'

function Verify({ userData }) {

    const navigate = useNavigate()

    const handleOpenPasswordPrompt = () => {
        const enteredPassword = prompt('Enter password:');
        if (enteredPassword !== null) {

            verifyUser(enteredPassword)
        } else {
            navigate('/')
        }
    };

    useEffect(() => {
        handleOpenPasswordPrompt()
    }, [])

    const verifyUser = async (password) => {

        try {

            const token = await user.getModeratorData(password, userData?.uid)
            alert(token)
            window.localStorage.setItem('token', token.data.token)
            navigate('/')
        } catch (error) {
           console.log(error)
            //alert('Invalid password')
            //handleOpenPasswordPrompt()
        }

    }

    return (
        <div className='h-screen w-screen'>

        </div>
    )
}

export default Verify