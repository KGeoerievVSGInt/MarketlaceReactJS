import image from "../../assets/main/vsg_marketplace_logo 2.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img id="logo-image" src={image} alt="VSG Marketplace Logo" />
        <Link to="/marketplace">LOGIN </Link>
      </div>
    </div>
  );
};

export default HomePage;
