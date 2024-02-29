import React from 'react';

function HomepageSlide({ data, screenWidth }) {
    return (
        <div className='h-full relative'>
            <img className='w-full h-full object-cover' src={screenWidth > 1023 ? data.image : data.mobile} alt="Image" />
            
        </div>
    );
}

export default HomepageSlide;