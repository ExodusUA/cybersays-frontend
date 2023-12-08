import React from 'react'
import logoCyber from '../images/logoCyberPurple.png'
import Milestone1 from './Milestone/Milestone1'
import Milestone2 from './Milestone/Milestone2'
import MileStone3 from './Milestone/MileStone3'

function Homepage() {

  

  return (
    <div>
      <div className='flex items-center gap-3 justify-center mt-3'>
        <img className=' w-[140px] mb-[-5px]' src={logoCyber} alt="Image" />
        <p className='text-[#1E1E1E] font-semibold text-[20px] saira'>Just lost it's mind 😱</p>
      </div>

      <div className='gradient-line w-[96%] h-[2px] mt-2 m-auto  '></div>
        <Milestone1 />
        <Milestone2 />
        <MileStone3 />
    </div>


  )
}

export default Homepage