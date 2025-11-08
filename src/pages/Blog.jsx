// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "./BlogData";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins] flex flex-col">
      {/* Header Section */}
      <section className="pt-32 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold text-emerald-500 mb-4">
            Our Blog
          </h1>
          <p className="text-gray-300 text-lg">
            Insights, stories, and ideas from our passionate community of readers.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="mt-16 px-8 pb-24">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 rounded-2xl shadow-xl border border-white/10 p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-3">
                {post.date} • by <span className="text-emerald-300">{post.author}</span>
              </p>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
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

export default Blog;
