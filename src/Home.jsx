import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Premium Jewelery Shop</h1>
      <Link to={'shop'} className="shop-btn">Shop Now</Link>
    </div>
  )
}

export default Home