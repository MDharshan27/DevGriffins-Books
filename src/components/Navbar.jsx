import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-emerald-500/10 backdrop-blur-md border border-white/30 rounded-full px-10 py-3 shadow-lg flex items-center justify-center gap-10">
      <Link
        to="/"
        className="text-emerald-400 font-semibold hover:text-white transition-all duration-300"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-emerald-400 font-semibold hover:text-white transition-all duration-300"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-emerald-400 font-semibold hover:text-white transition-all duration-300"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
