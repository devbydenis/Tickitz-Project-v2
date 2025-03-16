// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const urlNowPlayingMovie = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
const urlGenre = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE'
  }
};

export function getNowPlayingMovie() {
  const response = fetch(urlNowPlayingMovie, options);
  return response
}

export function getGenres() {
  const response = fetch(urlGenre, options);
  return response
}