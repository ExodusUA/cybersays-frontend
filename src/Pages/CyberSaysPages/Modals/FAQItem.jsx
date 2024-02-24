import React, { useState } from 'react'
import plus from '../../../images/activeLink2.png'
import minus from '../../../images/activeLink3.png'
import { Link } from 'react-router-dom'

function FAQItem({ data }) {

    const [open, setOpen] = useState(false)

    return (
        <div className='w-full md:w-[650px] cursor-pointer box-border m-auto ' onClick={e => setOpen(!open)}>

            <div className='flex justify-between py-[20px] items-center'>
                <p className={`text-[16x] duration-200 saira font-semibold text-white`}>{data.question}</p>
                <div className='mr-2'>
                    {
                        open
                            ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17L12 7L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 7L12 17L2 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                    }
                </div>
            </div>
            {
                open && <>
                    <div >
                        {
                            data.answers.map((item, index) => (
                                <p className='text-[#D9D9D9] text-[14px] saira font-medium mb-2'>{item}</p>
                            ))
                        }
                    </div>
                </>
            }

            <hr className=' opacity-[0.4]' />
        </div>
    )
}

export default FAQItem