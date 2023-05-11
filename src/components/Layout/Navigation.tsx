import { Link } from "react-router-dom";
import { AuthCtx } from "../../context/authCtx";
import { useContext } from "react";
const Navigation = () => {
  const { type, logout } = useContext(AuthCtx);
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/marketplace">
              <i className="fa-solid fa-store"></i> Marketplace
            </Link>
          </li>
          {type === "1" && (
            <li>
              <Link to="/inventory">
                <i className="fa-regular fa-clipboard"></i> Inventory
              </Link>
            </li>
          )}
          {type === "1" && (
            <li>
              <Link to="/pending">
                <i className="fa-regular fa-clock"></i> Pending Orders
              </Link>
            </li>
          )}
          <li>
            <Link to="/myorders">
              <i className="fa-solid fa-bag-shopping"></i> My Orders
            </Link>
          </li>
          <li id="logout">
            <Link to="/" onClick={logout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
