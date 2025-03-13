import React, {useState} from "react";

function Login() {
  const [inputType, setInputType] = useState("password");
  const showPassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };
  return (
    <>
      <main className="relative bg-[url(src/assets/background.png)] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          className="tickitz pt-14 mx-auto relative z-10"
          src="src/assets/tickitz.svg"
          alt="tickitz-logo"
        />
        <form className="relative z-10 flex flex-col gap-7 my-5 mx-8 md:mx-auto py-6 px-16 bg-white rounded-xl md:w-xl">
          <section className="mt-6">
            <label
              className="font-normal text-title-info-first text-"
              htmlFor="email"
            >
              Email
            </label>
            <div className="input-wrapper">
              <input
                className="input-form border-gray-300"
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>
          {/* isi element small dengan validation logic */}
          </section>
          <section>
            <label className="text-title-info-first" htmlFor="password">
              Password
            </label>
            <div className="input-wrapper flex items-center justify-between outline outline-gray-300 rounded">
              <input
                className="input-form border-none focus:outline-none "
                type={inputType}
                name="password"
                id="password"
                placeholder="ex: password123."
              />
              <a
                type="button"
                id="show-password"
                className="pr-4"
                onClick={showPassword}
              >
                <img
                  src="src/assets/show-password-dashed.svg"
                  alt="show password"
                  width="20"
                  height="20"
                />
              </a>
            </div>
            {/* isi element small dengan validation logic */}
          </section>
          <button
            className="bg-primary text-background rounded h-12"
            type="submit"
          >
            Login
          </button>
          {/* <!-- Change to submit type later! --> */}
          <section className="or">
            <section className="flex justify-center">
              <p className="text-title-info-first">
                already have an account? <a href="#">Login</a>
              </p>
            </section>
            <section className="flex justify-center items-center w-full">
              <div className="border w-full border-gray-200 "></div>
              <p className="mx-3 my-5 text-secondary">Or</p>
              <div className="border w-full border-gray-200 "></div>
            </section>
          </section>
          <section className="flex justify-around">
            <a href="#" className="flex gap-3 p-5 rounded-xl shadow-md">
              <img
                className="mx-auto"
                src="src/assets/google-logo.svg"
                alt="google"
              />
              <p className="hidden md:block">Google</p>
            </a>
            <a href="#" className="flex gap-3 p-5 rounded-xl shadow-md">
              <img
                className="mx-auto"
                src="src/assets/facebook-logo.svg"
                alt="facebook"
              />
              <p className="hidden md:block">Facebook</p>
            </a>
          </section>
        </form>
      </main>
      </>
  )
}

export default Login