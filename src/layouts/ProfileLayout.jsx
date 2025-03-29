import React from "react";
import {Outlet} from "react-router";
import Navbar from "../components/Navbar";

function ProfileLayout() {
  return (
    <>
      <Navbar />
      <div className="bg-[#A0A3BD33] pb-5 relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_1fr]">
        {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
          {/* <NavProfile /> */}
            <Outlet /> 
      </div>
    </>
  );
}

// function NavProfile() {
//   return (
//     <nav className="navProfile col-span-2 bg-white py-3 flex justify-center gap-5">
//       <NavLink
//         to="/profile"
//         className={({isActive}) =>
//           isActive ? "border-b-2 border-primary pb-3 tracking-wider" : "tracking-wider"
//         }
//       >
//         Detail Account
//       </NavLink>
//       <NavLink
//         to="/profile/history"
//         className={({isActive}) =>
//           isActive ? "border-b-2 border-primary pb-3 tracking-wider" : "tracking-wider"
//         }
//       >
//         Order History
//       </NavLink>
//     </nav>
//   );
// }

export default ProfileLayout;
