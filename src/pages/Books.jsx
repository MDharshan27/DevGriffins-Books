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
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins]">
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
          {books.slice(0, 15).map((book, i) => {
            const coverId = book.cover_i;
            const coverImage = coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
              : "https://via.placeholder.com/300x450?text=No+Cover";
            const title = book.title || "Untitled";
            const author = book.author_name?.[0] || "Unknown Author";

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
                  <p className="text-gray-400 mb-3 text-sm italic">
                    by {author}
                  </p>
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
      <footer className="w-full bg-gray-950 py-8 text-center border-t border-gray-800 mt-auto">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-400 font-medium">DevGriffins Books</span>.{" "}
          All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
