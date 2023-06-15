import homeLogo from "../../assets/marketPage/vsg_marketplace-mini-logo 1.png";
import defaultUserIcon from "../../assets/marketPage/Profile Img.png";
import { HeaderObj } from "../../types";
import { Link, useLocation } from "react-router-dom";
import { HamburgerCtx } from "../../context/hamburgerCtx";
import { useContext, useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMsal } from "@azure/msal-react";
const headerObj: HeaderObj = {
  "/marketplace": "Marketplace",
  "/inventory": "Inventory",
  "/pending": "Pending Orders",
  "/myorders": "My Orders",
  "/borrowed": "My Borrowed Items",
  "/lent": "Lent Items",
};

const Header = () => {
  const [headerText, setHeadetText] = useState("Marketplace");
  const loc = useLocation();
  const { menuToggle } = useContext(HamburgerCtx);
  const { instance } = useMsal();
  const username = instance.getActiveAccount()?.username;
  const handleLogout = () => {
    instance.logoutRedirect();
    sessionStorage.removeItem("token");
  };

  useEffect(() => {
    setHeadetText(headerObj[loc.pathname as keyof HeaderObj]);
  }, [loc]);
  return (
    <header>
      <Link to="/" onClick={handleLogout}>
        <img src={homeLogo} alt="VSG Logo" className="homeLogo" />
      </Link>
      <p className="marketplace-header">{headerText}</p>
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
