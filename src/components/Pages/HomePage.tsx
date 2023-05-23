import image from "../../assets/main/vsg_marketplace_logo 2.png";
import { Link } from "react-router-dom";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../../auth/authConfig";
import { AuthCtx } from "../../context/authCtx";
import { useContext } from "react";

const HomePage = () => {
  const { accounts, instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const { userSetter } = useContext(AuthCtx);
  const accessTokenRequest = {
    scopes: ["api://86ceffd4-8632-4677-bbb6-e7badafa26ec/Files.Read"],
    account: accounts[0],
  };
  function RequestProfileData() {
    instance.loginRedirect(loginRequest);
    console.log("working2");
  }
  if (isAuthenticated) {
    instance.acquireTokenSilent(accessTokenRequest).then((tokenData) => {
      localStorage.setItem("token", tokenData.accessToken);
      console.log("working");
      console.log("auth");
      userSetter(JSON.stringify(accounts[0]));

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
