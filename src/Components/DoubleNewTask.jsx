import React from 'react'

function DoubleNewTask() {
    return (
        <div className='max-w-[600px] w-full m-auto'>
            <div style={{ border: '2px solid var(--Linear, #8FE5EC)' }} className='w-full bg-newTaskBg p-4 h-[100px] bg-cover bg-no-repeat rounded-[14px] flex justify-end'>
            <div style={{
  borderRadius: '50%',
  border: '2px solid',
  borderImage: 'linear-gradient(180deg, #FA047A 0%, #FE8D4D 100%) 1'
}}>1</div>
            </div>
        </div>
    )
}

export default DoubleNewTask
