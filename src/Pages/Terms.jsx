import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import termsData from '../Pages/terms_paragraphs.json';

function Terms() {

    return (
        <div>
            <HeaderProfile />
            <div className='max-w-[1300px] px-2 m-auto overflow-scroll h-screen pb-[50px] mt-[20px]'>
                {termsData.map((paragraph, index) => (
                    <p className='text-black saira text-[14px] lg:text-[16px] mt-2' key={index}>{paragraph}</p>
                ))}
            </div>

        </div>
    );
}

export default Terms
