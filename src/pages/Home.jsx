import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
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
      <h1 className="text-5xl font-bold text-center text-emerald-500 pt-12 mb-4">
        DevGriffins Book Explorer
      </h1>
      <p className="text-center text-gray-300 mb-6 px-4">
        Search and discover your favorite books from the Open Library.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <SearchBar onSearch={(val) => setQuery(val.trim() || "all")} />
      </div>

      {/* Book Results */}
      {loading ? (
        <div className="flex justify-center mt-20 text-gray-400 animate-pulse">
          Loading books...
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 pb-16">
          {books.map((book) => (
            <BookCard
              key={book.key}
              book={{
                title: book.title,
                author: book.author_name?.join(", ") || "Unknown Author",
                cover: book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : "https://via.placeholder.com/200x300?text=No+Cover",
                year: book.first_publish_year,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-400">
          No books found for "<span className="text-emerald-400">{query}</span>"
        </div>
      )}
    </div>
  );
};

export default Home;
