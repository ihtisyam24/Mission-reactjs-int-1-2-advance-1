import React from "react";
import Logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src={Logo} alt="Your Company" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile info for desktop */}
              <div className="hidden sm:flex flex-col items-end mr-4">
                <span className="font-bold text-gray-800 text-sm">
                  Kategori
                </span>
              </div>
              {/* Profile image */}
              <div className="relative ml-3 hidden sm:block">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-2">
              {/* Mobile menu button*/}
              <button
                id="mobile-menu-button"
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-black focus:ring-2 focus:ring-black focus:outline-none focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile dropdown menu */}
            <div
              id="mobile-menu"
              className="hidden absolute top-16 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
            >
              <div className="flex flex-col items-center space-y-1 px-4 py-2">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="/assets/images/prf.png"
                  alt="Profile"
                />
                <span className="font-bold text-gray-800 text-sm">
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
