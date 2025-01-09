import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/products',
      element: <Products/>,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/categories',
      element: <Categories />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;