import React from 'react'
import logoCyber from '../images/logoCyberYellow.png'
import { Link } from 'react-router-dom'

function HeaderProfile() {
    return (
        <div className=' gradient-milestoneHeader py-3 '>
            <div className='flex items-center justify-center max-w-[1170px] w-full m-auto px-3 '>
                <div>
                    <div className='flex items-center gap-3 justify-center '>
                        <Link to='/'>
                            <img className=' w-[140px] lg:w-[200px] mb-[-5px]' src={logoCyber} alt="Image" />
                        </Link>

                    </div>
                    <div className='bg-white w-full h-[2px] mt-2 m-auto  max-w-[540px]'></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderProfile
