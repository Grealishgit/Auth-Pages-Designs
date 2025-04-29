import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth1 from './Pages/Auth1'
import Navbar from './components/Navbar'
import Auth2 from './Pages/Auth2'
import Auth3 from './Pages/Auth3'
import Auth4 from './Pages/Auth4'
import Auth5 from './Pages/Auth5'


const app = () => {
  return (
    <>
      <Navbar />
      <Routes>
       {/*  <Route path='/' element={<Auth1 />} /> */}
        {/*  <Route path='/' element={<Auth2 />} /> */}
        {/*   <Route path='/' element={<Auth3 />} /> */}
        {/* <Route path='/' element={<Auth4 />} /> */}
        <Route path='/' element={<Auth5 />} />


      </Routes>
    </>

  )
}

export default app