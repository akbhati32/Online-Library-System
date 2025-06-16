import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import bookStore from './redux/bookStore'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='bg-body'>
    <Provider store={bookStore}>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Provider>
    </div>
    </>
  )
}

export default App
