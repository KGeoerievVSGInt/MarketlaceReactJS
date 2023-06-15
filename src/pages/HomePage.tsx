import image from "../assets/main/vsg_marketplace_logo 2.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useMsal,
  useMsalAuthentication,
  useIsAuthenticated,
} from "@azure/msal-react";
import { useEffect } from "react";
import { InteractionType } from "@azure/msal-browser";

const HomePage = () => {
  const { instance } = useMsal();
  const nav = useNavigate();
  const { result, error } = useMsalAuthentication(InteractionType.Silent, {
    scopes: ["user.read"],
  });
  const isAuthenticated = useIsAuthenticated();
  const handleLogin = async () => {
    try {
      const res = await instance.loginPopup({
        scopes: ["user.read"],
      });
      instance.setActiveAccount(res.account);
    } catch (e) {
      console.log(e);
    }
  };
  //redirect on successful authentication
  useEffect(() => {
    if (isAuthenticated) {
      if (!!error) {
        console.log(error);
        return;
      }
      if (result) {
        const { idToken } = result;
        sessionStorage.setItem("token", idToken);
        nav("/marketplace");
      }
    }
  }, [isAuthenticated]);

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
