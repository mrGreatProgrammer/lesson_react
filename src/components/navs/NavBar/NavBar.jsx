import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active-link" : ""); 

const NavBar = ({ links }) => {


  return (
    <div>
      <nav className="header__nav_bar flex space-x-3">
        {links.map((e, id) => (
          <li key={id} className="list-none border-none text-lg uppercase">
            <NavLink to={e.linkHref} className={setActive}>
              {/* <a> */}
              {e.linkTxt}
              {/* </a> */}
            </NavLink>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
