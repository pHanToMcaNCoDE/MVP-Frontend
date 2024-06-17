import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Asidebar from '../../Page Components/Asidebar'

const AdminLayout = () => {

  const [clicked, setClicked] = useState(false);
  return (
    <main className={`${clicked ? `left-[65px]` : `left-[240px]`} duration-300 content`}>
        <Asidebar clicked={clicked} setClicked={setClicked}/>
        <Outlet/>
    </main>
  )
}

export default AdminLayout