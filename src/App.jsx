import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import useData from "./hooks/useData"
import { useState, useEffect } from 'react';
import Home from "./Home";

function App() {
  let location = useLocation();

  const data = useData('https://fakestoreapi.com/products/category/jewelery');
  const [jeweleryData, setJeweleryData] = useState();

  useEffect(() => {
    if (data) {
      setJeweleryData(data);
    }
  }, [data]);

  console.log(jeweleryData);
  return (
    <div className="wrapper">
      <Header />
      {location.pathname === "/" && <Home />}
      <Outlet context={jeweleryData}/>
    </div>
  )
}

export default App
