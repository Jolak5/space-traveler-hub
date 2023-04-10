import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <header>
      <nav>
        <div>
          <h1>Speace Travelers`&apos;` Hub</h1>
        </div>
        <div>
          <NavLink to="/">Missions</NavLink>
          <NavLink to="rockets">Rockets</NavLink>
          <NavLink to="myprofile">My Profile</NavLink>
        </div>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Navbar;
