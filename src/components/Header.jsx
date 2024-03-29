import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';

const Header = ({ amount }) => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          LOGO
        </NavLink>
        
        <div className="right-links">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
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