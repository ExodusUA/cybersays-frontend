import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import termsData from '../Pages/terms_paragraphs.json';

function Terms() {

    return (
        <div>
            <HeaderProfile />
            <div className='max-w-[1700px] px-2 m-auto overflow-scroll h-screen pb-[50px]'>
                {termsData.map((paragraph, index) => (
                    <p className='text-black saira' key={index}>{paragraph}</p>
                ))}
            </div>

        </div>
    );
}

export default Terms
