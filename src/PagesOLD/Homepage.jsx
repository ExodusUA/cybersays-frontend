import React, { useState } from 'react'
import Milestone1 from './Milestone/Milestone1'
import Milestone2 from './Milestone/Milestone2'
import MileStone3 from './Milestone/MileStone3'
import MileStoneHeader from './Milestone/MileStoneHeader'
import ProgressBar from '../ComponentsOLD/ProgressBar'
import { useQuery } from '@tanstack/react-query'
import userAPI from '../Requests/user'
import PaymentChoose from '../ComponentsOLD/PaymentChoose'

function Homepage({ languageData, setMenuOpen }) {

  const [userData, setUserData] = useState(null)
  const [imLiveURL, setImLiveURL] = useState(null);
  const [payModalOpen, setPayModalOpen] = useState(false)

  useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const res = await userAPI.getUserData()
      setUserData(res)
      setImLiveURL(`https://imlive.com/wmaster.ashx?QueryID=197&WID=126670106835&linkID=701&from=freevideo6&promocode=${res?.id}`)
      return res
    }
  })

  return (
    <div className='bg-milestone pb-10'>
      <MileStoneHeader userData={userData} setPayModalOpen={setPayModalOpen} setMenuOpen={setMenuOpen} />
      <ProgressBar userData={userData} />
      <Milestone1 userData={userData} languageData={languageData} imLiveURL={imLiveURL} />
      <Milestone2 userData={userData} languageData={languageData} imLiveURL={imLiveURL} />
      <MileStone3 userData={userData} languageData={languageData} />

      {
        payModalOpen && <PaymentChoose setSelectPayment={setPayModalOpen} />
      }
    </div>


  )
}

export default Homepage