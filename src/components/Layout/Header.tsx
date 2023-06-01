import homeLogo from "../../assets/marketPage/vsg_marketplace-mini-logo 1.png";
import defaultUserIcon from "../../assets/marketPage/Profile Img.png";
import { HeaderObj } from "../../types";
import { Link } from "react-router-dom";
import { AuthCtx } from "../../context/authCtx";
import { HamburgerCtx } from "../../context/hamburgerCtx";
import { useContext } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const headerObj: HeaderObj = {
  "/marketplace": "Marketplace",
  "/inventory": "Inventory",
  "/pending": "Pending Orders",
  "/myorders": "My Orders",
};

const Header = () => {
  const loc = location.pathname;
  const { user, logout } = useContext(AuthCtx);
  const { menuToggle } = useContext(HamburgerCtx);
  const username = user ? JSON.parse(user).username : null;

  return (
    <header>
      <Link to="/" onClick={logout}>
        <img src={homeLogo} alt="VSG Logo" className="homeLogo" />
      </Link>
      <p className="marketplace-header">{headerObj[loc as keyof HeaderObj]}</p>
      <ul>
        <li>Hi, {username}</li>
        <li>
          <img src={defaultUserIcon} alt="User Logo" />
        </li>
      </ul>
      <IconButton
        className="hamburger-lines"
        onClick={menuToggle}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <MenuIcon sx={{ color: "#ed1c25" }} fontSize={"large"} />
      </IconButton>
    </header>
  );
};

export default Header;
