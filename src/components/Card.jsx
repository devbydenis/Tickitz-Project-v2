// import React, { useEffect, useState } from "react";
import {Link} from "react-router";

function Card({id, image, title, genres = []}) {
  return (
    <>
      <div className="card rounded-lg overflow-hidden relative group">
        {/* <!-- show detail hover --> */}
        <div className=" absolute top-0 right-0 left-0 h-[23rem] invisible group-hover:visible group-hover:bg-black group-hover:opacity-50 transition all duration-300"></div>
        <div className="absolute top-0 right-0 left-0 h-[23rem] z-10 flex flex-col justify-center gap-3 items-center invisible group-hover:visible">
          <Link
            to={`movie/${id}`}
            className="text-background outline outline-background w-36 py-3 text-center rounded hover:bg-primary hover:outline-none"
          >
            Details
          </Link>
          <Link
            to="#"
            className="text-background outline outline-background w-36 py-3 text-center rounded hover:bg-primary hover:outline-none"
          >
            Buy Tickets
          </Link>
        </div>
        <img
          className="card-img object-cover"
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={title}
        />
        <Link className="inline-block font-bold text-lg text-black my-3" to="#">
          {title}
        </Link>
        <ul className="flex flex-wrap gap-2">
          {genres &&
            genres.map((element, index) => {
              return (
                <li
                  key={index}
                  className="px-4 bg-[#a0a3bd28] text-title-info-second rounded-xl"
                >
                  {element}
                </li>
              );
            })}
          {/* <li className="px-4 bg-[#a0a3bd28] text-title-info-second rounded-xl">
            {typeof  genres}
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Card;
