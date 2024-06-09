//App
import React from "react";
import { Link } from "react-router-dom";

//Image(s)
import HeaderLogo from "../../assets/HeaderLogo.svg";

const Header = () => {
  return (
    <div>
      <Link to="/home" className="flex items-center justify-center sm:py-[16px] py-[24px]">
        <img src={HeaderLogo} alt="logo-icon" />
      </Link>
      <Link to="/signup" className="">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Header;
