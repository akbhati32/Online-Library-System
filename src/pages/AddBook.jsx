import { addBook } from "../redux/bookSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = ()=>{

  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    category: '',
    rating: '',
    price: '',
    coverImage: null,
  });
  const [errors, setErrors] = useState({})

  // Add book details
  function handleChange(e){
    setBook({...book, [e.target.name]: e.target.value})
    setErrors({...errors, [e.target.name]: ""})
  }

  // Add book cover image
  function handlImageCover(e){
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setBook({ ...book, coverImage: imgUrl });
      setErrors({ ...errors, coverImage: "" });
    }
  }

  // Form validation before submission
  function handleValidate(){
    let newErrors = {};

    if(!book.title.trim()) newErrors.title = 'book title is required..';
    if(!book.author.trim()) newErrors.author = 'book author name is required..';
    if(!book.category) newErrors.category = 'book category is required..';
    if(!book.rating || book.rating < 1 || book.rating > 5) newErrors.rating = 'please rate between 1 to 5..';
    if(!book.price) newErrors.price = 'book price is required..';
    if(!book.coverImage) newErrors.coverImage = 'book cover is required..';
    if(!book.description.trim()) newErrors.description = 'book description is required..';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Redirects to browse book after added a book
  function handleSubmit(e){
    e.preventDefault();
    if(!handleValidate()) return

    // Uses redux to manage the state
    dispatch(addBook({...book, id: Date.now()}))
    nevigate("/browsebook/" + book.category.toLowerCase())
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center m-10">

      <form onSubmit={handleSubmit}>

        {/* Book title */}
        <input type="text" onChange={handleChange} 
        name="title" value={book.title} 
        placeholder="Book Title" 
        className="py-2 px-6 w-xl border rounded focus:outline-none focus:ring-2 block"/>
          <p className="text-red-500 text-sm">{errors.title}</p>

        {/* Book author */}
        <input type="text" onChange={handleChange} 
        placeholder="Book Author" 
        name="author" value={book.author} 
        className="py-2 px-6 w-xl border rounded focus:outline-none focus:ring-2 mt-4 block"/>
          <p className="text-red-500 text-sm">{errors.author}</p>

        {/* Book category */}
        <select onChange={handleChange} 
        className="w-xl py-2 px-6 rounded border text-gray-600 mt-4 " 
        name="category" value={book.category}>
          <option>Choose Category</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Sci-Fi</option>
          <option>Classic</option>
          <option>Adventure</option>
          <option>Literature</option>
          <option>Fantasy</option>
          <option>Biography</option>
        </select>
          <p className="text-red-500 text-sm">{errors.category}</p>

        {/* Book rating */}
        <input type="number" onChange={handleChange} 
        placeholder="Book Rating (1-5)" 
        name="rating" value={book.rating} 
        className="py-2 px-6 w-xl border rounded focus:outline-none focus:ring-2 mt-4 block"/>
          <p className="text-red-500 text-sm">{errors.rating}</p>

        {/* Book price */}
        <input type="number" onChange={handleChange} 
        placeholder="Book Price" 
        name="price" value={book.price} 
        className="py-2 px-6 w-xl border rounded focus:outline-none focus:ring-2 mt-4 block"/>
          <p className="text-red-500 text-sm">{errors.price}</p>

        {/* Book cover image */}
        <input type="file" onChange={handlImageCover} 
        accept="image/*" 
        className="py-2 px-6 w-xl border rounded focus:ring-2 mt-4 block text-gray-600"/>
          {errors.coverImage && <p className="text-red-500 text-sm">{errors.coverImage}</p>}

        {/* Book description */}
        <textarea rows="4" onChange={handleChange} 
        placeholder="Book Description.." 
        name="description" value={book.description} className="py-2 px-6 w-xl border rounded focus:outline-none focus:ring-2 mt-4 block text-gray-600"/>
          <p className="text-red-500 text-sm">{errors.description}</p>

        <div className="flex justify-center my-4">
        <button type="submit" className="p-1 border w-40 rounded hover:border-0 hover:text-white hover:bg-hover cursor-pointer">Add Book</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default AddBook;