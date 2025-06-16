import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BrowseBook from './pages/BrowseBook.jsx'
import AddBook from './pages/AddBook.jsx'
import BookDetails from './pages/BookDetails.jsx'
import NotFound from './pages/NotFound.jsx'

const libRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
       path: '/',
        element: <Home/>
      },
      {
        path: '/browsebook',
        element: <BrowseBook/>
      },
      {
        path: '/browsebook/:category',
        element: <BrowseBook/>
      },
      {
        path: '/book/:id',
        element: <BookDetails/>
      },
      {
        path: '/addbook',
        element: <AddBook/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={libRouter} />
  </StrictMode>,
)
