import React from "react";
import aboutImg from "../assets/land.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins] flex flex-col items-center justify-center">
      {/* About Section */}
      <section className="pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Heading */}
            <div className="md:w-6/12 flex flex-col justify-start">
              <h1 className="text-5xl font-semibold text-emerald-500 mb-4">
                Our Story
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Discover a world of knowledge and imagination with{" "}
                <span className="text-emerald-400 font-semibold">
                  DevGriffins Book Explorer
                </span>
                . We simplify book discovery with curated tools, a clean and
                intuitive interface, and reliable data from the Open Library API.
                Our mission is to make exploring books effortless — whether
                you’re a casual reader or a lifelong learner. From timeless
                classics to hidden gems, DevGriffins Book Explorer helps you find
                stories that inspire, educate, and stay with you.
              </p>

              {/* Small description */}
              <div className="mt-6 flex gap-4 items-center">
                <div className="inline-block text-sm bg-emerald-600/15 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-600/20">
                  Curated Collections
                </div>
                <div className="inline-block text-sm bg-white/5 text-gray-300 px-3 py-1 rounded-lg border border-white/6">
                  Open Library powered
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-6/12 flex justify-end">
              <div className="w-full md:w-[650px] lg:w-[700px]">
                <img
                  src={aboutImg}
                  alt="DevGriffins Books"
                  className="w-full h-[350px] md:h-[380px] lg:h-[360px] rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 flex flex-wrap justify-center gap-40">
            <div className="text-center">
              <h2 className="text-6xl font-semibold text-emerald-400">50M+</h2>
              <p className="text-gray-400 mt-2">Books explored by readers</p>
            </div>
            <div className="text-center">
              <h2 className="text-6xl font-semibold text-emerald-400">98%</h2>
              <p className="text-gray-400 mt-2">User satisfaction rate</p>
            </div>
            <div className="text-center">
              <h2 className="text-6xl font-semibold text-emerald-400">15+</h2>
              <p className="text-gray-400 mt-2">Trusted literary partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mt-16 px-8 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4 text-emerald-400">
            Our Vision
          </h3>
          <p className="text-gray-300">
            At DevGriffins, we believe in empowering readers and learners around
            the world. Our Book Explorer brings you closer to millions of
            titles—seamlessly, beautifully, and intelligently.
          </p>
        </div>
      </section>

      <footer className="w-full bg-emerald-700 text-gray-100 border-t border-emerald-800 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-blue-950 text-xl font-semibold mb-3">DevGriffins Books</h2>
            <p className="text-sm leading-relaxed text-gray-200">
              Empowering readers through knowledge. Explore articles, guides, and stories that inspire creativity and lifelong learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-950 font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-all duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-all duration-300">About Us</a></li>
              <li><a href="/blog" className="hover:text-white transition-all duration-300">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-all duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-blue-950 font-bold mb-3">Contact</h3>
            <p className="text-sm text-gray-200">📍 Colombo, Sri Lanka</p>
            <p className="text-sm text-gray-200">📞 +94 77 123 4567</p>
            <p className="text-sm text-gray-200">✉️ support@devgriffins.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-blue-950 font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-all duration-300">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-all duration-300">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-all duration-300">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-all duration-300">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-emerald-800 pt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">DevGriffins Books</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
