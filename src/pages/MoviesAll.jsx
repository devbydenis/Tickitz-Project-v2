import React from 'react'

function MoviesAll() {
  return (
    <>
      <main>
      <section class="banner">
        <div class="tagline">
          <p>LIST MOVIE OF THE WEEK</p>
          <p>Experience the Magic of Cinema: Book Your Tickets Today</p>
        </div>
      </section>
      <section class="movies">
        <form>
          <div class="movies-search">
            <label for="movies-search">Cari Event</label>
            <span>
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
              <input type="text" name="movies-search" id="movies-search" />
            </span>
          </div>
          <div class="movies-filter">
            <h5>Filter</h5>
            <div class="filter-container">
              <label class="filter-button">
                <input type="checkbox" name="horror" value="horror" />
                <span>Horror</span>
              </label>
              <label class="filter-button">
                <input type="checkbox" name="romantic" value="romantic" />
                <span>Romantic</span>
              </label>
              <label class="filter-button">
                <input type="checkbox" name="adventure" value="adventure" />
                <span>Adventure</span>
              </label>
              <label class="filter-button">
                <input type="checkbox" name="sci-fi" value="sci-fi" />
                <span>Sci-Fi</span>
              </label>
            </div>
          </div>
        </form>
        <div class="movies-carousel">
    
        </div>
      </section>
      <section class="pagination">
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
      <section class="subscribe">
        <p>Subscribe to our newsletter</p>
        <form>
          <div>
            <label for="firstname"></label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
            />
          </div>
          <div>
            <label for="email"></label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email address"
            />
          </div>
          <button type="button">Subscribe Now</button>
          {/* <!-- change button type later --> */}
        </form>
      </section>
    </main>
    </>
  )
}

export default MoviesAll