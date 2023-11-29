import React from 'react'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <Link to='/login'>
        <button className='px-4 py-2 rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 '>Log in/Sign up</button>
    </Link>
  )
}

export default LoginButton