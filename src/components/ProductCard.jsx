import PropTypes from 'prop-types';

const ProductCard = ({ itemData, addToCartBtn }) => {
  return (
    <article className="card-container">
      <div className='card-header'>
        <div className='image-container'>
          <img 
            src={itemData.image}
            alt=""
            className="card-img"
            width={200}
            height={200}
          />
        </div>

        <div className="card-info">
          <h2>{itemData.title}</h2>
          <p>{itemData.description}</p>
        </div>
      </div>

      <div className='cardFooter'>
        {itemData.price}$
        <button onClick={() => addToCartBtn(itemData)}>Add to cart</button>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  itemData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCartBtn: PropTypes.func.isRequired,
};

export default ProductCard