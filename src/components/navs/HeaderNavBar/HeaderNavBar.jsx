import React from "react";
import { NavLink } from "react-router-dom";

let links = [
  { id: 1, linkTxt: "home", linkHref: "/" },
  { id: 2, linkTxt: "friends", linkHref: "/friends" },
  { id: 3, linkTxt: "profile", linkHref: "/profile" },
  { id: 4, linkTxt: "usecalback", linkHref: "/whatsreact" },
  { id: 5, linkTxt: "search_comments", linkHref: "/search_comments" },
];

const HeaderNavBar = () => {
  return (
    <div>
      <nav className="header__nav_bar flex space-x-3">
        {links.map((e, id) => (
          <li key={id} className="list-none border-none text-lg uppercase">
            <NavLink to={e.linkHref}>
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

export default HeaderNavBar;
