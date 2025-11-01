import beauty from "../assets/assets_frontend/beauty.png";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 sm:py-20 overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${beauty})` }}
      ></div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
          Discover the Latest <span className="text-yellow-400">Trends</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-100 max-w-2xl">
          Shop electronics, fashion, accessories, and more — all in one place.
        </p>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-lg overflow-hidden p-3 w-full sm:max-w-2xl md:max-w-xl lg:max-w-2xl">
          {/* Category selector */}
          <select className="text-gray-700 bg-gray-100 px-4 py-2 rounded-md outline-none text-sm font-medium w-full sm:w-auto">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Home & Living</option>
          </select>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-4 py-2 rounded-md outline-none text-gray-700 text-sm w-full"
          />

          {/* Search button */}
          <button className="bg-yellow-400 text-blue-800 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition duration-300 w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
