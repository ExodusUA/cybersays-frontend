import React, { useState, useEffect, useRef } from 'react';
import user from '../images/userBtn.png';
import UserMenuModal from '../Components/UserMenuModal';

function UserMenuButton() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const outsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef}>
      <button className='bg-[#83869b] bg-opacity-25 flex items-center gap-2 px-[25px] py-[10px] border-[1px] border-[#FF1CBB] rounded-[12px]' onClick={() => setUserMenuOpen(true)}>
        <p className='text-white font-normal text-[14px] saira'>Welcome back, &#123;Use Name&#125;</p>
        <img className='w-[20px]' src={user} alt="user" />
      </button>
      {userMenuOpen && <UserMenuModal setUserMenuOpen={setUserMenuOpen} />}
    </div>
  );
}

export default UserMenuButton;
