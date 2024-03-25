import ProductCard from "./components/ProductCard";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const jeweleryData = useOutletContext();
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