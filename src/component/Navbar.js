import './Navbar.css';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/planet.png';

const Navbar = () => (
  <div>
    <header>
      <a className="logo" href="/">
        <img src={logo} alt="Logo" />
        <h1>Speace Travelers&apos; Hub</h1>
      </a>
      <nav className="navbar">
        <NavLink to="/">Missions</NavLink>
        <NavLink to="rockets">Rockets</NavLink>
        <hr />
        <NavLink to="myprofile">My Profile</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Navbar;
