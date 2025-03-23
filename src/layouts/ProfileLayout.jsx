import React from 'react'
import { Outlet } from 'react-router'

function ProfileLayout() {
  return (
    <>
      <p>Profile Layout avatar and menu history or account</p>
      <Outlet />
    </>
  )
}

export default ProfileLayout