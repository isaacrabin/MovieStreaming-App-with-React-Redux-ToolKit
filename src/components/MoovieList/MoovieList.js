import React from 'react'
import { useSelector } from 'react-redux'
import MoovieCard from '../MoovieCard/MoovieCard';
import { getAllMovies } from '../../features/movies/movieSlice';
import './MovieList.scss'

function MoovieList() {
  const movies = useSelector(getAllMovies).payload.movies; 
  let renderMovies = '';

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie,index) => {
      return <MoovieCard key={index} data= {movie} />
    })
  ) : (
    <div className='movie-error'><h3>{movies.error}</h3></div>
  )
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Moovies</h2>
        <div className='movie-container'>
            {renderMovies}
        </div>
      </div>      
    </div>
  )
}

export default MoovieList