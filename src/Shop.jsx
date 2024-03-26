import ProductCard from "./components/ProductCard";
import { useOutletContext } from "react-router-dom";
import { matchingItem } from "./utils/utils";

const Shop = () => {
  const { jeweleryData, cart, setCart } = useOutletContext();

  function handleAddBtn(item) {
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

  function handleDecreaseBtn(item) {
    const newArr = cart.map(cartItem => {
      if (cartItem.itemId === item.id) {
        if (cartItem.amount === 1) {
          // delete item from cart part 1 (part 2 is filter below)
          return null;
        }
        // modify already existing item"
        return {...cartItem, amount: cartItem.amount - 1, allPrice: cartItem.allPrice - cartItem.singlePrice}
      } else {
        // keep the item with no changes
        return cartItem
      }
    }).filter(item => item !== null);

    setCart(newArr);
  }

  function handleRemoveBtn(item) {
    const newArr = cart.map(cartItem => {
      if (cartItem.itemId === item.id) {
        // delete item from cart part 1 (part 2 is filter below)
        return null;
      } else {
        // keep the item with no changes
        return cartItem
      }
    }).filter(item => item !== null);

    setCart(newArr);
  }

  return (
    <>
      <section className="cards-section">
        {jeweleryData && jeweleryData.map(item => (
          <ProductCard 
            itemData={item}
            key={item.id}
            addToCartBtn={handleAddBtn}
            removeFromCartBtn={handleRemoveBtn}
            isInCart={matchingItem(cart, item.id).length > 0}
            cartItemInfo={matchingItem(cart, item.id)}
            decreaseBtn={handleDecreaseBtn}
          />
        ))}
      </section>
    </>
  )
}

export default Shop