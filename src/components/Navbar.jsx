import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md text-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-extrabold tracking-wide cursor-pointer"
        >
          <span className="text-yellow-400">Trend</span>.pk
        </h1>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base no-underline ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-base no-underline ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base no-underline ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-base no-underline ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4 relative">
          {token ? (
            <button
              onClick={() => setToken(false)}
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLoginForm((prev) => !prev)}
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Login
            </button>
          )}

          <img
            onClick={() => setShowMenu(true)}
            className="w-7 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="Menu"
          />
        </div>
      </div>

      {showLoginForm && !token && (
        <div className="absolute top-16 right-6 bg-white text-gray-800 rounded-lg shadow-lg p-6 w-80 z-50">
          <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
            Login
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setToken(true);
              setShowLoginForm(false);
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      )}

      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-900 bg-opacity-95 text-white flex flex-col items-center justify-center gap-8 text-lg font-medium z-50 md:hidden transition-all">
          <button
            className="absolute top-6 right-6 text-3xl font-bold"
            onClick={() => setShowMenu(false)}
          >
            ✕
          </button>

          <NavLink onClick={() => setShowMenu(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/products">
            Products
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/cart">
            Cart
          </NavLink>

          {token ? (
            <p
              onClick={() => {
                setToken(false);
                setShowMenu(false);
              }}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Logout
            </p>
          ) : (
            <button
              onClick={() => {
                setShowLoginForm(true);
                setShowMenu(false);
              }}
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
