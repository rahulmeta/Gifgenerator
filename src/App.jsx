import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Search from './Pages/Search'
import SingleGif from './Pages/SingleGif'
import Favourites from './Pages/Favourites'
import GifProvider from './Context/Context'


// home
// Category
// Search
// Single GIf
// Favourites

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:category",
        element: <Category />
      },
      {
        path: "/search/:query",
        element: <Search />
      },
      {
        path: "/:type/:slug",
        element: <SingleGif />
      },
      {
        path: "/favourites",
        element: <Favourites />
      },
    ]
  }
])

const App = () => {
  return (
    <GifProvider>
     <RouterProvider router={router}/>
   </GifProvider>
  )
}

export default App

