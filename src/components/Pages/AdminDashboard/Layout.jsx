import React from 'react'
import { Outlet } from 'react-router-dom'
import Asidebar from '../../Page Components/Asidebar'

const Layout = () => {
  return (
    <main>
        <Asidebar/>
        <Outlet></Outlet>
    </main>
  )
}

export default Layout