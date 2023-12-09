import React from 'react'

import Milestone1 from './Milestone/Milestone1'
import Milestone2 from './Milestone/Milestone2'
import MileStone3 from './Milestone/MileStone3'
import MileStoneHeader from './Milestone/MileStoneHeader'
import ProgressBar from '../Components/ProgressBar'

function Homepage() {



  return (
    <div className=' bg-milestone'>


      <MileStoneHeader />
      <ProgressBar />
      <Milestone1 />
      <Milestone2 />
      <MileStone3 />
    </div>


  )
}

export default Homepage