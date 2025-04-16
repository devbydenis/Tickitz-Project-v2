import React, {useState} from "react";
import arrowDown from "../../assets/arrow-down.svg";
import arrowRight from "../../assets/arrow-right.svg";
import useScrollTop from "../../hooks/useScrollTop";
import {useDispatch, useSelector} from "react-redux";
import {addSeat} from "../../redux/slices/bookingMovies";

function Order() {
  const [isModal, _] = useState(false);
  const [seatChoosed, setSeatChoosed] = useState([]);
  const result = seatChoosed.filter((element, index) => {    // return seatChoosed.indexOf(element) === index

  })
  console.log("seatChoosed", seatChoosed);
  console.log("result", result);
  useScrollTop();


  return (
    <>
      <main className="relative bg-[#A0A3BD33] pt-5">
        <div
          className={`${
            isModal ? "block" : "hidden"
          } bg-black absolute inset-0 opacity-80`}
        ></div>
        <OrderSteps />
        <section className="md:grid lg:grid-cols-[2fr_1fr]">
          <form
            className="bg-white rounded-lg py-2 mx-5 mb-10"
          >
            <OrderInfo />
            <OrderSeat seatChoosed={seatChoosed} setSeatChoosed={setSeatChoosed} />
            <SeatingKey />
            <OrderChoosed />
          </form>
          <ModalOrderDesktop />
          <ModalOrder isModal={isModal} />
        </section>
      </main>
    </>
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
  const {image, title, genres, time} = useSelector(
    (state) => state.bookingMovie
  );
  return (
    <>
      <section className=" md:flex gap-5 bg-white border border-gray-300 p-4 m-4 rounded-lg">
        <div
          className="bg-cover h-44 rounded-lg md:h-28 md:w-44"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
          }}
        ></div>
        <div>
          <h1 className="mt-4 font-bold text-3xl md:text-2xl md:mt-1">
            {title}
          </h1>
          <ul className="mt-4 flex flex-wrap gap-3 ">
            {genres.map((genre, index) => (
              <li
                className="bg-[#A0A3BD1A] rounded-2xl px-4 py-1 text-secondary"
                key={index}
              >
                {genre.name}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <p className="mt-4 font-normal text-gray-900 md:mt-1">
              Regular - {time}
            </p>
            <button
              type="button"
              className="mt-4 bg-[#1D4ED833] text-primary px-3 py-1 rounded-xl active:scale-95 hover:outline hover:outline-primary transition-all "
            >
              Change
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function SingleSeat({id, seatChoosed, setSeatChoosed}) {
  // fungsi untuk memfilter seat yang sama ketika di klik
  const toogleSeat = (id) => {
    if (seatChoosed.includes(id)) {
      return seatChoosed.filter((element) => element !== id);
    } else {
      return [...seatChoosed, id];
    }
  }
  return (
    <>
      <label
        className="w-10 h-10 bg-[#D6D8E7] rounded cursor-pointer has-checked:bg-primary"
        htmlFor={id}
      >
        {/* <input className="hidden" type="checkbox" name={id} id={id} onClick={() => setSeatChoosed([...seatChoosed, id])} /> */}
        <input className="hidden" type="checkbox" name={id} id={id} onClick={() => setSeatChoosed(() => toogleSeat(id))} />
      </label>
    </>
  );
}

function SingleRow({letter, rowNumbers1, rowNumbers2, seatChoosed, setSeatChoosed}) {
  return (
    <>
      <p className="my-auto w-3">{letter}</p>
      {rowNumbers1.map((number, index) => {
        return <SingleSeat key={index} id={`${letter}${number}`} seatChoosed={seatChoosed} setSeatChoosed={setSeatChoosed} />;
      })}
      <div className="w-3 h-1"></div>
      {rowNumbers2.map((number, index) => {
        return <SingleSeat key={index} id={`${letter}${number}`} seatChoosed={seatChoosed} setSeatChoosed={setSeatChoosed} />;
      })}
    </>
  );
}

function SingleRowLetter() {
  const rowNumbers1 = [1, 2, 3, 4, 5, 6, 7];
  const rowNumbers2 = [8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <div></div>
      {rowNumbers1.map((item, index) => {
        return (
          <div
            className="flex items-center justify-center w-10 h-10 "
            key={index}
          >
            {item}
          </div>
        );
      })}
      <div className="w-3 h-1"></div>
      {rowNumbers2.map((item, index) => {
        return (
          <div
            className="flex items-center justify-center w-10 h-10"
            key={index}
          >
            {item}
          </div>
        );
      })}
    </>
  );
}

function OrderSeat({seatChoosed, setSeatChoosed}) {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const rowNumbers1 = [1, 2, 3, 4, 5, 6, 7];
  const rowNumbers2 = [8, 9, 10, 11, 12, 13, 14];
  const createSeatLayout = () => {
    return rows.map((element, index) => {
      return (
        <div
          key={index}
          className="grid grid-cols-(--template-seat) gap-y-4 gap-x-3"
        >
          {
            <SingleRow
              letter={element}
              rows={rows}
              rowNumbers1={rowNumbers1}
              rowNumbers2={rowNumbers2}
              seatChoosed={seatChoosed}
              setSeatChoosed={setSeatChoosed}
            />
          }
        </div>
      );
    });
  };

  return (
    <>
      <section className="order-choose-seat bg-white rounded-lg mt-10 p-4 m-4">
        <p className="mb-9 font-semibold text-lg">Choose Your Seat</p>
        <div className="seat-screen flex justify-center mb-10 font-bold shadow-2xl">
          SCREEN
        </div>
        <div className="order-seat">
          <div className="flex flex-col gap-3 overflow-x-scroll">
            {createSeatLayout()}
            <div className="grid grid-cols-(--template-seat) ml-3 gap-x-3">
              <SingleRowLetter
                rowNumbers1={rowNumbers1}
                rowNumbers2={rowNumbers2}
              />
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
          <div className="flex items-start md:hidden">
            <img src={arrowDown} alt="arrow-up" width={20} />
            <p className="font-bold">A - G</p>
          </div>
          <div className="flex items-start gap-1 md:hidden">
            <img src={arrowRight} alt="arrow-right" />
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
      <span className="flex justify-between md:hidden">
        <p className="text-secondary text-lg font-semibold">Choosed</p>
        <p>C4</p>
      </span>
      <span className="flex justify-evenly mt-5 md:hidden">
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
        className="block bg-white text-primary border-1 border-primary w-full py-3 rounded-lg mt-5 md:hidden"
        type="button"
      >
        Add new seat
      </button>
      <button
        className="md:hidden bg-primary text-background rounded-lg py-3 w-full mt-5"
        type="button"
      >
        Submit
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
  const {title, date, time, seats} = useSelector((state) => state.bookingMovie);

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
            <p>{title.substring(0, 20) + "..."}</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              {date}
            </p>
            <p>{time}</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">
              One ticket price
            </p>
            <p>$10</p>
          </span>
          <span className="flex justify-between">
            <p className="tracking-wider text-title-info-first">Seat Choosed</p>
            <p>{seats}</p>
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
          Checkout Now
        </button>
      </section>
    </>
  );
}

export default Order;
