import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div class="container">
        <NavLink to="/countries" className="navbar-brand">Wiki Countries </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
