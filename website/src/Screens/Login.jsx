import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "../Context";

import "../Style/Login.css";
import Loader from "../Components/Loader";
import ShipImage from "../Assets/login_ship.png";

import getToken from "../Services/Login";
import { getUserByName } from "../Services/User";

import {storage} from "../Hooks";

function LoginPage() {
  const { setUser, setToken } = useContext(Global);
  const [loginInfo, setLoginInfo] = useState({username: "", password: ""});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getLocalToken = storage.get("token");

    if (!!getLocalToken) {
      setToken(getLocalToken);
      navigate("/home");
    }
  }, []);

  const handleClick = async () => {
    const {exists, ...userData} = await getToken(loginInfo);
    const {token, name} = userData;

    if (!exists) {
      setLoginInfo(p => ({...p, password: ""}))
      return;
    }

    setLoader(true);

    const getUserInfo = await getUserByName(name, token);

    if (getUserInfo.length === 0) {
      setLoginInfo(p => ({...p, password: ""}));
      setLoader(false);
      return;
    };

    setToken(token);
    storage.save("token", token);

    setUser(getUserInfo);

    navigate("/home");

    setLoader(false);
  }

  return (
    <div className="login-container">
      {
        !!loader ? (
          <Loader />
        ) : (
          <>
            <div className="login-content-container">
              <img className="ship-image" src={ShipImage} alt="Login Ship Image" />
              <div>
                <div className="login-input-container">
                  <label className="login-label" htmlFor="username-input">Username</label>
                  <input
                    className="login-input"
                    type="text"
                    id="username-input"
                    value={loginInfo.username}
                    onChange={({target: {value}}) => setLoginInfo(p => ({...p, username: value}))}
                  />
                </div>

                <div className="login-input-container">
                  <label className="login-label" htmlFor="password-input">Password</label>
                  <input
                    className="login-input"
                    type="password"
                    id="password-input"
                    value={loginInfo.password}
                    onChange={({target: {value}}) => setLoginInfo(p => ({...p, password: value}))}
                  />
                </div>
              </div>
            </div>
            {
              (loginInfo.username.length > 3 && loginInfo.password.length > 3) && (
                <button className="login-btn-submit" type="submit" onClick={handleClick}>
                  <p id="login-btn-text">Log in</p>
                </button>
              )
            }
          </>
        )
      }
    </div>
  )
}

export default LoginPage;