import React from "react";
import {Outlet} from "react-router";

function AuthLayouts() {
  return (
    <>
      <main
        className={`relative bg-[url(src/assets/background.png)] bg-cover bg-center h-screen`}
      >
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayouts;
