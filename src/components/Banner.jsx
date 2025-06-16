
const Banner = ()=>{

// Banner for Home Page

  return (
    <>
     <div className="relative text-center w-9xl flex justify-center bg-[url('./assets/banner3.jpg')] bg-cover bg-center h-[500px]">
      <div className="max-w-3xl mx-auto m-3">
        <h1 className="text-5xl">
          Welcome to Online Library System
        </h1>
        <p className="text-lg mb-6">
          Explore thousands of books, anytime, anywhere. Read, learn, and grow with our digital collection.
        </p>
      </div>
    </div>
    </>
  )
}

export default Banner;