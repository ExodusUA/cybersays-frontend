import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import policyData from '../Pages/socialPageJSON/policy_en.json';
import LanguageSocial from '../Components/Language/LanguageSocial';

function Policy() {
    return (
        <div>
            <HeaderProfile />
            <div className='absolute right-2 lg:right-[20px] top-1 lg:top-3 flex items-center align-start z-20'>
                <LanguageSocial />
            </div>

            <div className='max-w-[1300px] px-2 m-auto overflow-scroll h-screen pb-[50px] mt-[20px]'>
                {policyData.map((paragraph, index) => (
                    <p className='text-black saira text-[14px] lg:text-[16px] mt-2' key={index}>{paragraph}</p>
                ))}
            </div>

        </div>
    );
}

export default Policy
