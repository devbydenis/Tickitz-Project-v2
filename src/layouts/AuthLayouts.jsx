import React from "react";
import {Outlet} from "react-router";

function AuthLayouts() {
  return (
    <>
      <main
        className={`relative bg-cover bg-center h-screen`}
        style={{backgroundImage: "url(src/assets/background.png)"}}
      >
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayouts;
