import { Link } from "react-router-dom";
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
            <Link to="/marketplace">
              <i className="fa-solid fa-store"></i> Marketplace
            </Link>
          </li>
          {typeArr.includes("f2123818-3d51-4fe4-990b-b072a80da143") && (
            <>
              <li>
                <Link to="/inventory">
                  <i className="fa-regular fa-clipboard"></i> Inventory
                </Link>
              </li>
              <li>
                <Link to="/pending">
                  <i className="fa-regular fa-clock"></i> Pending Orders
                </Link>
              </li>
            </>
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
