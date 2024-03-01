import React from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import { Link } from 'react-router-dom';

function SocialLink({ setOpen }) {
    const { design } = useDesign()
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 lg:flex'>

            <div className=' m-auto max-w-[600px] w-full justify-center'>
                <div className='flex justify-end mb-2'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div>
                    <Link target='_blank' to={'/policy'}>
                        <p className='text-center saira underline text-[14px] lg:text-[18px] cursor-pointer pt-2'>Cookie Policy</p>
                    </Link>
                    <Link target='_blank' to={'/privacy'}>
                        <p className='text-center saira underline text-[14px] lg:text-[18px] cursor-pointer pt-2'>Privacy Policy</p>
                    </Link>
                    <Link target='_blank' to={'/terms'}>
                        <p className='text-center saira underline text-[14px] lg:text-[18px] cursor-pointer pt-2'>Terms of Use</p>
                    </Link>
                    <Link target='_blank' to={'/contest-terms'}>
                        <p className='text-center saira underline text-[14px] lg:text-[18px] cursor-pointer pt-2'>Contest Terms</p>
                    </Link>
                    <Link target='_blank' to={'/promotion-terms'}>
                        <p className='text-center saira underline text-[14px] lg:text-[18px] cursor-pointer pt-2'>Promotin Terms</p>
                    </Link>
                    <Link target='_blank' to={'/affiliation-terms'}>
                        <p className='text-center saira underline text-[14px] lg:text-[18px] cursor-pointer pt-2'>Affliation Terms</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialLink
