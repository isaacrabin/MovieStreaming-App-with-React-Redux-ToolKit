import React, {useEffect} from 'react';
import MoovieList from '../MoovieList/MoovieList';
import './Home.scss'
import moovieApi from '../../common/api/moovieApi';
import {ApiKey} from '../../common/api/moovieApiKey'

function Home() {
  const movieText = 'Mary';
  useEffect(()=>{
    const fetchMoovies = async () =>{
      const response = await moovieApi
      .get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log(err)
      });

      console.log('Response from the API: ',response);
    };
    fetchMoovies();
  },[])
  return (
    <div>
      <div className='banner-image'>
        <MoovieList />
      </div>
    </div>
  )
}

export default Home