import React, { useEffect,useState } from 'react'
import  './Banner.css';
import {API_KEY,imageUrl} from  '../../Constants/Constant'
import axios from '../../axios'

function Banner() {
  const [Movie, setmovie] = useState()
  useEffect(() => {
     
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{

    console.log(Response.data.results);
    setmovie(Response.data.results.sort(function(a,b){
      return 0.5-Math.random()
    })[0])
  })
  
   
  }, [])
  
  return (
    <div
     style={{backgroundImage:`url(${Movie?imageUrl+Movie.backdrop_path:""})`}}
    className='Banner'>

        <div className='content'>
            <div className='title'>{Movie?Movie.original_name:""}</div>
            <div className='bbuttons'>
                <tr>
               <th> <div className='buttons'> play</div> </th>
               <th> <div className='buttons'>playlist</div> </th>
                </tr>
            </div>
            </div>
            <div className=' Discription'>{Movie?Movie.overview:""}</div>
              <div className='fade_bottom'></div>
 
            </div>
            
  );
}

export default Banner