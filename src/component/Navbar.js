import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../assets/planet.png';
import { getMissions } from './redux/missions/missionsSlice';
import { getRockets } from './redux/rockets/rocketsSlice';

export default function Navbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div>
      <header>
        <a className="logo" href="/">
          <img src={logo} alt="Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </a>
        <nav className="navbar">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="missions">Missions</NavLink>
          <hr />
          <NavLink to="myprofile">My Profile</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
