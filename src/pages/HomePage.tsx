import image from "../assets/main/vsg_marketplace_logo 2.png";
import { Link, useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const HomePage = () => {
  const { instance } = useMsal();
  const nav = useNavigate();
  const handleLogin = () => {
    instance
      .loginRedirect({
        scopes: ["user.read"],
      })
      .then(() => {
        console.log("nav");
        nav("/marketplace");
      });
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img id="logo-image" src={image} alt="VSG Marketplace Logo" />
        <Link to="/marketplace" onClick={handleLogin}>
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
