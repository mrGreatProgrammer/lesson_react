import React from "react";
import Counter from "../Counter/Counter";
import SubmitBtn from "../forms/ui/SubmitBtn/SubmitBtn";
import HeaderNavBar from "../navs/HeaderNavBar/HeaderNavBar";
import Logo from "../ui/Logo/Logo";

const Header = () => {
  const [show, setShow] = React.useState(true);

  return (
    <header>
      <div className="container">
        <div className="flex items-center space-x-60">
          <Logo />
          <HeaderNavBar />
        </div>
        <SubmitBtn
        disabled={false}
        txtBtn={"hide"}
        onClick={() => {
          setShow(s=>!s)
        }}
      />
        {show &&
          <Counter />}
      </div>
    </header>
  );
};

export default Header;
