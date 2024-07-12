import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='box1'>
    <div className='navbar-elements'>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        Home
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        Contact
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        Projects
      </NavLink>
    </div> </div>
  );
}

export default Navbar;
