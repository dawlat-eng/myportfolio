import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';





export default function Layout() {
const [count, setcount] = useState(0)

  return <>
    
      <Navbar/>
      {/*routing*/}
     
      <Outlet/>
      
    
  </>
}
