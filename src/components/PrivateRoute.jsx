// import React, { useContext } from 'react'
// import { userContext } from '../context/userContext'
// import { useLocation } from 'react-router'

// function PrivateRoute({children, redirectTo}) {
//   const { user } = useContext(userContext)
//   const location = useLocation()
  
//   // Case 1
//   if (!user.email || !user.password) {
//     return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
//   }

//   return children 
// }

// export default PrivateRoute