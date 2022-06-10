import React from "react";
import isaglogo from "../pictures/isag.png";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="w-32 bg-black">
      <img src={isaglogo} alt="ISAG" />
    </div>
  );
};

const NavLists = () => {
  return (
    <div className=" bg-black flex items-center ">
      <div className="mx-4 text-white">
        <Link to="/">HOME</Link>
      </div>
      <div className="mx-4 text-white">
        <Link to="/about">ABOUT US</Link>
      </div>
      <div className="mx-4 text-white">
        <Link to="/achievement">ACHIEVEMENT</Link>
      </div>
      <div className="mx-4 text-white">
        <Link to="/notion">NOTION</Link>
      </div>
      <div className="mx-4 text-white">
        <Link to="/chamber">CHAMBER</Link>
      </div>
    </div>
  );
};

const NavProfile = () => {
    return (
        <div>
            PROFILE
        </div>
    );
};

export const Navbar = () => {
  return (
    <div className="h-24 w-screen bg-black container mx-auto flex justify-between items-center text-white px-0 py-0">
      <NavLogo />
      <NavLists />
      <NavProfile />
    </div>
  );
};
