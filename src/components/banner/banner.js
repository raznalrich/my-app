import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

import "./banner.css"
function Banner() {
        const [movie, setMovie] = useState()
        const [bannerOpacity, setBannerOpacity] = useState(1);
        const [movieindex,setMovieindex] = useState(0)
    const fetchmovie = ()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        
        const movies = response.data.results;
        const newindex = (movieindex + 1) % movies.length;
        setMovieindex(newindex);
        
        setBannerOpacity(0);
        setTimeout(() => {
          setMovie(movies[newindex]);
          setBannerOpacity(1); // Fading in the new movie content after a short delay
        }, 500);
        
      }) 
    }
    useEffect(() => {
     
      

      const interval = setInterval(() => {
       
          fetchmovie();
          
       
        
      }, 5000);

      return () => clearInterval(interval);

      
    }, [movieindex])
    
  return (

      
      
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`,
    opacity: bannerOpacity,
    transition: 'opacity 0.5s ease-in-out',
  }}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>
            {movie ? movie.overview : ""}
            </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
   
  )
}

export default Banner