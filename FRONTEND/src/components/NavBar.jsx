import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">La RST — Frontend</div>
      <nav className="navbar-links">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/volunteers">Bénévoles</NavLink>
        <NavLink to="/beneficiaries">Bénéficiaires</NavLink>
        <NavLink to="/missions">Missions</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
