import React, {useEffect, useState} from "react";
import {Navigate, useNavigate, useParams} from "react-router";
import {API_KEY} from "../../service";
import ebuid from "../../assets/footer/ebuid.svg";
import cineone from "../../assets/footer/cineone.svg";
import hiflix from "../../assets/footer/hiflix.svg";
import {useDispatch} from "react-redux";
import {bookNow} from "../../redux/slices/bookingMovies";
// import { createContext } from "react";

function Detail() {
  const [moviesDetail, setMoviesDetail] = useState([]);
  const [credits, setCredits] = useState([]);
  const {title, poster_path, backdrop_path, release_date, overview} =
    moviesDetail;
  const {cast, crew} = credits;
  const params = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const date = new Date(release_date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const releaseDate = `${day} ${month} ${year}`;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    async function getDetailMovie() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);

        const dataJSON = await response.json();
        console.log(dataJSON);
        const data = dataJSON;
        console.log("data movies", data);
        setMoviesDetail(data);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }

    getDetailMovie();
  }, [params.id]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    async function getCreditsMovie() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);

        const creditsJSON = await response.json();
        console.log(creditsJSON);
        const credits = creditsJSON;
        console.log("data credits", credits);
        setCredits(credits);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }

    getCreditsMovie();
  }, [params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitBookNow = (e) => {
    e.preventDefault();

    const date = e.target.date.value;
    const time = e.target.time.value;
    const location = e.target.location.value;
    const cinema = e.target.cinema.value;
    const dataDetail = {
      image: poster_path,
      genres: moviesDetail.genres,
      title,
      date,
      time,
      location,
      cinema,
    };
    // console.log(dataDetail);
    dispatch(bookNow(dataDetail));
    Navigate("/order");
  };
  return (
    <>
      <article className="grid grid-cols-1 grid-rows-[250px_1fr] ">
        <section
          className={`banner h-[475px] bg-cover bg-center brightness-50 `}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></section>
        <section className="film-information py-8 px-8 flex flex-col items-center md:flex-row md:items-end md:mx-10">
          <img
            className="md: w-80 z-10 rounded"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
          <div className="info-film bg-white md:flex md:flex-col md:items-start md:justify-end pl-5 md:w-full">
            <h1 className="mt-10 text-2xl font-semibold text-center">
              {title}
            </h1>
            <ul className="flex justify-center flex-wrap gap-2 mt-4">
              {moviesDetail.genres &&
                moviesDetail.genres.map((genre) => (
                  <li
                    key={genre.id}
                    className="bg-gray-100 px-4 py-2 rounded-full"
                  >
                    {genre.name}
                  </li>
                ))}
            </ul>
            <ul className="grid grid-cols-2 gap-5 mt-5">
              {/* <ul className="flex justify-between gap-5 mt-6 flex-wrap"> */}
              <li className="w-full flex flex-col">
                <p className="text-gray-500">Release date</p>
                <p className="text-black">{releaseDate}</p>
              </li>
              <li className="w-full">
                <p className="text-gray-500">Duration</p>
                <p className="text-black">2 hrs 13 min</p>
              </li>
              <li className="w-full flex flex-col">
                <p className="text-gray-500">Directed by</p>
                {/* <p className="text-black">Jon Watts</p> */}
                {crew &&
                  crew.map((crew) => {
                    if (crew.job === "Director") {
                      return <p className="text-black">{crew.name}</p>;
                    }
                  })}
              </li>
              <li className="w-full">
                <p className="text-gray-500">Casts</p>
                {/* {credits.cast &&
                  credits.cast.slice(0, 4).map((cast) => {
                    if (cast.known_for_department === "Acting") {
                      return (
                        <p className="text-black pr-4">{cast.name}</p>
                      );
                    }
                  })
                } */}
                {
                  <p className="text-black">
                    {cast &&
                      cast
                        .slice(0, 4)
                        .map((cast) => cast.name)
                        .join(", ")}
                  </p>
                }
              </li>
            </ul>
          </div>
        </section>
        <section className="synopsis p-6 md:mx-10">
          <h3 className="text-xl font-semibold mb-4">Synopsis</h3>
          <p className="text-gray-500">{overview}</p>
        </section>
        <ShowtimesAndTickets handleSubmitBookNow={handleSubmitBookNow} />
      </article>
    </>
  );
}

function ShowtimesAndTickets({handleSubmitBookNow}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <section className="showtimes-ticket p-6 md:mx-10">
        <h3 className="text-3xl font-bold mb-10">Showtimes and Tickets</h3>
        <form
          onSubmit={handleSubmitBookNow}
          className="flex gap-5 flex-wrap md:flex-row items-center"
        >
          <div className="date mb-4 grow">
            <label
              className="text-xl font-semibold tracking-wide mb-5"
              htmlFor="date"
            >
              Choose Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full p-2 bg-[#EFF0F6] rounded"
            />
          </div>
          <div className="time mb-4 grow">
            <label
              className="text-xl font-semibold tracking-wide mb-5"
              htmlFor="time"
            >
              Choose Time
            </label>
            <select
              className="w-full p-2 bg-[#EFF0F6] rounded"
              name="time"
              id="time"
            >
              <option value="08.30-10.30">08.30-10.30</option>
              <option value="11.00-13.00">11.00-13.00</option>
              <option value="13.30-15.30">13.30-15.30</option>
              <option value="16.00-18.00">16.00-18.00</option>
              <option value="18.30-20.30">18.30-20.30</option>
            </select>
          </div>
          <div className="city mb-4 grow">
            <label
              className="text-xl font-semibold tracking-wide mb-5"
              htmlFor="location"
            >
              Choose Location
            </label>
            <select
              className="w-full p-2 bg-[#EFF0F6] rounded"
              name="location"
              id="location"
            >
              <option value="Jakarta">Jakarta</option>
              <option value="Bogor">Bogor</option>
              <option value="Depok">Depok</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Bekasi">Bekasi</option>
            </select>
          </div>
          <button
            type="button"
            className="mb-5 w-full md:w-1/6 p-2 md:mt-8 bg-blue-600 text-white rounded"
          >
            Filter
          </button>
          <div className="mb-4 w-full ">
            <p className="text-xl font-semibold tracking-wide mb-5">
              Choose Cinema
            </p>
            <div className="flex gap-5 justify-center">
              <label
                className="group transition-all  has-checked:border-primary has-checked:opacity-100 opacity-50 flex justify-center items-center border-3 border-gray-300 rounded p-3 w-50"
                htmlFor="ebuid"
              >
                <img className="aspect-square" src={ebuid} alt="ebuid" />
                <input
                  className="hidden"
                  type="radio"
                  name="cinema"
                  id="ebuid"
                  value={"ebuid"}
                />
              </label>
              <label
                className="group transition-all  has-checked:border-primary has-checked:opacity-100 opacity-50 flex justify-center items-center border-3 border-gray-300 rounded p-3 w-50"
                htmlFor="hiflix"
              >
                <img className="aspect-square" src={hiflix} alt="hiflix" />
                <input
                  className="hidden"
                  type="radio"
                  name="cinema"
                  id="hiflix"
                  value={"hiflix"}
                />
              </label>
              <label
                className="group transition-all  has-checked:border-primary has-checked:opacity-100 opacity-50 flex justify-center items-center border-3 border-gray-300 rounded p-3 w-50"
                htmlFor="cineone"
              >
                <img className="aspect-square" src={cineone} alt="cineone" />
                <input
                  className="hidden"
                  type="radio"
                  name="cinema"
                  id="cineone"
                  value={"cineone"}
                />
              </label>
            </div>
          </div>
          {/* Pagination */}
          <div className="flex flex-col mx-auto gap-4 my-10">
            {/* <div className="pagination flex justify-center gap-2 py-5">
              <button className="bg-primary text-white px-5 py-3 rounded-full font-semibold">
                1
              </button>
              <button className="bg-white text-primary px-3 py-1 rounded-full font-semibold">
                2
              </button>
              <button className="bg-white text-primary px-3 py-1 rounded-full font-semibold">
                3
              </button>
              <button className="bg-white text-primary px-3 py-1 rounded-full font-semibold">
                4
              </button>
              <button className="bg-primary text-white px-3 py-3 rounded-full font-semibold">
                <img src={arrowRight} alt="" />
              </button>
            </div> */}
            <button
              className="w-50 text-lg font-bold text-white bg-primary rounded py-3 mx-auto"
              type="submit"
            >
              Book Now
            </button>
          </div>
        </form>
        <div className="hidden cinema mt-6 p-4 border border-gray-200 rounded-lg">
          <div className="dropdown-head">
            <div className="theater">
              <svg
                width="86"
                height="33"
                viewBox="0 0 86 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Theater Icon */}
              </svg>
            </div>
            <div className="theater-two">
              <svg
                width="77"
                height="19"
                viewBox="0 0 77 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Theater Two Icon */}
              </svg>
            </div>
            <p>Whatever street No.12, South Purwokerto</p>
            <button
              onClick={toggleDropdown}
              className="transform rotate-0 transition-transform"
            >
              <svg
                width="18"
                height="9"
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Dropdown Icon */}
              </svg>
            </button>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-contain mt-4">
              <div>
                <p>Regular</p>
                <ul className="flex flex-wrap gap-4">
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                </ul>
              </div>
              <div>
                <p>Gold</p>
                <ul className="flex flex-wrap gap-4">
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                </ul>
              </div>
              <div>
                <p>Platinum</p>
                <ul className="flex flex-wrap gap-4">
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                  <li className="bg-gray-100 px-4 py-2 rounded-full">10.30</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Detail;
