import React, {useState} from "react";
import avatar from "../../assets/avatar.png";
import star from "../../assets/star.svg";

function DetailAccount() {
  const [showEditProfile, setShowEditProfile] = useState(false);
  return (
    <>
      <AccountInfo setShowEditProfile={setShowEditProfile} />
      <AccountSettings
        showEditProfile={showEditProfile}
        setShowEditProfile={setShowEditProfile}
      />
    </>
  );
}

function AccountInfo({setShowEditProfile}) {
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
            <img
              className="absolute top-20 right-10 w-12 h-12"
              src={star}
              alt=""
            />
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
        <button
          className="border-1 py-3 mx-4 mb-6 active:scale-95 active:opacity-50 rounded-lg border-primary sm:hidden"
          type="button"
          onClick={() => setShowEditProfile(true)}
        >
          Edit Profile
        </button>
      </section>
    </>
  );
}

function AccountSettings({showEditProfile, setShowEditProfile}) {
  return (
    <div className={showEditProfile ? "block" : "hidden"}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <form className="bg-white mx-10 p-10 rounded-2xl absolute top-20">
        <button
          className="absolute top-5 right-5 text-black font-bold"
          type="button"
          onClick={() => setShowEditProfile(false)}
        >
          X
        </button>
        <h1 className="text-2xl font-bold tracking-wider mb-9">
          Account Settings
        </h1>
        <p className="border-b-2 border-gray-300 pb-2 text-base font-normal tracking-wider">
          Detail Information
        </p>
        <div>
          <label
            className="text-base font-normal text-title-info-first block pt-6 pb-3"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            className="border-1 border-secondary rounded py-3 px-6 w-full focus:outline-none"
            type="text"
            name="fullname"
            id="fullname"
          />
        </div>
        <div>
          <label
            className="text-base font-normal text-title-info-first block pt-6 pb-3"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-1 border-secondary rounded py-3 px-6 w-full focus:outline-none"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label
            className="text-base font-normal text-title-info-first block pt-6 pb-3"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <span className="flex border-1 border-secondary rounded py-3 px-6 w-full">
            <p className="border-r-2 border-gray-300 pr-3 text-secondary">
              +62
            </p>
            <input
              className="pl-3 w-full focus:outline-none"
              type="text"
              name="phone"
              id="phone"
            />
          </span>
        </div>
        <p className="border-b-2 border-gray-300 pb-2 mt-10 text-base font-normal tracking-wider">
          Account and Privacy
        </p>
        <div>
          <label
            className="text-base font-normal text-title-info-first block pt-6 pb-3"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-1 border-secondary rounded py-3 px-6 w-full focus:outline-none"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <label
            className="text-base font-normal text-title-info-first block pt-6 pb-3"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="border-1 border-secondary rounded py-3 px-6 w-full focus:outline-none"
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <button
          className="w-full font-bold bg-primary text-white py-3 px-6 rounded-lg mt-10"
          type="button"
        >
          Update Change
        </button>
      </form>
    </div>
  );
}

export default DetailAccount;
