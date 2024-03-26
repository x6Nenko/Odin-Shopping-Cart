import PropTypes from 'prop-types';

const CartItem = ({ item, increaseBtn, removeFromCartBtn, decreaseBtn }) => {
  return (
    <article>
      <div className='cart-image-container'>
        <img 
          src={item.image}
          alt=''
          width={64}
          height={64}
        />
      </div>
      <h3>{item.title}</h3>
      <p>One item price: {item.singlePrice}$</p>
      <p>Full price: {item.allPrice}$</p>
      <div className='amount-control-container'>
        <button onClick={() => decreaseBtn(item)}>-</button>
        <p>{item.amount}</p>
        <button onClick={() => increaseBtn(item)}>+</button>
      </div>
      <button onClick={() => removeFromCartBtn(item)}>Remove from the cart</button>
    </article>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  increaseBtn: PropTypes.func.isRequired,
  removeFromCartBtn: PropTypes.func.isRequired,
  decreaseBtn: PropTypes.func.isRequired,
};

export default CartItem