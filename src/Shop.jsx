import useData from "./hooks/useData"
import { useState, useEffect } from 'react';

import ProductCard from "./components/ProductCard";

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
      <section className="cards-section">
        {jeweleryData && jeweleryData.map(item => (
          <ProductCard 
            itemData={item}
            key={item.title}
          />
        ))}
      </section>
    </>
  )
}

export default Shop