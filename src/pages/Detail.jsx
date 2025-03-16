import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
  const [moviesDetail, setMoviesDetail] = useState([])
  const params = useParams()
  
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE'
      }
    };
    
    async function getDetailMovie() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);
        
        const dataJSON = await response.json()
        const data = dataJSON.results
        console.log("data movies", data);
        setMoviesDetail(data)
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      } 
    }

    getDetailMovie()
  }, [params.id])
  
  return (
    <>
      <main className=''>
        
      </main>
    </>
  )
}

export default Detail