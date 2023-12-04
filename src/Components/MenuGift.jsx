import React, { useState } from 'react';
import link1 from '../images/menuLink1.png';
import link2 from '../images/menuLink2.png';
import link3 from '../images/menuLink3.png';
import link4 from '../images/menuLink4.png';
import activeLink2 from '../images/activeLink2.png';
import activeLink3 from '../images/activeLink3.png';
import activeLink4 from '../images/activeLink4.png';


function MenuGift() {

    const [selectedLink, setSelectedLink] = useState(link1);

    return (
        <div className=' absolute bottom-[20px] bg-[#DDD2DD] flex justify-between items-center rounded-[50px] px-[10px] py-[5px]'>
            <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                src={selectedLink === 1 ? link1 : link1}
                onClick={() => setSelectedLink(1)}
                alt="link1" />
            <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                src={selectedLink === 2 ? activeLink2 : link2}
                onClick={() => setSelectedLink(2)}
                alt="link1" />
            <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                src={selectedLink === 3 ? activeLink3 : link3}
                onClick={() => setSelectedLink(3)}
                alt="link1" />
            <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                src={selectedLink === 4 ? activeLink4 : link4}
                onClick={() => setSelectedLink(4)}
                alt="link1" />
        </div>
    )
}

export default MenuGift
