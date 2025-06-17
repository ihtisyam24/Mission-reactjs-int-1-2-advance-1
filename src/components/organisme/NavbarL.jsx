import React from "react";
import logo from "../../assets/images/logo.png";

function NavbarL(props) {
  return (
    <>
      <nav className="border-gray-200 bg-white shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-14" alt="" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavbarL;
