import { useState } from "react";
import { categories } from "../utils/bookLib";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookCategories = ()=>{
  
  // Uses Redux to fetch book data
  const books = useSelector((store) => store.book.books);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filters book based on category
  const filteredBooks = books.filter(book => (
    selectedCategory === 'All' || book.category === selectedCategory
  ));

  return (
    <>
    <div className="p-6 min-h-screen bg-body mt-2">

      {/* Category buttons */}
      <div className="flex justify-center items-center mb-4">
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
      
      <h2 className="text-3xl font-semibold text-center mb-6">Popular Books</h2>
      
      {/* Popular book grid */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10">
          {filteredBooks.map(book => book.popular ? (
            <div key={book.id} className="p-3 flex flex-col border-2 rounded-lg">
              <img src={book.coverImage} className="w-full h-96 object-fill mb-2 rounded"/>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-md text-gray-600">by {book.author}</p>
              <div className="flex justify-between mt-1">
                <p className="text-md text-[#cc0c39] inline"><span className="text-sm align-baseline">$</span> {book.price}</p>
                <Link to={`/book/${book.id}`}>
                  <button className="p-1 border w-30 rounded hover:border-0 hover:text-white hover:bg-hover cursor-pointer">View Details</button>
                </Link>
              </div>
            </div>
          ) : null)}
        </div>
      </div>

    </div>
    </>
  )
}

export default BookCategories;