import React from "react";

export default function CollectionP() {
  return (
    <div>
      <header className="bg-amber-50  sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {/* Hamburger for mobile */}
            <button
              id="mobile-menu-button"
              aria-label="Toggle menu"
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            >
              <span className="material-icons text-gray-700 select-none">
                menu
              </span>
            </button>
            <h1 className="text-lg font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h1>
          </div>

          {/* Search & sorting for desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div>
              <input
                id="search"
                type="search"
                placeholder="Cari Kelas"
                aria-label="Cari Kelas"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>
            <div className="relative">
              <button
                id="sort-button"
                className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-3 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                Urutkan
                <span className="material-icons">expand_more</span>
              </button>
              {/* Sort dropdown */}
              <ul
                id="sort-options"
                tabIndex={-1}
                className="absolute bg-white shadow-lg rounded-md mt-1 w-48 hidden text-gray-700 z-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="listbox"
                aria-label="Pilih metode urutan"
              >
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  role="option"
                  data-value="harga-rendah"
                >
                  Harga Rendah
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  role="option"
                  data-value="harga-tinggi"
                >
                  Harga Tinggi
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  role="option"
                  data-value="a-z"
                >
                  A to Z
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  role="option"
                  data-value="z-a"
                >
                  Z to A
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  role="option"
                  data-value="rating-tertinggi"
                >
                  Rating Tertinggi
                </li>
                <li
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                  role="option"
                  data-value="rating-terendah"
                >
                  Rating Terendah
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile search input and breadcrumb */}
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200 hidden"
        >
          <div className="px-4 py-3">
            <input
              id="mobile-search"
              type="search"
              placeholder="Cari Kelas"
              aria-label="Cari Kelas"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <nav aria-label="Breadcrumb" className="px-4 pb-3">
            <ol className="flex items-center space-x-1 text-gray-600 text-sm select-none">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Home
                </a>
              </li>
              <li>
                <span className="material-icons text-xs">chevron_right</span>
              </li>
              <li>
                <span
                  aria-current="page"
                  className="font-semibold text-gray-900"
                >
                  Koleksi Video
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </div>
  );
}
