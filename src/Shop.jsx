import ProductCard from "./components/ProductCard";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { jeweleryData, cart, setCart } = useOutletContext();

  function btnHandler(item) {
    if (!cart.some(cartItem => cartItem.itemId === item.id)) {
      // there is no such item yet"
      return setCart([...cart, {itemId: item.id, title: item.title, image: item.image, singlePrice: item.price, allPrice: item.price, amount: 1}]);
    }

    const newArr = cart.map(cartItem => {
      if (cartItem.itemId === item.id) {
        // modify already existing item"
        return {...cartItem, amount: cartItem.amount + 1, allPrice: cartItem.allPrice + cartItem.singlePrice}
      } else {
        // keep the item with no changes
        return cartItem
      }
    })

    setCart(newArr)
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