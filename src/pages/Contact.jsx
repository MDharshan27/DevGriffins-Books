import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins] flex flex-col items-center justify-center">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-emerald-400 pt-32 mb-8">
        DevGriffins Contact
      </h1>

      {/* Contact Section */}
      <div className="max-w-7xl w-full bg-gray-900/50 backdrop-blur-md shadow-2xl rounded-3xl p-10 mb-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Info */}
        <div className="flex-1 space-y-6">
          <p className="uppercase text-sm tracking-widest text-emerald-400">
            We're here to help you
          </p>
          <h2 className="text-4xl font-semibold leading-snug">
            Discuss Your <br />
            <span className="text-emerald-400">Book Explorer Experience</span>
          </h2>
          <p className="text-gray-300 text-sm">
            Have questions about our Book Explorer project, suggestions for new
            features, or issues using our app? We’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3">
                <i className="bx bx-envelope text-emerald-400 text-xl"></i>
              </div>
              <p className="text-gray-300">
                <span className="text-white font-medium">E-mail:</span>
                <br />
                support@devgriffins.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3">
                <i className="bx bx-phone text-emerald-400 text-xl"></i>
              </div>
              <p className="text-gray-300">
                <span className="text-white font-medium">Phone number:</span>
                <br />
                +94 71 728 5063
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full">
          <form className="bg-gray-800 rounded-2xl p-8 shadow-lg space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              rows="4"
              placeholder="Tell us your feedback or message"
              className="w-full bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-all duration-300 w-full font-medium"
            >
              <i className="bx bx-send text-xl"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>

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

export default Contact;
