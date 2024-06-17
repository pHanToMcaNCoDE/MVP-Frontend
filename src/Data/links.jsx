import { HiOutlineUsers } from 'react-icons/hi2'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'

export const links = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <MdDashboard className='text-[1.35rem]' />,
        route: '/dashboard',
    },
    {
        id: 2,
        name: 'Employees',
        icon: <HiOutlineUsers className='text-[1.35rem]' />,
        route: '/employees',
    },
    {
        id: 3,
        name: 'Settings',
        icon: <IoSettingsOutline className='text-[1.35rem]' />,
        route: '/settings',
    }
]