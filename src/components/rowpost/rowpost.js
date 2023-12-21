import { React, useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

import "./rowpost.css";
function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [Urlid, setUrlid] = useState('')
  useEffect(() => {
    axios.get(props.URL).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
      
    }) .catch(err=>{
      alert('error')
    })
  }, [])
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      
      if(response.data.results.length!=0){

        setUrlid(response.data.results[0])
        console.log(Urlid.key)
      }else{
        console.log('no video')
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>

            <img onClick={()=>handleMovie(obj.id)} className='poster' src={`${imageUrl+obj.poster_path}`} alt="poster" />

          )}
           

        </div>
        { Urlid && <Youtube opts={opts} videoId={Urlid.key}/>   }
        

    </div>
  )
}

export default Rowpost