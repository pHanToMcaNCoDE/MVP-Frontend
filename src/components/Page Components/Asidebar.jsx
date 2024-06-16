import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi2'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '/Coinnomad Frame.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { links } from '../../Data/links'

const Asidebar = () => {
    const location = useLocation()

    const { pathname } = location

    console.log(pathname)
  return (
    <aside className='fixed w-[260px] h-full bg-[#F7F7F7] z-50 top-0 left-0'>
        <Link to={'/dashboard'} className='flex justify-between items-center py-[40px] px-[24px] h-[120px] gap-[24px]'>
            <RxHamburgerMenu className='text-[1.25rem]' />
            <img className='w-[159.846px] h-[34.615px] object-cover' src={logo} alt='Coinomad Logo'></img>
        </Link>
        <ul className='inline-flex items-start flex-col w-full'>
            {
                links.map((link, index) => (
                    <NavLink key={index} to={link.route} className={({isActive}) => isActive ?  `text-[#2F4EED] rounded-r-sm font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative` : `text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative`}>
                        <div className='gap-[16px] flex items-center'>
                            {link.icon}
                            <span className='text-[.875rem]'>{link.name}</span>
                        </div>
                        <div className={`absolute rounded-full bg-[#2F4EED] w-[4px] h-[32px] right-0 top-auto ${pathname === link.route ? 'flex' : 'hidden'}`}></div>
                    </NavLink>
                ))
            }
        </ul>
    </aside>
  )
}

export default Asidebar