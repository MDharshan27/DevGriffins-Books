import React, { useState, useEffect } from "react";
import Hero from "./Hero";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch famous or trending books automatically
  useEffect(() => {
    setLoading(true);
    setError(null);

    // You can change query for different category (e.g., 'fantasy', 'science', 'bestseller')
    fetch(`https://openlibrary.org/search.json?q=famous+books&limit=18`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="font-[Poppins] bg-gray-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Famous Books Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-900">
        <h2 className="text-5xl font-semibold text-center mb-12 text-emerald-400">
          Famous Books Collection
        </h2>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-300 text-lg animate-pulse">
            Loading books...
          </p>
        )}

        {/* Error State */}
        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {/* Books Grid */}
        {!loading && !error && books.length > 0 && (
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 max-w-7xl mx-auto">
            {books.slice(0, 18).map((book, i) => {
              const coverId = book.cover_i;
              const coverImage = coverId
                ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
                : "https://via.placeholder.com/300x450?text=No+Cover";
              const title = book.title || "Untitled";
              const author = book.author_name?.[0] || "Unknown Author";

              return (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl overflow-hidden shadow-lg flex flex-col"
                >
                  <img
                    src={coverImage}
                    alt={title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4 flex flex-col grow">
                    <h3 className="text-lg font-semibold mb-1 text-emerald-400 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-gray-400 mb-3 text-sm italic">
                      by {author}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-950 border-t border-gray-800">
        <h2 className="text-5xl font-semibold text-center mb-12 text-emerald-400">
          What Our Readers Say
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              quote:
                "DevGriffins Books helped me discover so many hidden literary gems! Absolutely love the experience.",
            },
            {
              name: "Michael Lee",
              quote:
                "Clean interface, fast loading, and amazing book variety. My go-to site for exploring new reads!",
            },
            {
              name: "Ananya Silva",
              quote:
                "A beautiful platform that makes book discovery enjoyable. I’ve already bookmarked several titles!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
              <h4 className="text-emerald-400 font-semibold">{t.name}</h4>
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

export default Home;
