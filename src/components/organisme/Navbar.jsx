import React from "react";
import Logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="border-gray-200 bg-white-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <img src={Logo} className="h-14" alt="Logo" />
          </a>
        </div>
      </nav>
    </>
  );
}
