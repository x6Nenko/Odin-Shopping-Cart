import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Shop from './Shop.jsx'
import Header from './components/Header.jsx';
import Cart from './Cart.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <div className='wrapper'>
        <Header />
        <App />
      </div>
    </>,
  },
  {
    path: "shop",
    element: 
    <>
      <div className='wrapper'>
        <Header />
        <Shop />
      </div>
    </>,
  },
  {
    path: "cart",
    element: 
    <>
      <div className='wrapper'>
        <Header />
        <Cart />
      </div>
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
