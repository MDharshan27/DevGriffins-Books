const BookCard = ({ book }) => {
  const { title, author, cover, year } = book;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition-all duration-300 flex flex-col">
      <img
        src={cover}
        alt={title}
        className="rounded-lg w-full h-[380px] object-cover bg-gray-50"
      />
      <h3 className="mt-3 text-lg font-semibold text-gray-800 truncate">
        {title}
      </h3>
      <p className="text-sm text-gray-500 truncate">
        {author}
      </p>
      {year && (
        <p className="text-xs text-gray-400 mt-1">
          Published: {year}
        </p>
      )}
    </div>
  );
};

export default BookCard;
