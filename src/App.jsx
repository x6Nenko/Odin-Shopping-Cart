import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import useData from "./hooks/useData"
import { useState, useEffect } from 'react';
import Home from "./Home";

function App() {
  let location = useLocation();

  const data = useData('https://fakestoreapi.com/products/category/jewelery');
  const [jeweleryData, setJeweleryData] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data) {
      setJeweleryData(data);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <Header amount={cart.length} />
      {location.pathname === "/" && <Home />}
      <Outlet context={{
        jeweleryData: jeweleryData,
        cart: cart,
        setCart: setCart,
      }}/>
    </div>
  )
}

export default App
