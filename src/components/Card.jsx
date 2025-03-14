import React from "react";
import {Link} from "react-router";

function Card({img, title}) {
  return (
    <>
      <div className="card">
        {/* <!-- show detail hover --> */}
        <div className="hidden">
          <a href="../detail/detail.html">
            <button>Details</button>
          </a>
          <a href="#">
            <button>Buy Tickets</button>
          </a>
        </div>
        <img className="card-img" src={img} alt="Black Widow"/>
        <Link className="inline-block font-bold text-lg text-black my-3" to="#">
          {title}
        </Link>
        <ul className="flex flex-wrap gap-2 text-sm">
          <li className="px-4 bg-[#a0a3bd28] text-title-info-second rounded-xl">
            Action
          </li>
          <li className="px-4 bg-[#a0a3bd28] text-title-info-second rounded-xl">
            Adventure
          </li>
          <li className="px-4 bg-[#a0a3bd28] text-title-info-second rounded-xl">
            Comedy
          </li>
          <li className="px-4 bg-[#a0a3bd28] text-title-info-second rounded-xl">
            Romance
          </li>
          <li className="px-4 bg-[#a0a3bd28] text-title-info-second rounded-xl">
            Sci-fi
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card;
