import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

function Main() {
  return (
    <>
      <Navbar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default Main