import { NavLink } from "react-router-dom"

const Header = () => {
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
            Cart
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header