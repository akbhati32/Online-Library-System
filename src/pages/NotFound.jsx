import { Link, useRouteError } from "react-router-dom";

const NotFound = ()=>{

  // Page for undefined routes

  const error = useRouteError();
  
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 bg-body">
      <h1 className="text-7xl font-bold">OOPS!</h1>
      <p className="text-3xl text-gray-600 font-semibold">
        {error.status} : Page {error.statusText}
      </p>
      <p className="text-xl text-gray-600">
        {error.data}
      </p>
      <Link to="/">   {/* Link to back */}
        <button className="p-1 border w-30 rounded hover:border-0 hover:text-white hover:bg-hover cursor-pointer">
          Back to Home
        </button>
      </Link>
    </div>
    </>
  )
}

export default NotFound;