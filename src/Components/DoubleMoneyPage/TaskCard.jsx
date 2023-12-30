import React from 'react'
import notReady from '../../images/CyberSaysPage/card_notReady.png'
import done from '../../images/CyberSaysPage/card_done.png'

function TaskCard({ state, background, data, index }) {

    const getMarkup = () => {
        switch (state) {
            case 'active': return activeState()
            case 'finished': return finishedState()
            case 'inactive': return inactiveState()
            default: return null
        }
    }

    const activeState = () => {
        return <>
            <div className='flex justify-between items-center'>
                <p className='saira text-[12px] font-medium'>{index}. {data?.taskTitleOpen}</p>
                <img className='w-[18px] h-[18px]' src={notReady} alt="notReady" />
            </div>

            <div className='flex justify-between'>
                {
                    data?.taskBlocks?.map((task, index) => {
                        return <div key={index} className='flex flex-col items-center mt-2'>
                            <img className='w-[20px]' src={task?.taskImage} alt="Task Icon" />
                            <p className='saira text-[12px] font-medium text-center'>{task?.taskText}</p>
                        </div>
                    })
                }
            </div>

            <div className='flex justify-center my-2'>
                <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-1'>{data?.taskButton}</button>
            </div>
            
        </>
    }

    const finishedState = () => {
        return <div className='flex justify-between items-center'>
            <p className='saira text-[12px] font-medium'>{index}. {data?.taskTitle}</p>
            <img className='w-[18px] h-[18px]' src={done} alt="done" />
        </div>
    }

    const inactiveState = () => {
        return <div className='flex justify-between items-center'>
            <p className='saira text-[12px] font-medium'>{index}. {data?.taskTitle}</p>
            <img className='w-[18px] h-[18px]' src={notReady} alt="notReady" />
        </div>
    }


    return (

        <div style={{ background: background }} className={`w-full rounded-[20px] p-2 my-2 ${state === 'finished' ? 'opacity-50' : state === 'inactive' ? 'opacity-70' : 'opacity-100'}`}>
            {
                getMarkup()
            }
        </div>

    )
}

export default TaskCard
