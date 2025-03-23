import React from "react";

function AddMovie() {
  return (
    <>
      <section className="mx-5 md:w-1/2 md:mx-auto bg-white py-12 px-9 rounded-lg flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Add New Movie</h1>
        <div className="flex flex-col gap-2">
          <p className="text-title-info-first font-normal text-base">Upload Image</p>
          <label className="bg-primary w-24 text-center text-white text-xs font-semibold rounded py-2" htmlFor="upload">Upload</label>
          <input
            className="hidden"
            type="file"
            name="upload"
            id="upload"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-title-info-first font-normal text-base" htmlFor="movieName">Movie Name</label>
          <input
            className="focus:outline-none border-1 border-gray-300 h-14 rounded px-3"
            type="text"
            name="movieName"
            id="movieName"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-title-info-first font-normal text-base" htmlFor="category">Category</label>
          <input
            className="focus:outline-none border-1 border-gray-300 h-14 rounded px-3"
            type="text"
            name="category"
            id="category"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-title-info-first font-normal text-base" htmlFor="releaseDate">Release Date</label>
            <input
              className="focus:outline-none border-1 border-gray-300 h-14 rounded px-3 text-secondary"
              type="date"
              name="releaseDate"
              id="releaseDate"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-title-info-first font-normal text-base" htmlFor="duration">{"Duration (hour/minute)"}</label>
            <div className="flex gap-3">
              <input
                className="focus:outline-none max-w-20 border-1 border-gray-300 h-14 rounded px-3"
                type="number"
                name="durationHour"
                id="duration"
                min={0}
              />
              <input
                className="focus:outline-none max-w-20 border-1 border-gray-300 h-14 rounded px-3"
                type="number"
                name="durationMinute"
                id="durationMinute"
                min={0}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-title-info-first font-normal text-base" htmlFor="directorName">Director Name</label>
          <input
            className="focus:outline-none border-1 border-gray-300 h-14 rounded px-3"
            type="text"
            name="directorName"
            id="directorName"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-title-info-first font-normal text-base" htmlFor="cast">Cast</label>
          <input
            className="focus:outline-none border-1 border-gray-300 h-14 rounded px-3"
            type="text"
            name="cast"
            id="cast"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-title-info-first font-normal text-base" htmlFor="synopsis">Synopsis</label>
          <textarea className="focus:outline-none border-1 border-gray-300 p-3 h-40" name="synopsis" id="synopsis"></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-title-info-first font-normal text-base" htmlFor="location">Add Location</label>
          <input
            className="focus:outline-none border-1 border-gray-300 h-14 rounded px-3"
            type="text"
            name="location"
            id="location"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-title-info-first font-normal text-base" htmlFor="dateandtime">Date & Time</label>
          <input
            className="focus:outline-none border-1 border-gray-300 h-14 rounded px-3"
            type="datetime"
            name="dateandtime"
            id="dateandtime"
          />
          <button type="button">+</button>
          <p className="text-center">8.30 - 10.30</p>
        </div>
        <button className="bg-primary text-white py-2 rounded font-bold active:scale-95 transition-all" type="submit">Save Movie</button>
      </section>
    </>
  );
}

export default AddMovie;
