import image from "../../assets/main/vsg_marketplace_logo 2.png";
import { Link } from "react-router-dom";
import { AuthCtx } from "../../context/authCtx";
import { useContext } from "react";

const HomePage = () => {
  const { nameSetter, typeSetter } = useContext(AuthCtx);

  return (
    <div className="container">
      <div className="logo-container">
        <img id="logo-image" src={image} alt="VSG Marketplace Logo" />
        <Link
          to="/marketplace"
          onClick={() => {
            typeSetter("2");
            nameSetter("George");
          }}
        >
          LOGIN
        </Link>
        <Link
          to="/marketplace"
          onClick={() => {
            typeSetter("1");
            nameSetter("Mike");
          }}
        >
          LOGIN ADMIN
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
