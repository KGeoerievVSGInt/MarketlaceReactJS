import { NavLink } from "react-router-dom";
import { HamburgerCtx } from "../../context/hamburgerCtx";
import { useContext } from "react";
import { useMsal } from "@azure/msal-react";
import {
  StorefrontOutlined,
  ContentPaste,
  AccessTime,
  Archive,
  Inventory,
  Payment,
  Logout,
} from "@mui/icons-material/";
const Navigation = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { isMenuShown, menuToggle } = useContext(HamburgerCtx);
  const typeArr = activeAccount?.idTokenClaims
    ? (activeAccount.idTokenClaims.groups as string[])
    : [];
  const handleLogout = () => {
    instance.logoutRedirect();
    sessionStorage.removeItem("token");
  };
  //toggle for mobile view
  const toggleMenu = () => {
    if (window.innerWidth < 600) menuToggle();
  };
  return (
    <aside className={isMenuShown ? "aside-show" : ""}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/marketplace"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleMenu}
            >
              <StorefrontOutlined className="icon" /> Marketplace
            </NavLink>
          </li>
          {typeArr.includes("f2123818-3d51-4fe4-990b-b072a80da143") && (
            <>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/inventory"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <Inventory className="icon" /> Inventory
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/pending"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <AccessTime className="icon" /> Pending Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/lent"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <ContentPaste className="icon" /> Lent Items
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              onClick={toggleMenu}
              to="/myorders"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <Archive className="icon" /> My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to="/borrowed"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <Payment className="icon" /> My Borrowed Items
            </NavLink>
          </li>
          <li id="logout">
            <NavLink to="/" onClick={handleLogout}>
              <Logout className="icon" /> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
