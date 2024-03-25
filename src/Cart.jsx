import { useOutletContext } from "react-router-dom";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { jeweleryData, cart, setCart } = useOutletContext();
  console.log(cart);

  return (
    <section>
      {cart && cart.map(item => ( 
        <CartItem 

        />
      ))}
    </section>
  )
}

export default Cart