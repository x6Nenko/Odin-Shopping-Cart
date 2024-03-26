import { useOutletContext } from "react-router-dom";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  
  function handleAddBtn(item) {
    const newArr = cart.map(cartItem => {
      if (cartItem.itemId === item.itemId) {
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
      if (cartItem.itemId === item.itemId) {
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
      if (cartItem.itemId === item.itemId) {
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
    <section>
      {cart && cart.map(item => ( 
        <CartItem 
          item={item}
          key={item.itemId}
          increaseBtn={handleAddBtn}
          removeFromCartBtn={handleRemoveBtn}
          decreaseBtn={handleDecreaseBtn}
        />
      ))}
    </section>
  )
}

export default Cart