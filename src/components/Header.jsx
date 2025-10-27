import beauty from "../assets/assets_frontend/beauty.png";

const Header = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${beauty})` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Discover the Latest <span className="text-yellow-400">Trends</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Shop electronics, fashion, accessories and more all in one place.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-full shadow-lg overflow-hidden p-2 md:p-3 max-w-2xl mx-auto md:mx-0">
          <select className="text-gray-700 bg-gray-100 px-4 py-2 rounded-full outline-none text-sm font-medium">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Home & Living</option>
          </select>

          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-4 py-2 outline-none text-gray-700 text-sm"
          />
          <button className="bg-yellow-400 text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
