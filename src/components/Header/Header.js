import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../../assets/dummy_profile.png';
import './Header.scss'

function Header() {
  return (
    <div className='header'>
        <Link to='/'>
            <div className='logo'>Moovie App</div> 
        </Link>        
        <div className='user-image'>
            <img src={Photo} alt='user' />
        </div>       
    </div>
  )
}

export default Header