import React from "react";
import background from "../../assets/background.png";
import arrowRight from "../../assets/arrow-right-white.svg";
import searchLogo from "../../assets/search.svg";
import Card from "../../components/Card";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movies";
import {useEffect} from "react";
import Loaders from "../../components/Loaders";

function MoviesAll() {
  // const [popularGenres, setPopularGenres] = React.useState([]);
  const dispatch = useDispatch();
  const {popularMovie, genres, isLoading, isSuccess} = useSelector(
    (state) => state.movies
  );
  const genreMap = new Map();
  genres.map((genre) => {
    genreMap.set(genre.id, genre.name);
  })

  useEffect(() => {
    dispatch(movieActions.getPopularMovieThunk());
    dispatch(movieActions.getGenresMovieThunk());
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <section
          className={`banner relative w-full h-96 bg-cover bg-top`}
          style={{backgroundImage: `url(${background})`}}
        >
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="relative z-10 tagline text-white p-16">
            <p className="font-bold text-lg md:text-xl mb-3">
              LIST MOVIE OF THE WEEK
            </p>
            <p className="font-semibold text-4xl md:text-5xl md:w-1/2">
              Experience the Magic of Cinema: Book Your Tickets Today
            </p>
          </div>
        </section>
        <section className="movies mx-5">
          <form className="flex flex-wrap justify-start gap-10 mt-5">
            <div className="movies-search">
              <label
                className="font-semibold inline-block mb-1"
                htmlFor="movies-search"
              >
                Search Event
              </label>
              <span className="flex border border-gray-300 rounded py-2 px-4">
                <input
                  className="border-none focus:outline-none"
                  type="text"
                  name="movies-search"
                  id="movies-search"
                />
                <img src={searchLogo} alt="searchLogo" />
              </span>
            </div>
            <div className="movies-filter">
              <h5 className="font-semibold mb-1">Filter</h5>
              <div className="filter-container flex flex-wrap gap-2">
                <label
                  className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700"
                  htmlFor="Horror"
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    name="horror"
                    id="Horror"
                    value="horror"
                  />
                  <span className="font-medium">Horror</span>
                </label>
                <label
                  className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700"
                  htmlFor="Romantic"
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    name="romantic"
                    id="Romantic"
                    value="romantic"
                  />
                  <span className="font-medium">Romantic</span>
                </label>
                <label
                  className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700"
                  htmlFor="Adventure"
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    name="adventure"
                    id="Adventure"
                    value="adventure"
                  />
                  <span className="font-medium">Adventure</span>
                </label>
                <label
                  className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700"
                  htmlFor="Sci-Fi"
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    name="sci-fi"
                    id="Sci-Fi"
                    value="sci-fi"
                  />
                  <span className="font-medium">Sci-Fi</span>
                </label>
              </div>
            </div>
          </form>
          <div className="movies-carousel flex justify-center flex-wrap gap-5 w-full p-3 mt-10">
            {/* FILL WITH FETCHING DATA */}
            
            {isLoading && <Loaders />}
            {isSuccess &&
              popularMovie.map((movie) => {
                return (
                  <Card
                    key={movie.id}
                    id={movie.id}
                    image={movie.poster_path}
                    title={movie.title}
                    genres={movie.genre_ids.map(genre_id => genreMap.get(genre_id))}
                  />
                );
              })}
          </div>
        </section>
        <section className="pagination flex justify-center gap-2 py-5">
          <button className="bg-primary text-white px-3 py-1 rounded-full font-semibold">
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
          <button className="bg-primary text-white px-3 py-1 rounded-full font-semibold">
            <img src={arrowRight} alt="" />
          </button>
        </section>
        <section className="subscribe flex flex-col items-center gap-9 py-14 bg-primary rounded-xl">
          <p className="px-2.5 font-normal text-3xl/12 text-background text-center">
            Subscribe to our newsletter
          </p>
          <form className="flex flex-col gap-2.5 px-7">
            <div>
              <label htmlFor="firstname"></label>
              <input
                className="w-64 h-14 rounded-md px-2.5 bg-[#2563EB] text-background border-none outline outline-[#d4d4d8] placeholder:text-background focus:outline focus:outline-background"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                className="w-64 h-14 rounded-md px-2.5 bg-[#2563EB] text-background border-none outline outline-[#d4d4d8] placeholder:text-background focus:outline focus:outline-background"
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <button type="button">Subscribe Now</button>
            {/* <!-- change button type later --> */}
          </form>
        </section>
      </main>
    </>
  );
}

export default MoviesAll;
