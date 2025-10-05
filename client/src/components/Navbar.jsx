import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-[#010d1f] shadow-md">
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo} className="w-24 sm:w-28 lg:w-32 max-h-12 object-contain drop-shadow-md" />
      </Link>

      {/* Right Side */}
      <div>
        {user ? (
          <div className="flex items-center justify-center text-center gap-3 sm:gap-5">
            {/* Credits Button */}
            <button
              className="flex items-center gap-2 bg-blue-100/20 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:scale-105 transition shadow-sm"
              onClick={() => navigate("/buy")}
            >
              <img src={assets.credit_star} className="w-5" />
              <p className="text-xs sm:text-sm font-medium text-blue-100">
                Credits left : {credit}
              </p>
            </button>

            {/* User Greeting */}
            <p className="text-blue-100 max-sm:hidden pl-4">
              Hi, {user.name}
            </p>

            {/* Profile Dropdown */}
            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 drop-shadow cursor-pointer" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12">
                <ul className="list-none m-0 p-2 bg-[#1e3a8a] rounded-md border border-blue-400 text-sm text-blue-100 shadow-lg">
                  <li
                    onClick={logout}
                    className="px-2 py-1 cursor-pointer pr-10 hover:text-yellow-400"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Pricing */}
            <p
              className="cursor-pointer text-blue-100 hover:text-yellow-400 transition"
              onClick={() => navigate("/buy")}
            >
              Pricing
            </p>

            {/* Login Button */}
            <button
              onClick={() => setShowLogin(true)}
              className="bg-yellow-400 text-[#1e3a8a] px-7 py-2 sm:px-10 text-sm rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;





