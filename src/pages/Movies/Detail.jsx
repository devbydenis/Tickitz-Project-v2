import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {API_KEY} from "../../service";

function Detail() {
  const [moviesDetail, setMoviesDetail] = useState([]);
  const params = useParams();
  const {title, poster_path, backdrop_path, release_date, overview} = moviesDetail;
  const date = new Date(release_date)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const releaseDate = `${day} ${month} ${year}`

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <article className="grid grid-cols-1 grid-rows-[200px_1fr_300px_400px] ">
        <section
          className={`banner h-[475px] bg-cover bg-center brightness-50 `}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></section>
        <section className="film-information z-10 py-8 pl-8 pr-0 flex flex-col items-center md:flex-row md:items-end">
          <img
            className="md: w-80"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
          <div className="info-film bg-white md:flex md:flex-col md:items-start md:justify-end pl-5 md:w-full">
            <h1 className="mt-10 text-2xl font-semibold text-center">
              {title}
            </h1>
            <ul className="flex justify-center flex-wrap gap-2 mt-4">
              <li className="bg-gray-100 px-4 py-2 rounded-full">Adventure</li>
              <li className="bg-gray-100 px-4 py-2 rounded-full">Action</li>
              <li className="bg-gray-100 px-4 py-2 rounded-full">Romance</li>
              <li className="bg-gray-100 px-4 py-2 rounded-full">Comedy</li>
              <li className="bg-gray-100 px-4 py-2 rounded-full">Sci-Fi</li>
              <li className="bg-gray-100 px-4 py-2 rounded-full">Horror</li>
              {/* {
              genres.map((genre) => {
                return (
                  <li className="bg-gray-100 px-4 py-2 rounded-full">{genre}</li>
                )
              })
            } */}
              {/* <li className="bg-gray-100 px-4 py-2 rounded-full">Adventure</li> */}
            </ul>
            <ul className="grid grid-cols-2 gap-5 mt-5">
              {/* <ul className="flex justify-between gap-5 mt-6 flex-wrap"> */}
              <li className="w-full flex flex-col items-center md:items-start">
                <p className="text-gray-500">Release date</p>
                <p className="text-black">{releaseDate}</p>
              </li>
              <li className="w-full">
                <p className="text-gray-500">Duration</p>
                <p className="text-black">2 hrs 13 min</p>
              </li>
              <li className="w-full flex flex-col items-center md:items-start">
                <p className="text-gray-500">Directed by</p>
                <p className="text-black">Jon Watts</p>
              </li>
              <li className="w-full">
                <p className="text-gray-500">Casts</p>
                <p className="text-black pr-4">
                  Tom Holland, Robert Downey Jr, Dwayne Johnson
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="synopsis p-6">
          <h3 className="text-xl font-semibold mb-4">Synopsis</h3>
          <p className="text-gray-500">{overview}</p>
        </section>
        <section className="showtimes-ticket p-6">
          <form className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-6">Showtimes and Tickets</h3>
            <div className="date mb-4">
              <input
                type="date"
                className="w-full p-2 bg-gray-100 rounded-lg"
              />
            </div>
            <div className="city mb-4">
              <select className="w-full p-2 bg-gray-100 rounded-lg">
                <option value="Jakarta">Jakarta</option>
                <option value="Bogor">Bogor</option>
                <option value="Depok">Depok</option>
                <option value="Tangerang">Tangerang</option>
                <option value="Bekasi">Bekasi</option>
              </select>
            </div>
            <button
              type="button"
              className="w-full p-2 bg-blue-600 text-white rounded-lg"
            >
              Filter
            </button>
            <p className="text-gray-500 mt-4">39 Results</p>
          </form>
          <div className="cinema mt-6 p-4 border border-gray-200 rounded-lg">
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
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                  </ul>
                </div>
                <div>
                  <p>Gold</p>
                  <ul className="flex flex-wrap gap-4">
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                  </ul>
                </div>
                <div>
                  <p>Platinum</p>
                  <ul className="flex flex-wrap gap-4">
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full">
                      10.30
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      </article>
    </>
  );
}

export default Detail;
