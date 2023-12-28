import React, { useState, useEffect, useRef } from 'react';
import userImage from '../images/userBtn.png';
import UserMenu from './UserMenu';

function UserMenuButton({ user, setAccountDelete }) {
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
      <button className='bg-[#83869b] bg-opacity-25 flex items-center gap-2 px-[10px] lg:px-[25px]  py-[13px] border-[1px] border-[#FF1CBB] rounded-[12px] gradient-userButton' onClick={() => setUserMenuOpen(!userMenuOpen)}>
        <p className='text-white font-normal text-[14px] saira max-w-[170px] lg:max-w-[200px] truncate'>Welcome back, {user?.email}</p>
        <img className='w-[20px]' src={userImage} alt="user" />
      </button>
      {userMenuOpen && <UserMenu setUserMenuOpen={setUserMenuOpen} setAccountDelete={setAccountDelete} />}
    </div>
  );
}

export default UserMenuButton;
