import homeLogo from "../../assets/marketPage/vsg_marketplace-mini-logo 1.png";
import defaultUserIcon from "../../assets/marketPage/Profile Img.png";
import { HeaderObj } from "../../types";
import { Link } from "react-router-dom";
import { AuthCtx } from "../../context/authCtx";
import { useContext, useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";

const headerObj: HeaderObj = {
  "/marketplace": "Marketplace",
  "/inventory": "Inventory",
  "/pending": "Pending Orders",
  "/myorders": "My Orders",
};

const Header = () => {
  const loc = location.pathname;
  const [username, setUsername] = useState("");
  const { name, logout } = useContext(AuthCtx);
  const { accounts } = useMsal();

  console.log(accounts);

  useEffect(() => {
    console.log(sessionStorage.getItem("msal.account.keys"));

    if (accounts.length > 0) {
      setUsername(accounts[0].username);
    }
  }, [accounts]);
  return (
    <header>
      <Link to="/" onClick={logout}>
        <img src={homeLogo} alt="VSG Logo" className="homeLogo" />
      </Link>
      <p className="marketplace-header">{headerObj[loc as keyof HeaderObj]}</p>
      <ul>
        <li>Hi, {accounts[0].username}</li>
        <li>
          <img src={defaultUserIcon} alt="User Logo" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
