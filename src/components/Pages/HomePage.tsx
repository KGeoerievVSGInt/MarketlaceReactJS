import image from "../../assets/main/vsg_marketplace_logo 2.png";
import { Link } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/authConfig";
import { useState, useContext } from "react";
import { AuthCtx } from "../../context/authCtx";

const HomePage = () => {
  const [token, setToken] = useState<string | null>(null);
  const { typeSetter } = useContext(AuthCtx);
  const { accounts, instance } = useMsal();
  function RequestProfileData() {
    const accessTokenRequest = {
      scopes: ["user.read"],
      account: accounts[0],
    };
    instance.loginRedirect(loginRequest);
    instance.acquireTokenSilent(accessTokenRequest).then((tokenData) => {
      localStorage.setItem("token", tokenData.accessToken);
    });
  }

  return (
    <div className="container">
      <div className="logo-container">
        <img id="logo-image" src={image} alt="VSG Marketplace Logo" />
        <Link to="/marketplace" onClick={RequestProfileData}>
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
