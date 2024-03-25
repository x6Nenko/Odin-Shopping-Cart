import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';

const Header = ({ amount }) => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          LOGO
        </NavLink>
        
        <div className="right-links">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Cart ({amount})
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Header