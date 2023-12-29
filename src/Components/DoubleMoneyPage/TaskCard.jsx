import React from 'react'
import notReady from '../../images/CyberSaysPage/card_notReady.png'
import done from '../../images/CyberSaysPage/card_done.png'

function TaskCard({ state, background }) {
    return (
        <div>
            <div style={{ background: background }} className={` w-full rounded-[20px] p-2`}>
                {state === 'active' ?
                    <div className='flex justify-between items-center'>
                        <p className='saira text-[12px] font-medium'>1. Register to ImLive  🎉</p>
                        <img className='w-[18px] h-[18px]' src={notReady} alt="notReady" />
                    </div> : state === 'inactive'
                        ? <div>inactive</div> : <div className='flex justify-between items-center'>
                            <p className='saira text-[12px] font-medium'>1. Register to ImLive  🎉</p>
                            <img className='w-[18px] h-[18px]' src={done} alt="done" />
                        </div>
                }

            </div>
        </div>
    )
}

export default TaskCard
