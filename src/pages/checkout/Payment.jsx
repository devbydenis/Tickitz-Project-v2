import React, {useState} from "react";

function Payment() {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <>
      {/* <section className="bg-[#F5F5F5]"> */}
      <section className="bg-[#A0A3BD33] relative py-10">
        <div
          className={`${
            isModalShow ? "block" : "hidden"
          } absolute inset-0 bg-black opacity-50`}
        ></div>
        <section className="hidden payment-timeline">
          <div>
            <span>1</span>
            <p>dates &amp; time</p>
          </div>
          <div />
          <div>
            <span>2</span>
            <p>Seat</p>
          </div>
          <div />
          <div>
            <span>3</span>
            <p>Payment</p>
          </div>
        </section>
        <form className="payment-main mx-6 py-8 px-9 sm:w-3/4 md:w-1/2 md:mx-auto bg-white rounded-lg">
          <PaymentInfo />
          <PersonalInfo />
          <PaymentMethod />
          <PaymentBtn />
        </form>
        <PaymentModal isModalShow={isModalShow} />
      </section>
    </>
  );
}

function PaymentInfo() {
  return (
    <div className="payment-info mb-7">
      <h1 className="font-bold text-2xl mb-5">Payment Info</h1>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-gray-300 tracking-[.75px]">
          <p className="uppercase text-secondary">date &amp; time</p>
          <p className="my-2">Tuesday, 07 July 2020 at 02:00pm</p>
        </div>
        <div className="border-b-2 border-gray-300 tracking-[.75px]">
          <p className="uppercase text-secondary">movie title</p>
          <p className="my-2">Spider-Man: Homecoming</p>
        </div>
        <div className="border-b-2 border-gray-300 tracking-[.75px]">
          <p className="uppercase text-secondary">cinema name</p>
          <p className="my-2">Cineone21 Cinema</p>
        </div>
        <div className="border-b-2 border-gray-300 tracking-[.75px]">
          <p className="uppercase text-secondary">number of tickets</p>
          <p className="my-2">3 pieces</p>
        </div>
        <div className="border-b-2 border-gray-300 tracking-[.75px]">
          <p className="uppercase text-secondary">total payment</p>
          <p className="my-2">$30.00</p>
        </div>
      </div>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="personal-info mb-7">
      <h1 className="font-bold text-2xl mb-5">Personal Info</h1>
      <div className="flex flex-col gap-6">
        <div className="">
          <label
            className="capitalize text-lg text-title-info-first block"
            htmlFor="fullname"
          >
            full name
          </label>
          <input
            className="outline outline-gray-400 rounded px-4 py-2 w-full"
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            className="capitalize text-lg text-title-info-first block"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="outline outline-gray-400 rounded px-4 py-2 w-full"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label
            className="capitalize text-lg text-title-info-first block"
            htmlFor="phone-number"
          >
            phone number
          </label>
          <input
            className="outline outline-gray-400 rounded px-4 py-2 w-full"
            type="phone-number"
            name="phone-number"
            id="phone-number"
            placeholder={+628123456789}
          />
        </div>
      </div>
    </div>
  );
}

function PaymentMethod() {
  return (
    <div className="payment-method">
      <h1 className="font-bold text-2xl mb-5">Payment Method</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3">
        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="gpay"
        >
          <img className="mx-auto" src="src/assets/gpay.svg" alt="gpay" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="gpay"
            defaultValue="gpay"
          />
        </label>

        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="visa"
        >
          <img className="mx-auto" src="src/assets/visa.svg" alt="visa" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="visa"
            defaultValue="visa"
          />
        </label>

        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="gopay"
        >
          <img className="mx-auto" src="src/assets/gopay.svg" alt="gopay" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="gopay"
            defaultValue="gopay"
          />
        </label>

        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="paypal"
        >
          <img className="mx-auto" src="src/assets/paypal.svg" alt="paypal" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="paypal"
            defaultValue="paypal"
          />
        </label>

        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="dana"
        >
          <img className="mx-auto" src="src/assets/dana.svg" alt="dana" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="dana"
            defaultValue="dana"
          />
        </label>

        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="bca"
        >
          <img className="mx-auto" src="src/assets/bca.svg" alt="bca" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="bca"
            defaultValue="bca"
          />
        </label>

        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="bri"
        >
          <img className="mx-auto" src="src/assets/bri.svg" alt="bri" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="bri"
            defaultValue="bri"
          />
        </label>

        <label
          className="flex flex-col items-center has-checked:outline-2 has-checked:outline-primary outline outline-gray-400 rounded py-3 px-3 w-28 justify-center cursor-pointer"
          htmlFor="ovo"
        >
          <img className="mx-auto" src="src/assets/ovo.svg" alt="ovo" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
            id="ovo"
            defaultValue="ovo"
          />
        </label>
      </div>
    </div>
  );
}

function PaymentBtn() {
  return (
    <button
      className="pay-order-btn bg-primary text-white font-bold w-full rounded py-3 mt-10"
      type="button"
    >
      Pay Your Order
    </button>
  );
}

function PaymentModal({isModalShow}) {
  return (
    <section
      className={`payment-modal ${
        isModalShow ? "block" : "hidden"
      } absolute top-[25%] right-0 left-0 bg-white m-6 px-6 py-6 rounded-lg md:w-2/5 md:mx-auto`}
    >
      <h2 className="text-center font-bold text-3xl mb-8 mt-3">Payment Info</h2>
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-normal text-sm text-secondary">
            No. Rekening Virtual :
          </p>
          <span className="flex justify-between items-center">
            <p className="font-bold text-lg">12321328913829724</p>
            <button className="outline outline-primary rounded px-3 py-1 active:scale-95">
              Copy
            </button>
          </span>
        </div>
        <div>
          <p className="font-normal text-sm text-secondary">Total Payment</p>
          <p className="mt-2 font-bold text-primary">$30</p>
        </div>
        <p className="font-normal text-sm text-secondary leading-8 tracking-[.75px]">
          Pay this payment bill before it is due, on{" "}
          <span className="text-red-500">June 23, 2023</span>. If the bill has
          not been paid by the specified time, it will be forfeited
        </p>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="bg-primary py-2 text-white font-bold"
          >
            Check Payment
          </button>
          <button
            type="button"
            className="bg-white outline-primary outline-2 rounded py-2 font-bold"
          >
            Pay Later
          </button>
        </div>
      </div>
    </section>
  );
}

export default Payment;
