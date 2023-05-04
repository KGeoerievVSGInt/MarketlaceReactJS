import homeLogo from "../../assets/marketPage/vsg_marketplace-mini-logo 1.png";
import defaultUserIcon from "../../assets/marketPage/Profile Img.png";
import { HeaderObj } from "../../types";
import { Link } from "react-router-dom";

const headerObj: HeaderObj = {
  "/marketplace": "Marketplace",
  "/inventory": "Inventory",
  "/pending": "Pending Orders",
  "/myorders": "My Orders",
};

const Header = () => {
  const loc = location.pathname;
  return (
    <header>
      <Link to="/">
        <img src={homeLogo} alt="VSG Logo" className="homeLogo" />
      </Link>
      <p className="marketplace-header">{headerObj[loc as keyof HeaderObj]}</p>
      <ul>
        <li>Hi,User</li>
        <li>
          <img src={defaultUserIcon} alt="User Logo" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
