import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
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
          {["/", "/products", "/about", "/order", "/cart"].map((path, idx) => {
            const names = ["Home", "Products", "About", "Order", "Cart"];
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-base no-underline ${
                      isActive
                        ? "text-yellow-400 font-semibold"
                        : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {names[idx]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 relative">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <img
            onClick={() => setShowMenu(true)}
            className="w-7 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="Menu"
          />
        </div>
      </div>

      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-900 bg-opacity-95 text-white flex flex-col items-center justify-center gap-8 text-lg font-medium z-50 md:hidden transition-all">
          <button
            className="absolute top-6 right-6 text-3xl font-bold"
            onClick={() => setShowMenu(false)}
          >
            ✕
          </button>

          {["/", "/products", "/about", "/order", "/cart"].map((path, idx) => {
            const names = ["Home", "Products", "About", "Order", "Cart"];
            return (
              <NavLink key={idx} to={path} onClick={() => setShowMenu(false)}>
                {names[idx]}
              </NavLink>
            );
          })}

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </div>
  );
};

export default Navbar;
