import { useOutletContext } from "react-router-dom";
import { countTotalPrice } from "./utils/utils";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  console.log(cart);
  
  function handleAddBtn(item) {
    const newArr = cart.map(cartItem => {
      if (cartItem.itemId === item.itemId) {
        // modify already existing item"
        return {...cartItem, amount: cartItem.amount + 1, allPrice: Math.round((cartItem.allPrice + cartItem.singlePrice) * 100) / 100}
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
        return {...cartItem, amount: cartItem.amount - 1, allPrice: Math.round((cartItem.allPrice - cartItem.singlePrice) * 100) / 100}
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
    <section className="cart-item-section">
      {cart && cart.map(item => ( 
        <CartItem 
          item={item}
          key={item.itemId}
          increaseBtn={handleAddBtn}
          removeFromCartBtn={handleRemoveBtn}
          decreaseBtn={handleDecreaseBtn}
        />
      ))}
      <article className="summary">
        <p className="total-price">Total price: {countTotalPrice(cart)}$</p>
        <button className="checkout-btn">Checkout</button>
      </article>
    </section>
  )
}

export default Cart