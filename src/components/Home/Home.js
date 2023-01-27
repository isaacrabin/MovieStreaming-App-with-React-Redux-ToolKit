import React, {useEffect} from 'react';
import MoovieList from '../MoovieList/MoovieList';
import './Home.scss'
import moovieApi from '../../common/api/moovieApi';
import {ApiKey} from '../../common/api/moovieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

function Home() {
  const movieText = 'Mary';
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchMoovies = async () =>{
      const response = await moovieApi
      .get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log(err)
      });
      dispatch(addMovies(response.data))
      // console.log('Response from the API: ',response);
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