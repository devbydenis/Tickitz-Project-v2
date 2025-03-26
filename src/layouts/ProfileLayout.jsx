import React from "react";
import {NavLink, Outlet} from "react-router";
import avatar from "../assets/avatar.png";
import star from "../assets/star.svg";

function ProfileLayout() {
  return (
    <div className="bg-[#A0A3BD33]">
      <NavProfile />
      <AccountInfo />
      <Outlet />
    </div>
  );
}

function NavProfile() {
  return (
    <nav className="bg-white py-3 flex justify-center gap-5">
      <NavLink
        to="/profile/account"
        className={({isActive}) =>
          isActive ? "border-b-2 border-primary pb-3" : ""
        }
      >
        Detail Account
      </NavLink>
      <NavLink
        to="/profile/history"
        className={({isActive}) =>
          isActive ? "border-b-2 border-primary pb-3" : ""
        }
      >
        Order History
      </NavLink>
    </nav>
  );
}
function AccountInfo() {
  return (
    <>
      <section className="bg-white rounded-3xl m-10 flex flex-col">
        <div className="info p-10">
          <h1 className="text-start text-title-info-first">INFO</h1>
          <img
            className="mx-auto my-8"
            src={avatar}
            alt="profile avatar"
            width={132}
            height={132}
          />
          <p className="text-center mb-3 text-xl font-bold tracking-wider">
            Jonas Rodriguez
          </p>
          <p className="text-center text-title-info-second">Moviegoers</p>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <div className="loyalty p-10 relative">
          <h1 className="text-start text-title-info-first font-semibold mb-5">
            Loyalty Poin
          </h1>
          <div className="w-full bg-primary rounded-xl p-4 text-white">
            <p className="mb-5 text-lg font-bold">Moviegoers</p>
            <p className="text-2xl">
              320 <small className="text-[10px]">points</small>
            </p>
            <div className="w-20 h-20 absolute rounded-full top-12 right-5 bg-white opacity-30"></div>
            <div className="w-20 h-20 absolute rounded-full top-18 right-3 bg-white opacity-30"></div>
            <img className="absolute top-20 right-10 w-12 h-12" src={star} alt="" />
          </div>
          <div>
            <p className="text-center text-title-info-second mt-5 mb-1.5">
              180 points become a master
            </p>
            <div className="mb-6 h-4 w-full bg-neutral-200 rounded-2xl">
              <div className="h-4 bg-primary w-1/4  rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileLayout;
