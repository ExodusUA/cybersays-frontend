import React from 'react'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <Link to='/login'>
        <button className='px-[30px] py-[14px] rounded-lg font-semibold gradient saira text-[16px]'>Log in/Sign up</button>
    </Link>
  )
}

export default LoginButton