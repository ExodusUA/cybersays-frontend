import React,{ useState } from 'react'
import user from '../images/userBtn.png'
import UserMenuModal from '../Components/UserMenuModal';

function UserMenuButton() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    return (
        <div onClick={e => setUserMenuOpen(true)}>
            <button className='bg-[#83869b] bg-opacity-25 flex items-center gap-2 px-[25px] py-[10px] border-[1px] border-[#FF1CBB] rounded-[12px]'>
                <p className='text-white font-normal text-[14px] saira'>Welcome back, &#123;Use Name&#125;</p>
                <img className='w-[20px]' src={user} alt="user" />
            </button>
            {
                (userMenuOpen === true) ? <UserMenuModal setUserMenuOpen={setUserMenuOpen} /> : ''
            }
        </div>
    )
}

export default UserMenuButton
