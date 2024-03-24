import useData from "./hooks/useData"
import { useState, useEffect } from 'react';

const Shop = () => {
  const data = useData('https://fakestoreapi.com/products/category/jewelery');
  const [jeweleryData, setJeweleryData] = useState();

  useEffect(() => {
    if (data) {
      setJeweleryData(data);
    }
  }, [data]);

  console.log(jeweleryData);

  return (
    <>
      Shop
    </>
  )
}

export default Shop