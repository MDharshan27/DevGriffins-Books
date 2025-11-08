import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=40`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins]">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-emerald-500 pt-32 mb-4">
        DevGriffins Book Explorer
      </h1>
      <p className="text-center text-gray-300 mb-6 px-4">
        Search and discover your favorite books from the Open Library.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <SearchBar onSearch={(val) => setQuery(val.trim() || "all")} />
      </div>

      {/* Book Results */}
      {loading ? (
        <div className="flex justify-center mt-20 text-gray-400 animate-pulse">
          Loading books...
        </div>
      ) : books.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto px-4 pb-16">
          {books.map((book, i) => {
            const coverId = book.cover_i;
            const coverImage = coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
              : "https://via.placeholder.com/300x450?text=No+Cover";

            const title = book.title || "Untitled";
            const author = book.author_name?.join(", ") || "Unknown Author";
            const publishYear = book.first_publish_year || "N/A";
            const publisher = book.publisher?.[0] || "Unknown Publisher";
            const subjects = book.subject?.slice(0, 3).join(", ") || "No subjects listed";
            const edition = book.edition_count || "N/A";

            return (
              <div
                key={i}
                className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 flex flex-col"
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
                  <p className="text-gray-400 mb-2 text-sm italic">
                    by {author}
                  </p>
                  <p className="text-gray-300 text-xs mb-1">
                    <strong>Published:</strong> {publishYear}
                  </p>
                  <p className="text-gray-300 text-xs mb-1">
                    <strong>Publisher:</strong> {publisher}
                  </p>
                  <p className="text-gray-300 text-xs mb-2">
                    <strong>Edition Count:</strong> {edition}
                  </p>
                  <p className="text-gray-400 text-xs italic mb-4 line-clamp-2">
                    <strong>Subjects:</strong> {subjects}
                  </p>
                  <a
                    href={`https://openlibrary.org${book.key}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-medium mt-auto"
                  >
                    View on Open Library →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-400">
          No books found for "<span className="text-emerald-400">{query}</span>"
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-emerald-800 text-gray-100 border-t border-emerald-900 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-blue-950 text-xl font-semibold mb-3">
              DevGriffins Books
            </h2>
            <p className="text-sm leading-relaxed text-gray-200">
              Empowering readers through knowledge. Explore books that inspire creativity and lifelong learning.
            </p>
          </div>

          <div>
            <h3 className="text-blue-950 font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-950 font-bold mb-3">Contact</h3>
            <p className="text-sm text-gray-200">📍 Colombo, Sri Lanka</p>
            <p className="text-sm text-gray-200">📞 +94 77 123 4567</p>
            <p className="text-sm text-gray-200">✉️ support@devgriffins.com</p>
          </div>

          <div>
            <h3 className="text-blue-950 font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="hover:text-white"><i className="fab fa-facebook-f text-lg"></i></a>
              <a href="https://twitter.com" className="hover:text-white"><i className="fab fa-twitter text-lg"></i></a>
              <a href="https://instagram.com" className="hover:text-white"><i className="fab fa-instagram text-lg"></i></a>
              <a href="https://linkedin.com" className="hover:text-white"><i className="fab fa-linkedin-in text-lg"></i></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-emerald-900 pt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">DevGriffins Books</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
