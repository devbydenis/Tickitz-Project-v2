import {Outlet} from "react-router";
import NavbarAdmin from "../components/NavbarAdmin";

function AdminLayouts() {
  return (
    <>
      <NavbarAdmin />
      <main className="bg-[#A0A3BD33] h-screen">
        <Outlet />
      </main>
    </>
  );
}



export default AdminLayouts;
