import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth1 from './Pages/Auth1'
import Navbar from './components/Navbar'


const app = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Auth1 />} />

    </Routes>
    </>
    
  )
}

export default app