import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // ✅ Fixed destructuring
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md text-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* ---------- LOGO ---------- */}
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-extrabold tracking-wide cursor-pointer"
        >
          <span className="text-yellow-400">Trend</span>.pk
        </h1>

        {/* ---------- NAV LINKS (Desktop) ---------- */}
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

        {/* ---------- PROFILE / LOGIN + MOBILE BUTTON ---------- */}
        <div className="flex items-center gap-4 relative">
          {token ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <img
                  className="w-9 h-9 rounded-full border-2 border-yellow-400"
                  src={assets.profile_pic}
                  alt="Profile"
                />
                <img
                  className={`w-3 transition-transform duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  src={assets.dropdown_icon}
                  alt="Dropdown"
                />
              </div>

              {/* ---------- DROPDOWN ---------- */}
              {showDropdown && (
                <div className="absolute top-12 right-0 bg-white text-gray-800 rounded-md shadow-lg flex flex-col gap-3 p-4 w-48 z-50">
                  <p
                    onClick={() => {
                      navigate("/my-profile");
                      setShowDropdown(false);
                    }}
                    className="hover:text-blue-600 cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate("/my-orders");
                      setShowDropdown(false);
                    }}
                    className="hover:text-blue-600 cursor-pointer"
                  >
                    My Orders
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      setShowDropdown(false);
                    }}
                    className="hover:text-blue-600 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-yellow-400 text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Sign In
            </button>
          )}

          {/* ---------- HAMBURGER MENU (Mobile) ---------- */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-7 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="Menu"
          />
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
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
                navigate("/login");
                setShowMenu(false);
              }}
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
