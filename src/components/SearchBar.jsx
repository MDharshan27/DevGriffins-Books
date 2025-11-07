
const SearchBar = ({ onSearch }) => {
  return (
    <div className='flex justify-center mt-10'>
        <input 
            type="text"
            placeholder='Serach for Books...'
            onChange={(e) => onSearch(e.target.value)}
            className='w-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
    </div>
  )
}

export default SearchBar