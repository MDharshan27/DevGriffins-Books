import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/books");
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat font-[Poppins]"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-2xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to{" "}
          <span className="text-emerald-600">DevGriffins Books</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Discover stories, explore knowledge, and get inspired — all in one
          place. Begin your reading adventure with us.
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-3 bg-emerald-600 text-gray-900 font-semibold rounded-full shadow-md hover:bg-emerald-500 hover:scale-105 transition-all duration-300"
        >
          Explore Now
        </button>
      </div>
    </section>

    
  );
};

export default Hero;
