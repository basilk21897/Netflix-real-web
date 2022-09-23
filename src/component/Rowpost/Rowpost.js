import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Rowpost.css'
import { imageUrl,API_KEY } from '../../Constants/Constant'
import Youtube from 'react-youtube'





function Rowpost(props) {
    const[Movies,Setmovies] = useState([])
    const[Url,Seturl] = useState([])
    useEffect(()=> {
      axios.get(props.url).then((Response)=>{
        console.log(Response.data.results)
        
       Setmovies(Response.data.results)
       
      })
    
    },[])

    const trailerurl=(id)=>
    {
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
        console.log(Response.data.results)
        if(Response.data.results.length!==0){
          Seturl(Response.data.results[0])
           }
           else{
             alert("no trailer")
           }
     
         })

    }
  

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
  },
};
    
  return (
    <div className='row'>
      <h2 >{props.title}</h2>
      <div className='posters'>
        {Movies.map((film) => <img onClick={()=>trailerurl(film.id)} className={props.size=="issmall"?'smallPosters':'poster'}src={`${imageUrl + film.backdrop_path}`} alt='nu' />

        )}
      </div>
      {Url && <Youtube  opts={opts} videoId={Url.key}/>}
    </div>
  )
}

export default Rowpost