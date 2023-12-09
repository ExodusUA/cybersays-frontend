import React, { useState } from 'react'
import Milestone1 from './Milestone/Milestone1'
import Milestone2 from './Milestone/Milestone2'
import MileStone3 from './Milestone/MileStone3'
import MileStoneHeader from './Milestone/MileStoneHeader'
import ProgressBar from '../Components/ProgressBar'
import { useQuery } from '@tanstack/react-query'
import userAPI from '../Requests/user'

function Homepage({languageData}) {

  const [userData, setUserData] = useState(null)
  const [imLiveURL, setImLiveURL] = useState(null);

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
    <div className='bg-milestone'>
      <MileStoneHeader userData={userData} />
      <Milestone1 userData={userData} languageData={languageData} imLiveURL={imLiveURL} />
      <Milestone2 userData={userData} languageData={languageData} imLiveURL={imLiveURL} />
      <MileStone3 userData={userData} languageData={languageData} />
    </div>


  )
}

export default Homepage