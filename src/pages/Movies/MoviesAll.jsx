// import React from 'react'

function MoviesAll() {
  return (
    <>
      <main>
        <section 
          className="banner relative w-full h-96 bg-cover"
          style={{ backgroundImage: "url('src/assets/background.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="relative z-10 tagline text-white p-16">
            <p className="font-bold text-lg md:text-xl mb-3">LIST MOVIE OF THE WEEK</p>
            <p className="font-semibold text-4xl md:text-5xl">Experience the Magic of Cinema: Book Your Tickets Today</p>
          </div>
        </section>
        <section className="movies mx-5">
          <form className="flex flex-wrap justify-start gap-3 mt-5">
            <div className="movies-search">
              <label className="font-semibold inline-block mb-1" htmlFor="movies-search">Cari Event</label>
              <span className="flex border border-gray-300 rounded py-2 px-4">
              <input className="border-none focus:outline-none" type="text" name="movies-search" id="movies-search" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.7664"
                    cy="11.7669"
                    r="8.98856"
                    stroke="#A0A3BD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.0181 18.4854L21.5421 22.0002"
                    stroke="#A0A3BD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="movies-filter">
              <h5 className="font-semibold mb-1">Filter</h5>
              <div className="filter-container flex flex-wrap gap-5">
                <label className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700" htmlFor="Horror">
                  <input className="hidden" type="checkbox" name="horror" id="Horror" value="horror" />
                  <span className="font-medium">Horror</span>
                </label>
                <label className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700" htmlFor="Romantic">
                  <input className="hidden" type="checkbox" name="romantic" id="Romantic" value="romantic" />
                  <span className="font-medium">Romantic</span>
                </label>
                <label className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700" htmlFor="Adventure">
                  <input className="hidden" type="checkbox" name="adventure" id="Adventure" value="adventure" />
                  <span className="font-medium">Adventure</span>
                </label>
                <label className="filter-button cursor-pointer border border-gray-300 has-checked:bg-primary has-checked:text-white bg-white rounded-md py-2 px-6 text-gray-700" htmlFor="Sci-Fi">
                  <input className="hidden" type="checkbox" name="sci-fi" id="Sci-Fi" value="sci-fi" />
                  <span className="font-medium">Sci-Fi</span>
                </label>
              </div>
            </div>
          </form>
          <div className="movies-carousel"></div>
        </section>
        <section className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12H3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 6L21 12L15 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
