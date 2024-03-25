import useData from "./hooks/useData"
import { useState, useEffect } from 'react';

import ProductCard from "./components/ProductCard";

const Shop = () => {
  const data = useData('https://fakestoreapi.com/products/category/jewelery');
  const [jeweleryData, setJeweleryData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setJeweleryData(data);
      setIsLoading(false)
    }
  }, [data]);

  console.log(jeweleryData);

  if (isLoading) {
    return <div>Loading...</div>
  }

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