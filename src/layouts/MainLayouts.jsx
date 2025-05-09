import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

function Main() {
  return (
    <>
      <Navbar />
        <main className='relative'>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default Main