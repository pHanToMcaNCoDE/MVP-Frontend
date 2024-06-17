import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Asidebar from '../../Page Components/Asidebar'

const AdminLayout = () => {

  const [clicked, setClicked] = useState(false);
  return (
    <main className={`${clicked ? `w-[97%] left-[50px]` : `w-[83%] left-[240px]`} duration-300 relative`}>
        <Asidebar clicked={clicked} setClicked={setClicked}/>
        <Outlet/>
    </main>
  )
}

export default AdminLayout