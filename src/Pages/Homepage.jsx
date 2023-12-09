import React, { useState } from 'react'
import Milestone1 from './Milestone/Milestone1'
import Milestone2 from './Milestone/Milestone2'
import MileStone3 from './Milestone/MileStone3'
import MileStoneHeader from './Milestone/MileStoneHeader'
import ProgressBar from '../Components/ProgressBar'
import MenuModal from '../Components/MenuModal'
import DeleteConfirm from '../Components/DeleteConfirm'

function Homepage() {

  const [userModalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className=' bg-milestone'>

      <button onClick={e => setModalOpen(true)} >open</button>
      <MileStoneHeader />
      <ProgressBar />
      <Milestone1 />
      <Milestone2 />
      <MileStone3 />


      {userModalOpen && <MenuModal setModalOpen={setModalOpen} setDeleteOpen={setDeleteOpen} />}
      {deleteOpen && <DeleteConfirm setModalOpen={setModalOpen} setDeleteOpen={setDeleteOpen} />}
    </div>


  )
}

export default Homepage