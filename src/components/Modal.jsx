import React from "react";

function Modal({title, isSuccess}) {
  return (
    <>
      {/* <!-------------------------- Modal content --------------------------> */}
      <div className={`overflow-hidden relative bg-white text-left rounded-lg max-w-[290px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]`}>
        <div className="p-5 bg-white">
          <span className="font-bold">X</span>
          <div className="flex mx-auto bg-green-100 flex-shrink-0 justify-center items-center w-12 h-12 rounded-full">
            <svg
              aria-hidden="true"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              className={`${isSuccess ? 'text-green-600' : 'text-red-500'} w-6 h-6`}
            >
              <path
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="mt-3 text-center">
            <span className="text-gray-900 text-base font-semibold leading-6">
              {
                isSuccess
                  ? `${title} Success`
                  : `${title} Failed`
              }
            </span>
            <p className="mt-2 text-gray-500 text-sm leading-5">
              {
                isSuccess
                  ? "Your login data is match with your regist data. You'll redirect to homepage." 
                  : "Your login data not match with your regist data. Please enter correct email and password!"
              }
            </p>
          </div>
          {/* <div className="mt-3 mx-4 bg-gray-50">
            <button
              className="inline-flex px-4 py-2 bg-green-600 text-white text-base font-medium leading-6 justify-center w-full rounded-md border border-transparent shadow-sm"
              type="button"
            >
              OK
            </button>
          </div> */}
        </div>
      </div>
      {/* <!-------------------------- Modal content -------------------------->  */}
    </>
  );
}

export default Modal;
