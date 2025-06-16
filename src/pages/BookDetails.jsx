import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookDetails = ()=>{

  const books = useSelector((store) => store.book.books);
  const { id } = useParams();   // Dynamic route through ID

  const filtered = books.filter(book => book.id == id)

  return (
    <>
    <div className="p-4 max-w-6xl mx-auto min-h-screen">
      {filtered.map(book => (
        <div key={book.id} className="grid grid-cols-3 gap-6">
        
          {/* Display book details */}
          <img src={book.coverImage} className="relative m-2 rounded-2xl"/> 
          <div className="col-span-2 p-4 flex flex-col gap-4 justify-center">
            <h2 className="text-3xl font-bold">{book.title}</h2>
            <p className="text-xl text-gray-600">by {book.author}</p>
            <p className="text-amber-300 text-md font-semibold">&#9733; {book.rating}</p>
            <p className="text-md text-[#cc0c39] inline">
              <span className="text-sm align-baseline">$</span> {book.price}
            </p>
            <p className="text-md text-gray-600">{book.description}</p>
            
            <Link to="/browsebook">   {/* Back button */}
              <button className="p-1 border w-30 rounded hover:border-0 hover:text-white hover:bg-hover cursor-pointer">Back to Browse</button>
            </Link>
          </div>

        </div>
      ))}
    </div>
    </>
  )
}

export default BookDetails;