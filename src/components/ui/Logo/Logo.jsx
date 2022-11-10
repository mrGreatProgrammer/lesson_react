import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';

const Logo = () => {
  return (
    <div>
      <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
