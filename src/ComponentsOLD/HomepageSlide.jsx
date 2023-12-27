import React from 'react';

function HomepageSlide({ data, screenWidth }) {
    return (
        <div className='h-full relative'>
            <img className='w-full h-full object-cover' src={screenWidth > 1023 ? data.image : data.mobile} alt="Image" />
            <div className='absolute black-gradient h-full w-full top-0'></div>
        </div>
    );
}

export default HomepageSlide;