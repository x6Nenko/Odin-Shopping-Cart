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

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Shop
        </NavLink>
      </nav>
    </header>
  )
}

export default Header