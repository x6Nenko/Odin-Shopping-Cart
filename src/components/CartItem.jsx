import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
  console.log(item);
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
      <p>Amount: {item.amount}, Price: {item.allPrice}$</p>
      <p>One item price: {item.singlePrice}$</p>
    </article>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem