import { useState } from "react";
import beauty from "../assets/assets_frontend/beauty.png";

const Header = ({ onSearchChange, onCategoryChange }) => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  return (
    <header className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 sm:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${beauty})` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
          Discover the Latest <span className="text-yellow-400">Trends</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-100 max-w-2xl">
          Shop electronics, fashion, accessories, and more all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-2xl p-4 w-full sm:max-w-2xl md:max-w-xl lg:max-w-2xl border border-gray-200">
          <select
            value={category}
            onChange={handleCategory}
            className="text-gray-700 bg-gray-100 px-4 py-2 rounded-md outline-none text-sm font-medium w-full sm:w-auto hover:bg-gray-200 transition"
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Home & Living</option>
          </select>

          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={handleSearch}
            className="flex-grow px-4 py-2 rounded-md outline-none text-gray-700 text-sm border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 w-full transition"
          />

          <button className="bg-yellow-400 text-blue-800 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition duration-300 w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
