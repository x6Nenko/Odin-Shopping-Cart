import { useOutletContext } from "react-router-dom";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { cart } = useOutletContext();

  return (
    <section>
      {cart && cart.map(item => ( 
        <CartItem 
          item={item}
          key={item.itemId}
        />
      ))}
    </section>
  )
}

export default Cart