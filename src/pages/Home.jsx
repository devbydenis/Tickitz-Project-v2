import React, {useEffect, useState} from "react";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-4.png";
import Card from "../components/Card";
import {Link} from "react-router";
import { getGenres, getNowPlayingMovie, getUpComingMovies } from "../service.js";

function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getMovies(fetchAPI, setState) {
      try {
        setIsLoading(true)
        const response = await fetchAPI();
        if (!response.ok) throw new Error(response.statusText);
  
        const dataJSON = await response.json()
        const data = dataJSON.results
        // console.log("data movies", data);
        const moviesData = Promise.all(
          data.map((element) => {
            return getDataGenres(element)
        }))
  
        const result = await moviesData
        // console.log("result", result);
        setState(result)
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    async function getDataGenres({id, title, poster_path, genre_ids}) {
      try {
        const response = await getGenres();
        if (!response.ok) throw new Error(response.statusText);
  
        const json = await response.json();
        const dataGenres = json.genres
        // console.log("Data Genres", dataGenres);
        const result = []
        dataGenres.forEach((dataGenre) => {
          // console.log("data genre", dataGenre);
          genre_ids.forEach((genre_id) => {
            if (genre_id === dataGenre.id) {
              result.push(dataGenre.name)
            }
          })
        })
        // console.log("result after comparing", result);
        return {
          id: id,
          title: title,
          image: `https://image.tmdb.org/t/p/original${poster_path}`,
          genres: result
        }
      } catch (error) {
          if (error instanceof Error) console.log(error.message);
      } finally {
          setIsLoading(false);
      }
    }
    // getMovies()
    getMovies(getNowPlayingMovie, setNowPlaying)
    getMovies(getUpComingMovies, setUpComing)
    }, [])
    
    console.log("now playing", nowPlaying);
  
  return (
    <>
      <main className="px-5 py-5">
        <section className="hero md:flex md:justify-around md:mt-12">
          <div className="hero-desc md:w-4/8 md:flex md:flex-col md:items-start md:justify-center">
            <p className="font-bold text-primary text-[1.125rem]/8 text-center">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </p>
            <p className="font-medium text-[2rem]/10 text-center py-5 md:text-start">
              Experience the Magic of Cinema: Book Your Tickets Today
            </p>
            <p className="text-base/8 text-secondary pb-5">
              Sign up and get the ticket with a lot of discount
            </p>
          </div>
          <div
            className="hero-img grid grid-cols-2 grid-rows-3 gap-2 bg-cover md:w-3/8"
            style={{
              gridTemplateAreas: `
              'hero1 hero2'
              'hero3 hero2'
              'hero3 hero4'
            `,
            }}
          >
            <div
              className="h-30 bg-cover"
              style={{backgroundImage: `url(${hero1})`, gridArea: "hero1"}}
            ></div>
            <div
              className="h-full bg-cover rounded-l"
              style={{backgroundImage: `url(${hero2})`, gridArea: "hero2"}}
            ></div>
            <div
              className="h-full bg-cover"
              style={{backgroundImage: `url(${hero3})`, gridArea: "hero3"}}
            ></div>
            <div
              className="h-full bg-cover"
              style={{backgroundImage: `url(${hero4})`, gridArea: "hero4"}}
            ></div>
            {/* <div style={{ backgroundImage: "url('src/assets/hero-4.png')" }}></div> */}
          </div>
        </section>
        <section className="why-choose-us pb-8 pt-[4.5rem] text-center md:text-start">
          <h2 className="font-bold text-primary text-[1.125rem]/8 text-center md:text-start">
            WHY CHOOSE US
          </h2>
          <h3 className="font-normal text-[2rem]/10 text-center py-5 md:text-start">
            Unleashing the Ultimate Movie Experience
          </h3>
          <ul className="flex flex-col gap-5 mt-5 md:flex-row">
            <li className="">
              <svg
                className="w-full md:w-1/5"
                width="55"
                height="54"
                viewBox="0 0 55 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="27.5"
                  cy="27"
                  rx="26.9756"
                  ry="27"
                  fill="#1D4ED8"
                  fillOpacity="0.2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.2525 36.9137C27.3633 36.9715 27.4871 37.0009 27.6109 37C27.7347 36.999 27.8576 36.9686 27.9693 36.9097L31.5372 35.0025C32.549 34.4631 33.3413 33.8601 33.9594 33.1579C35.3034 31.6282 36.0373 29.6758 36.0242 27.6626L35.9819 21.022C35.9779 20.2571 35.4755 19.5746 34.7326 19.3265L28.0951 17.0996C27.6955 16.9642 27.2575 16.9672 26.8649 17.1064L20.2527 19.4128C19.5137 19.6707 19.0204 20.3581 19.0244 21.124L19.0667 27.7597C19.0798 29.7758 19.8389 31.7194 21.205 33.2335C21.8292 33.9258 22.6286 34.52 23.6514 35.0505L27.2525 36.9137ZM26.308 29.1089C26.457 29.2521 26.6503 29.3227 26.8436 29.3207C27.0369 29.3198 27.2292 29.2472 27.3761 29.1021L31.2752 25.2581C31.5682 24.9688 31.5652 24.504 31.2692 24.2187C30.9722 23.9333 30.494 23.9353 30.201 24.2245L26.8325 27.5449L25.4533 26.2191C25.1563 25.9337 24.6791 25.9367 24.3851 26.226C24.0922 26.5152 24.0952 26.98 24.3922 27.2654L26.308 29.1089Z"
                  fill="#1D4ED8"
                />
              </svg>
              <p className="font-bold text-lg my-3">Guaranteed</p>
              <p className="text-title-info-first">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </li>
            <li>
              <svg
                className="w-full md:w-1/5"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="27.5"
                  cy="27.752"
                  rx="26.9756"
                  ry="27"
                  fill="#1D4ED8"
                  fillOpacity="0.2"
                />
                <g clipPath="url(#clip0_16_9722)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.7246 37.752C33.5236 37.752 38.2246 33.051 38.2246 27.252C38.2246 21.453 33.5236 16.752 27.7246 16.752C21.9256 16.752 17.2246 21.453 17.2246 27.252C17.2246 33.051 21.9256 37.752 27.7246 37.752ZM32.6863 24.9949C33.0707 24.6105 33.0707 23.9872 32.6863 23.6028C32.3018 23.2184 31.6786 23.2184 31.2942 23.6028L26.084 28.813L24.155 26.884C23.7706 26.4996 23.1473 26.4996 22.7629 26.884C22.3785 27.2684 22.3785 27.8917 22.7629 28.2761L25.3879 30.9011C25.7723 31.2855 26.3956 31.2855 26.78 30.9011L32.6863 24.9949Z"
                    fill="#1D4ED8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_9722">
                    <rect
                      width="21"
                      height="21"
                      fill="white"
                      transform="translate(17.2246 16.752)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-bold text-lg my-3">Affordable</p>
              <p className="text-title-info-first">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </li>
            <li>
              <svg
                className="w-full md:w-1/5"
                width="53"
                height="55"
                viewBox="0 0 53 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="26.5003"
                  cy="27.5039"
                  rx="25.9447"
                  ry="27"
                  fill="#1D4ED8"
                  fillOpacity="0.2"
                />
                <path
                  d="M17.4111 16.5039C16.0753 16.5039 14.9824 17.5477 14.9824 18.8234V32.7401L18.6254 29.2609H29.5544C30.8902 29.2609 31.9831 28.2171 31.9831 26.9414V18.8234C31.9831 17.5477 30.8902 16.5039 29.5544 16.5039H17.4111ZM34.4118 22.3025V26.9414C34.4118 29.4998 32.2333 31.5803 29.5544 31.5803H22.2684V32.7401C22.2684 34.0158 23.3613 35.0595 24.6971 35.0595H35.6261L39.2691 38.5387V24.622C39.2691 23.3463 38.1762 22.3025 36.8404 22.3025H34.4118Z"
                  fill="#1D4ED8"
                />
              </svg>
              <p className="font-bold text-lg my-3">24/7 Customer Support</p>
              <p className="text-title-info-first">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </li>
          </ul>
        </section>
        <section className="movies my-10">
          <h2 className="font-bold text-primary text-[1.125rem]/8 text-center">
            MOVIES
          </h2>
          <h3 className="font-normal text-[2rem]/10 text-center py-5 mb-5">
            Exciting Movies That Should Be Watched Today
          </h3>
          <ul className="movies-carousel flex gap-4 overflow-x-scroll md:py-5">
            {
            isLoading 
              ? ( <p>Loading...</p> )
              : nowPlaying.length !== 0
                ? nowPlaying.map((movie, index) => {
                  console.log("Movie nih bos", movie.id);
                    return (
                      <li key={index}>
                        <Card 
                          id={movie.id}
                          title={movie.title}
                          image={movie.image}
                          genres = {movie.genres}
                        />
                      </li>
                    )
                  })
                : ( <p>There are no movies in this category</p> )
            }
          </ul>
          <Link to="/movie/all" className="flex place-items-center justify-center my-5">
            View All
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 10L2.5 10"
                stroke="#1D4ED8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 5L17.5 10L12.5 15"
                stroke="#1D4ED8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </section>
        <section className="up-coming-movies my-5 md:py-5">
          <h2 className="font-bold text-primary text-[1.125rem]/8">
            UPCOMING MOVIES
          </h2>
          <h3 className="font-normal text-[2rem]/10 py-5 mb-5">
            Exciting Movie Coming Soon
          </h3>
          <ul className="movies-carousel flex gap-3 overflow-x-scroll md:py-5">
          {
            isLoading 
              ? ( <p>Loading...</p> )
              : upComing.length !== 0
                ? upComing.map((movie, index) => {
                    return (
                      <li key={index}>
                        <Card 

                          title={movie.title}
                          image={movie.image}
                          genres = {movie.genres}
                        />
                      </li>
                    )
                  })
                : ( <p>There are no movies in this category</p> )
            }
          </ul>
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

export default Home;
