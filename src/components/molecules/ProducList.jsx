import React, { useState, useEffect } from "react";
import pict1 from "../../assets/images/g1.jpg";
import pict2 from "../../assets/images/g2.jpg";
import pict3 from "../../assets/images/g4.jpg";
import pict5 from "../../assets/images/g5.jpg";
import pict6 from "../../assets/images/g6.jpg";
import prf1 from "../../assets/images/prf1.png";
import prf2 from "../../assets/images/prf2.png";
import prf3 from "../../assets/images/prf3.png";
import prf4 from "../../assets/images/prf4.png";
import prf5 from "../../assets/images/prf5.png";
import prf6 from "../../assets/images/prf6.png";

const categories = [
  "Pemasaran",
  "Digital & Teknologi",
  "Pengembangan Diri",
  "Bisnis Manajemen",
  "Desain",
];

const priceRanges = [
  { label: "Harga Rendah", value: "low" },
  { label: "Harga Tinggi", value: "high" },
];

const durations = [
  { label: "Kurang dari 4 Jam", value: "<4" },
  { label: "4 - 8 Jam", value: "4-8" },
  { label: "Lebih dari 8 Jam", value: ">8" },
];

export default function ProducList({ products, onUpdate, onDelete }) {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: null,
    duration: null,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMethod, setSortMethod] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState({
    categories: false,
    price: false,
    duration: false,
  });
  const itemsPerPage = 6;

  // Filter products based on filters and search term
  const filteredProducts = products
    .filter((product) => {
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.category)
      ) {
        return false;
      }
      if (filters.priceRange === "low" && product.price > 150000) return false;
      if (filters.priceRange === "high" && product.price <= 150000)
        return false;
      if (filters.duration === "<4" && product.duration >= 4) return false;
      if (
        filters.duration === "4-8" &&
        (product.duration < 4 || product.duration > 8)
      )
        return false;
      if (filters.duration === ">8" && product.duration <= 8) return false;
      if (
        searchTerm &&
        !product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (!sortMethod) return 0;
      switch (sortMethod) {
        case "harga-rendah":
          return a.price - b.price;
        case "harga-tinggi":
          return b.price - a.price;
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        case "rating-tertinggi":
          return b.rating - a.rating;
        case "rating-terendah":
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const toggleCategory = (category) => {
    setFilters((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
    setCurrentPage(1);
  };

  const setPriceFilter = (priceRange) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === priceRange ? null : priceRange,
    }));
    setCurrentPage(1);
  };

  const setDurationFilter = (duration) => {
    setFilters((prev) => ({
      ...prev,
      duration: prev.duration === duration ? null : duration,
    }));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (method) => {
    setSortMethod(method);
  };

  const resetFilters = () => {
    setFilters({ categories: [], priceRange: null, duration: null });
    setSearchTerm("");
    setSortMethod(null);
    setCurrentPage(1);
  };

  const toggleFilterSection = (section) => {
    setFilterOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Mobile Filter */}
      <div className="md:hidden mb-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Filter</h2>
            <button
              onClick={resetFilters}
              className="text-indigo-600 hover:text-indigo-800 text-sm"
            >
              Reset
            </button>
          </div>
          {/* Collapsible filter sections */}
          <div>
            <button
              onClick={() => toggleFilterSection("categories")}
              className="flex items-center justify-between w-full py-2 text-left border-b border-gray-200"
            >
              <span className="text-green-600 font-semibold">Bidang Studi</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  filterOpen.categories ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {filterOpen.categories && (
              <div className="pl-4 py-2">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-2 mb-1 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleFilterSection("price")}
              className="flex items-center justify-between w-full py-2 text-left border-b border-gray-200"
            >
              <span className="text-green-600 font-semibold">Harga</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  filterOpen.price ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {filterOpen.price && (
              <div className="pl-4 py-2">
                {priceRanges.map((price) => (
                  <label
                    key={price.value}
                    className="flex items-center space-x-2 mb-1 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.priceRange === price.value}
                      onChange={() => setPriceFilter(price.value)}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                    <span>{price.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleFilterSection("duration")}
              className="flex items-center justify-between w-full py-2 text-left border-b border-gray-200"
            >
              <span className="text-green-600 font-semibold">Durasi</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  filterOpen.duration ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {filterOpen.duration && (
              <div className="pl-4 py-2">
                {durations.map((duration) => (
                  <label
                    key={duration.value}
                    className="flex items-center space-x-2 mb-1 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.duration === duration.value}
                      onChange={() => setDurationFilter(duration.value)}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                    <span>{duration.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Filter Sidebar */}
      <div className="hidden md:block">
        <aside className="w-72 bg-white rounded-lg p-6 shadow-md sticky top-24 max-h-[calc(100vh-96px)] overflow-y-auto scrollbar-thin">
          <header className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filter</h2>
            <button
              onClick={resetFilters}
              className="text-indigo-600 hover:text-indigo-800 text-sm"
            >
              Reset
            </button>
          </header>
          {/* Categories */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">Bidang Studi</h3>
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-2 mb-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span>{category}</span>
              </label>
            ))}
          </section>
          {/* Price */}
          <section className="mb-6">
            <h3 className="font-semibold mb-2">Harga</h3>
            {priceRanges.map((price) => (
              <label
                key={price.value}
                className="flex items-center space-x-2 mb-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.priceRange === price.value}
                  onChange={() => setPriceFilter(price.value)}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span>{price.label}</span>
              </label>
            ))}
          </section>
          {/* Duration */}
          <section>
            <h3 className="font-semibold mb-2">Durasi</h3>
            {durations.map((duration) => (
              <label
                key={duration.value}
                className="flex items-center space-x-2 mb-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.duration === duration.value}
                  onChange={() => setDurationFilter(duration.value)}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span>{duration.label}</span>
              </label>
            ))}
          </section>
        </aside>
      </div>

      {/* Product List Section */}
      <section className="flex-1 bg-white rounded-lg p-6 shadow-md overflow-auto">
        {/* Header with search and sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <select
            value={sortMethod || ""}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full md:w-48 order-2 md:order-1"
          >
            <option value="">Urutkan</option>
            <option value="harga-rendah">Harga Rendah</option>
            <option value="harga-tinggi">Harga Tinggi</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
            <option value="rating-tertinggi">Rating Tertinggi</option>
            <option value="rating-terendah">Rating Terendah</option>
          </select>
          <input
            type="search"
            placeholder="Cari Kelas"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full md:w-64 order-1 md:order-2"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow p-4 flex space-x-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{product.description}</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <img
                      src={product.profileImage}
                      alt={product.profileName}
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {product.profileName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.profilePosition}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  {product.priceDiscount ? (
                    <>
                      <p className="text-gray-500 line-through">
                        Rp {product.price.toLocaleString()}
                      </p>
                      <p className="text-green-600 font-semibold">
                        Rp {product.priceDiscount.toLocaleString()}
                      </p>
                    </>
                  ) : (
                    <p className="text-green-600 font-semibold">
                      Rp {product.price.toLocaleString()}
                    </p>
                  )}
                  <p className="text-yellow-500">
                    {"⭐".repeat(Math.round(product.rating))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 ${
                currentPage === i + 1 ? "bg-yellow-400 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      </section>
    </div>
  );
}
