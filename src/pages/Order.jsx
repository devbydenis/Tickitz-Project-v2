import React, {useState} from "react";

function Order() {
  const [isModal, _] = useState(false);
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const rowLetters1 = [1, 2, 3, 4, 5, 6, 7];
  const rowLetters2 = [8, 9, 10, 11, 12, 13, 14];

  return (
    <main className="relative bg-[#A0A3BD33]">
      <div
        className={`${
          isModal ? "block" : "hidden"
        } bg-black absolute inset-0 opacity-80`}
      ></div>
      <OrderSteps />
      <section className="md:grid md:grid-cols-[2fr_1fr]">
        <form className="bg-white rounded-lg ml-5 mb-10">
          <OrderInfo />
          <OrderSeat 
            rows={rows}
            rowLetters1={rowLetters1}
            rowLetters2={rowLetters2}
          />
          <SeatingKey />
          <OrderChoosed />
        </form>
        <ModalOrderDesktop />
        <ModalOrder isModal={isModal}/>
      </section>
    </main>
  );
}
function OrderSteps() {
  return (
    <ul className="step-by-step hidden md:flex justify-center items-center gap-10 py-5">
      <li className="flex flex-col items-center">
        <p className="rounded-full bg-primary text-background py-2 px-4 mb-3">
          1
        </p>
        <p className="text-black font-medium">Fill More</p>
      </li>
      <li className="border-t-2 border-secondary border-dashed w-20 h-1"></li>
      <li className="flex flex-col items-center">
        <p className="rounded-full bg-secondary text-background py-2 px-4 mb-3">
          2
        </p>
        <p className="text-secondary">Active</p>
      </li>
      <li className="border-t-2 border-secondary border-dashed w-20 h-1"></li>
      <li className="flex flex-col items-center">
        <p className="rounded-full bg-secondary text-background py-2 px-4 mb-3">
          3
        </p>
        <p className="text-secondary">Done</p>
      </li>
    </ul>
  );
}
function OrderInfo() {
  return (
    <>
      <section className="md:flex gap-5 bg-white border border-gray-300 p-4 m-4 rounded-lg text-center ">
        <div
          className="bg-cover h-44 rounded-lg md:h-28 md:w-44"
          style={{backgroundImage: "url(src/assets/background.png)"}}
        ></div>
        <div>
          <h1 className="mt-4 font-bold text-3xl md:text-2xl md:mt-1">Spiderman HomeComing</h1>
          <ul className="mt-4 flex flex-wrap gap-3 justify-center md:mt-1">
            <li className="bg-[#A0A3BD1A] rounded-2xl px-4 py-1 text-secondary">
              Action
            </li>
            <li className="bg-[#A0A3BD1A] rounded-2xl px-4 py-1 text-secondary">
              Adventure
            </li>
          </ul>
          <p className="mt-4 font-normal text-gray-900 md:mt-1">Regular - 13:00 PM</p>
          <button
            type="button"
            className="mt-4 bg-[#1D4ED833] text-primary px-3 py-1 rounded-xl active:scale-95 hover:outline hover:outline-primary transition-all "
          >
            Change
          </button>
        </div>
      </section>
    </>
  );
}

function SingleSeat({id}) {
  // return <div key={key} className="seat w-10 h-10 bg-secondary cursor-pointer"></div>;
  return (
    <>
      <label className="w-10 h-10 bg-secondary cursor-pointer" htmlFor={`${id}`}>
        <input className="hidden" type="checkbox" name={id} id={`${id}`}/>
      </label>
    </>
  )
}

function SingleRow({letter, rowLetters1, rowLetters2}) {
  return (
    <>
      <p className="my-auto">{letter}</p>
      {rowLetters1.map((letter, index) => {
          return <SingleSeat key={index} id={letter}/>;
        })}
      <div className="w-3 h-1"></div>
      {rowLetters2.map((letter, index) => {
          return <SingleSeat key={index} id={letter}/>;
        })}
    </>
  );
}

function SingleRowLetter() {
  const rowLetters1 = [1, 2, 3, 4, 5, 6, 7];
  const rowLetters2 = [8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <div></div>
      {rowLetters1.map((item, index) => {
        return (
          <div className="flex items-center justify-center w-10 h-10 " key={index}>
            {item}
          </div>
        );
      })}
      <div className="w-3 h-1"></div>
      {rowLetters2.map((item, index) => {
        return (
          <div className="flex items-center justify-center w-10 h-10" key={index}>
            {item}
          </div>
        );
      })}
    </>
  );
}

function OrderSeat({rows, rowLetters1, rowLetters2}) {
  const createSeatLayout = () => {
    // const rows = ["A", "B", "C", "D", "E", "F", "G"];
    // const rowLetters1 = [1, 2, 3, 4, 5, 6, 7];
    // const rowLetters2 = [8, 9, 10, 11, 12, 13, 14];
    return rows.map((element, index) => {
      return (
        <div
          key={index}
          className="grid grid-cols-(--template-seat) gap-y-4 gap-x-3"
        >
          {<SingleRow letter={element} rows={rows} rowLetters1={rowLetters1} rowLetters2={rowLetters2} />}
        </div>
      );
    });
  };

  return (
    <>
      <section className="order-choose-seat bg-white rounded-lg mt-10 p-4 m-4">
        <p className="mb-9 font-semibold text-lg">Choose Your Seat</p>
        <div className="seat-screen flex justify-center mb-10">SCREEN</div>
        <div className="order-seat">
          <div className="flex flex-col gap-3 overflow-x-scroll">
            {createSeatLayout()}
            {/* <div className="flex gap-6 justify-between border"> */}
            <div className="grid grid-cols-(--template-seat) ml-3 gap-x-3">
              <SingleRowLetter rowLetters1={rowLetters1} rowLetters2={rowLetters2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SeatingKey() {
  return (
    <section className="order-seating-key p-4 m-4">
      <p className="mb-9 font-semibold text-lg">Seating Key</p>
      <div className="flex flex-wrap gap-3">
        <div className="flex justify-around w-full">
          <div className="flex items-start">
            <img src={"src/assets/arrow-down.svg"} alt="arrow-up" width={20} />
            <p className="font-bold">A - G</p>
          </div>
          <div className="flex items-start gap-1">
            <img src={"src/assets/arrow-right.svg"} alt="arrow-right" />
            <p className="font-bold">1 - 14</p>
          </div>
        </div>
        <div className="flex gap-9 justify-center w-full flex-wrap">
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-[#D6D8E7]"></div>
            <p>Available</p>
          </div>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-[#F589D7]"></div>
            <p>Love Nest</p>
          </div>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-primary"></div>
            <p>Selected</p>
          </div>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-title-info-first"></div>
            <p>Sold</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderChoosed() {
  return (
    <section className="order-choosed p-4 m-4 bg-white rounded-lg">
      <span className="flex justify-between">
        <p className="text-secondary text-lg font-semibold">Choosed</p>
        <p>C4</p>
      </span>
      <span className="flex justify-evenly mt-5">
        <select
          className="bg-gray-200 rounded p-5 w-30 cursor-pointer"
          name="seat-letter"
          id="seat-letter"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <select
          className="bg-gray-200 rounded p-5 w-30 cursor-pointer"
          name="seat-number"
          id="seat-number"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
        </select>
      </span>
      <button
        className="block bg-primary text-white w-full py-3 rounded-lg mt-5 "
        type="button"
      >
        Add new seat
      </button>
    </section>
  );
}

function ModalOrder({isModal}) {
  return (
    <>
      <section
        className={`${
          isModal ? "block" : "hidden"
        } absolute top-0 right-0 left-0 mx-6 my-10 px-5 py-10 bg-white rounded-xl flex flex-col items-center shadow-2xl`}
      >
        <div className="flex flex-col w-full items-center mb-8">
          <img
            src="src/assets/cineone.svg"
            alt="cinema"
            width={114}
            height={24}
          />
          <p className="mt-3 text-2xl">CineOne21 Cinema</p>
        </div>
        <div className="w-full mb-10 flex flex-col gap-8">
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              Movie selected
            </p>
            <p>Spider-Man: Homecoming</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              Tuesday, 07 July 2020
            </p>
            <p>13.00 PM</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              One ticket price
            </p>
            <p>$10</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">Seat Choosed</p>
            <p>C4</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              Total Payment
            </p>
            <p>$30</p>
          </span>
        </div>
        <button
          className="w-full border rounded py-3 bg-primary text-white font-bold hover:transform active:scale-95 transition-all"
          type="button"
        >
          Confirm Button
        </button>
      </section>
    </>
  );
}
function ModalOrderDesktop() {
  return (
    <>
      <section
        className={`h-fit mx-6 px-5 py-10 bg-white rounded-xl border border-gray-200 md:flex flex-col items-center shadow-2xl hidden`}
      >
        <div className="flex flex-col w-full items-center mb-8">
          <img
            src="src/assets/cineone.svg"
            alt="cinema"
            width={114}
            height={24}
          />
          <p className="mt-3 text-2xl">CineOne21 Cinema</p>
        </div>
        <div className="w-full mb-10 flex flex-col gap-8">
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              Movie selected
            </p>
            <p>Spider-Man: Homecoming</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              Tuesday, 07 July 2020
            </p>
            <p>13.00 PM</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              One ticket price
            </p>
            <p>$10</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">Seat Choosed</p>
            <p>C4</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              Total Payment
            </p>
            <p>$30</p>
          </span>
        </div>
        <button
          className="w-full border rounded py-3 bg-primary text-white font-bold hover:transform active:scale-95 transition-all"
          type="button"
        >
          Confirm Button
        </button>
      </section>
    </>
  );
}

export default Order;
