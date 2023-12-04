import React, { useState, useEffect } from 'react';
import link1 from '../images/menuLink1.png';
import link2 from '../images/menuLink2.png';
import link3 from '../images/menuLink3.png';
import link4 from '../images/menuLink4.png';
import activeLink2 from '../images/activeLink2.png';
import activeLink3 from '../images/activeLink3.png';
import activeLink4 from '../images/activeLink4.png';
import { Link, useLocation } from 'react-router-dom'


function MobileMenu() {

    const [activePage, setActivePage] = useState('');

    const location = useLocation();

    useEffect(() => {
        const updateActivePage = () => {
            const currentPath = window.location.pathname;
            setActivePage(currentPath.replace('/', ''));
        };

        const unlisten = () => { };
        unlisten();

        updateActivePage();

        return () => unlisten();
    }, [location]);


    return (
        <div className='flex justify-center w-screen fixed bottom-10 z-[999]'>
            <div className=' bg-[#DDD2DD] flex justify-between items-center rounded-[50px] px-[10px] py-[5px] '>
                <Link to='#'>
                    <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                        src={activePage === 'menu' ? link1 : link1}
                        alt="link1" />
                </Link>
                <Link to='/gifts'>
                    <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                        src={activePage === 'gifts' ? activeLink2 : link2}
                        alt="link1" />
                </Link>
                <Link to='/tasks'>
                    <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                        src={activePage === 'tasks' ? activeLink3 : link3}
                        alt="link1" />
                </Link>
                <Link to='/profile'>
                    <img className='w-[32px] h-[32px] mx-[5px] cursor-pointer'
                        src={activePage === 'profile' ? activeLink4 : link4}
                        alt="link1" />
                </Link>

            </div>
        </div>

    )
}

export default MobileMenu
