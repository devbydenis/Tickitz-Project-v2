import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import { API_KEY } from "../service";

function Detail() {
  const [moviesDetail, setMoviesDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${API_KEY}`,
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
      <main className="">
        <section
          className={`banner h-[475px] bg-[url(https://image.tmdb.org/t/p/original${moviesDetail.poster_path})] bg-cover bg-center brightness-50`}
        >{moviesDetail.poster_path}</section>
        <section className="film-information p-8">
          <h1 className="text-2xl font-semibold text-center">
            {moviesDetail.title}
          </h1>
          <ul className="flex justify-center gap-2 mt-4">
            <li className="bg-gray-100 px-4 py-2 rounded-full">Action</li>
            <li className="bg-gray-100 px-4 py-2 rounded-full">Adventure</li>
          </ul>
          <ul className="flex justify-center gap-5 mt-6 flex-wrap">
            <li>
              <p className="text-gray-500">Release date</p>
              <p className="text-black">{moviesDetail.release_date}</p>
            </li>
            <li>
              <p className="text-gray-500">Duration</p>
              <p className="text-black">2 hrs 13 min</p>
            </li>
            <li>
              <p className="text-gray-500">Directed by</p>
              <p className="text-black">Jon Watts</p>
            </li>
            <li>
              <p className="text-gray-500">Casts</p>
              <p className="text-black">Tom Holland, Robert Downey Jr., etc.</p>
            </li>
          </ul>
        </section>
        <section className="synopsis p-6">
          <h3 className="text-xl font-semibold mb-4">Synopsis</h3>
          <p className="text-gray-500">
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
          </p>
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

      </main>
    </>
  );
}

export default Detail;
