import React from "react";
import HeaderNavBar from "../navs/HeaderNavBar/HeaderNavBar";
import Logo from "../ui/Logo/Logo";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center space-x-60">
          <Logo />
          <HeaderNavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
