import { NavLink } from "react-router-dom";
import { AuthCtx } from "../../context/authCtx";
import { useContext } from "react";
const Navigation = () => {
  const { user, logout } = useContext(AuthCtx);
  const typeArr = user ? JSON.parse(user).idTokenClaims.groups : [];
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/marketplace"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="fa-solid fa-store"></i> Marketplace
            </NavLink>
          </li>
          {typeArr.includes("f2123818-3d51-4fe4-990b-b072a80da143") && (
            <>
              <li>
                <NavLink
                  to="/inventory"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <i className="fa-regular fa-clipboard"></i> Inventory
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pending"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <i className="fa-regular fa-clock"></i> Pending Orders
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/myorders"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="fa-solid fa-bag-shopping"></i> My Orders
            </NavLink>
          </li>
          <li id="logout">
            <NavLink to="/" onClick={logout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
