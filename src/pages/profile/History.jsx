import React from "react";
import dropDownArrow from "../../assets/arrow-drop-down.svg";
import cineone from "../../assets/cineone.svg";
import qrcode from "../../assets/qrcode.svg";
function History() {
  return (
    <>
      <section>
        <CardHistory
          cinema={cineone}
          date="Tuesday, 07 July 2020 - 04:30pm"
          title="Spider-Man: Homecoming"
          isTicketPaid={false}
        />
      </section>
    </>
  );
}

function CardHistory(props) {
  const {cinema, date, title, isTicketPaid} = props;

  return (
    <>
      <section className="my-8 mx-6 bg-white rounded-lg">
        <div className=" p-6">
          <img className="mb-5" src={cinema} alt="cineone-logo" />
          <p className="text-[13px] text-secondary tracking-widest">{date}</p>
          <p className="text-lg font-semibold tracking-wider">{title}</p>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <div className="status p-6 flex flex-col gap-4">
          <span
            className={`${
              isTicketPaid
                ? "bg-[#6E719133] text-title-info-first"
                : "bg-[#00BA8833] text-[#00BA88]"
            } w-full py-3 text-center font-bold tracking-wider rounded-lg1`}
          >
            {isTicketPaid ? "Ticket used" : "Ticket in active"}
          </span>
          <span
            className={`${
              isTicketPaid
                ? "bg-[#6E719133] text-title-info-first"
                : "bg-[#E82C2C33] text-[#E82C2C]"
            } w-full py-3 text-center font-bold tracking-wider rounded-lg`}
          >
            {isTicketPaid ? "Paid" : "Not Paid"}
          </span>
          <span
            className="text-center flex justify-center gap-3 mt-6 text-lg text-secondary font-normal cursor-pointer"
            onClick={() => {}}
          >
            <p>Show Detail</p>
            <img
              className={`rotate-180 transition-all`}
              src={dropDownArrow}
              alt="dropdown arrow"
            />
          </span>
          <div className="detail-card">
            <h2 className="font-semibold text-2xl mb-8 mt-3">
              Ticket Information
            </h2>
            {isTicketPaid ? <TicketPaid /> : <TicketNotPaid />}
          </div>
        </div>
      </section>
    </>
  );
}

function TicketPaid() {
  const subStrTitle = (str) => {
    return str.substring(0, 12) + "...";
  };

  return (
    <>
      <section className="bg-white">
        <img src={qrcode} alt="qrcode" />
        <div className="grid grid-cols-3 gap-y-3 w-full mt-5">
          <div>
            <p className="text-xs text-[#AAAAAA]">Category</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">PG-13</p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Time</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">2.00pm</p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Seats</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">
              C4, C5, C6
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Movie</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B]">
              {"spiderman: home coming".length >= 12
                ? subStrTitle("spiderman: home coming")
                : "spiderman: home coming"}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Date</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">07 Jul</p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Count</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">3 pcs</p>
          </div>
          <div className="mt-5 flex flex-col justify-between rounded-lg">
            <p className="text-title-info-first font-semibold text-lg">Total</p>
            <p className="text-2xl tracking-widest text-[#14142B] mt-3 font-bold">$30</p>
          </div>
        </div>
      </section>
    </>
  );
}
function TicketNotPaid() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-normal text-sm text-secondary">
          No. Rekening Virtual :
        </p>
        <span className="flex justify-between items-center">
          <p className="font-bold text-lg">12321328913829724</p>
          <button className="outline outline-primary rounded px-4 py-2 active:scale-95">
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
        <span className="text-red-500">June 23, 2023</span>. If the bill has not
        been paid by the specified time, it will be forfeited
      </p>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="bg-primary py-4 text-white font-bold rounded"
        >
          Check Payment
        </button>
      </div>
    </div>
  );
}

export default History;
