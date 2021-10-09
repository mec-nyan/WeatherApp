import React from 'react';
import SearchBar from './SearchBar.js';
import { NavLink } from 'react-router-dom';
import './Nav.css'


function Nav({onSearch}) {
  return (
    <nav className='topNav'>
      <div className='home'>
        <NavLink activeClassName='active' className='link' to='/'>
          <span>HenryWeather</span>
        </NavLink>
        <NavLink activeClassName='active' className='link' to='/about'>
          <span>About</span>
        </NavLink>
      </div>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
