import {Link} from 'react-router-dom';

const Navbar = ()=>{

  // Navbar section

  return (
    <>
      <nav className="p-4 flex justify-between items-center bg-main text-white">

        {/* Links to Home, Browse Books & Add Book */}
        <Link to="/"><h1 className="font-bold text-2xl">E-Library</h1></Link>
        <ul className=" list-none flex gap-6 pr-4">
          <Link to="/"><li className='hover:text-gray-300'>Home</li></Link>
          <Link to="/browsebook"><li className='hover:text-gray-300'>Browse Books</li></Link>
          <Link to="/addbook"><li className='hover:text-gray-300'>Add Book</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;