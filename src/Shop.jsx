import ProductCard from "./components/ProductCard";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { jeweleryData, cart, setCart } = useOutletContext();

  function btnHandler(item) {
    setCart([...cart, {itemId: item.id, amount: 1}])
  }

  return (
    <>
      <section className="cards-section">
        {jeweleryData && jeweleryData.map(item => (
          <ProductCard 
            itemData={item}
            key={item.id}
            addToCartBtn={btnHandler}
          />
        ))}
      </section>
    </>
  )
}

export default Shop