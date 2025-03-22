import React from "react";
import {Outlet} from "react-router";

function AuthLayouts() {
  return (
    <>
      <main
        className={`relative bg-cover bg-center h-full py-5`}
        style={{backgroundImage: "url(src/assets/background.png)"}}
      >
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayouts;
