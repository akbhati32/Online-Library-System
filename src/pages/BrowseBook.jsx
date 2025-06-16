import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'
import { categories } from "../utils/bookLib";

const BrowseBook = ()=>{

  // Fetches book from redux store
  const books = useSelector((store) => store.book.books);
  const { category: initialCategory } = useParams();

  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [isValidSearch, setIsValidSearch] = useState(true);
  
  // Category filter & search functionality
  useEffect(()=>{
    const filtered = books.filter(book =>
      (book.category.toLowerCase() === selectedCategory.toLowerCase() ||
      selectedCategory === 'All') &&
      (book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()))
    );
    setFilteredBooks(filtered)
  },[books, searchText, selectedCategory]);
  
  // Search through inputs
  function handleSearch(e){
    let searchVal = e.target.value;
    setSearchText(searchVal);

    if(searchVal.trim() === ''){
      setIsValidSearch(true)
    } else {
      let isValid = books.some(book => (
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
      ))
      setIsValidSearch(isValid)
    }
  }

  return (
    <>
    <div className="p-6 min-h-screen bg-body">

      {/* Search */}
      <div className="flex items-center justify-center mb-4">
        <div className="m-10 w-full max-w-xl">
          <input type="text" 
            placeholder="search by title or author.." 
            value={searchText}
            onChange={handleSearch} 
            onKeyDown={(e)=> {
              if(e.key === 'Enter') handleSearch(e)
            }}
            className="py-2 px-10 w-full border rounded focus:outline-none focus:ring-2" />
        </div>
      </div>

      {/* category */}
      <div className="flex justify-center items-center mb-10">
        <div className="flex gap-5 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={()=> setSelectedCategory(category)}
              className="p-1 border w-24 rounded hover:border-0 hover:text-white hover:bg-hover cursor-pointer"
            >{category}</button>
          ))}
        </div>
      </div>

      {/* Browse book list */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10">
          {filteredBooks.map(book => (
            <div key={book.id} className="p-3 flex flex-col border-2 rounded-lg">
              <img src={book.coverImage} className="w-full h-96 object-fill mb-2 rounded"/>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-md text-gray-600">by {book.author}</p>
              <div className="flex justify-between mt-1">
                <p className="text-md text-[#cc0c39] inline">
                  <span className="text-sm align-baseline">$</span> {book.price}
                </p>
                <Link to={`/book/${book.id}`}>
                  <button 
                  className="p-1 border w-30 rounded hover:border-0 hover:text-white hover:bg-hover cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Incorrect search */}
      {!isValidSearch && 
      <p className=" text-center mt-20 text-red-500 text-lg">
        Please enter a valid book or author name...
      </p>}

    </div>
    </>
  )
}

export default BrowseBook;