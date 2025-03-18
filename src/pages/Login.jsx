import React, {useState} from "react";
import {Link, useNavigate} from "react-router";
import Modal from "../components/Modal";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isLogin: false
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
      isLogin: true
    });
  };

  const validateForm = (form) => {
    const errors = {};
    const regexEmail = /\S+@S+\.\S+/;
    // const regexEmail = true

    if (!form.email.trim()) {
      errors.email = "Email is required! Cannot be blank!";
    // } else if (!regexEmail.test(form.email)) {
    } else if (regexEmail.test(form.email)) {
      errors.email = "Email format is invalid!";
    }

    if (!form.password) {
      errors.password = "Password is required! Cannot be blank!";
    } else if (form.password.length < 8) {
      errors.password = "Password must be atleast 8 character";
    }

    return errors;
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const dataRegist = JSON.parse(localStorage.getItem("user"));
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (
        dataRegist.email === formData.email &&
        dataRegist.password === formData.password
      ) {
        localStorage.setItem("user", {isLogin: true});
        setShowModal(true)
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      console.log("Submit form successfully!");
    } else {
      console.log("Submit form failed");
    }
  };

  const showPassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <img
        className="tickitz pt-14 mx-auto relative z-10 w-32 md:w-60"
        src="src/assets/tickitz.svg"
        alt="tickitz-logo"
      />
      {showModal ? (
        <div className=" absolute inset-0 bg-[#121212c2] z-20 flex justify-center items-center">
          <Modal />
        </div>
      ) : (
        <form
          className="relative z-10 flex flex-col gap-7 my-5 mx-8 md:mx-auto py-6 px-16 bg-white rounded-xl md:w-xl"
          onSubmit={handleInputSubmit}
        >
          <h1 className="text-4xl font-bold">Welcome Back👋</h1>
          <p className="text-secondary font-normal">
            Sign in with your data that you entered during your registration
          </p>
          <section className="mt-6">
            <label
              className="font-normal text-title-info-first"
              htmlFor="email"
            >
              Email
            </label>
            <div className="input-wrapper">
              <input
                className="input-form"
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                onChange={handleInputChange}
              />
            </div>
            {/* isi element small dengan validation logic */}
            {errors.email && (
              <small className="text-red-500">{errors.email}</small>
            )}
          </section>
          <section>
            <label className="text-title-info-first" htmlFor="password">
              Password
            </label>
            <div className="input-form flex items-center justify-between outline outline-gray-300 rounded">
              <input
                className="w-full h-full focus:outline-none"
                type={inputType}
                name="password"
                id="password"
                placeholder="ex: password123."
                onChange={handleInputChange}
              />
              <a
                type="button"
                id="show-password"
                className="pr-4"
                onClick={showPassword}
              >
                {inputType === "password" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#9C968E"
                  >
                    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#9C968E"
                  >
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                  </svg>
                )}
              </a>
            </div>
            {/* fill small text element with validation logic */}
            {errors.password && (
              <small className="text-red-500">{errors.password}</small>
            )}
          </section>
          <button
            className="bg-primary font-bold text-background rounded h-12"
            type="submit"
          >
            Login
          </button>
          {/* <!-- Change to submit type later! --> */}
          <section className="or">
            <section className="flex justify-center">
              <p className="text-title-info-first">
                Do not have an account?{" "}
                <Link className="font-bold text-primary" to="/auth/new">
                  Register
                </Link>
              </p>
            </section>
            <section className="flex justify-center items-center w-full">
              <div className="border w-full border-gray-200 "></div>
              <p className="mx-3 my-5 text-secondary">Or</p>
              <div className="border w-full border-gray-200 "></div>
            </section>
          </section>
          <section className="flex justify-around">
            <Link to="#" className="flex gap-3 p-5 rounded-xl shadow-md">
              <img
                className="mx-auto"
                src="src/assets/google-logo.svg"
                alt="google"
              />
              <p className="hidden md:block text-title-info-second">Google</p>
            </Link>
            <Link to="#" className="flex gap-3 p-5 rounded-xl shadow-md">
              <img
                className="mx-auto"
                src="src/assets/facebook-logo.svg"
                alt="facebook"
              />
              <p className="hidden md:block text-title-info-second">Facebook</p>
            </Link>
          </section>
        </form>
      )}
    </>
  );
}

export default Login;
