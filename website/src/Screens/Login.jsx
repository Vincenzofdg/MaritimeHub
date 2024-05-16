import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "../Context";

import "../Style/Login.css";
import ShipImage from "../Assets/login_ship.png";

function LoginPage() {
  const { user } = useContext(Global);
  const [loginInfo, setLoginInfo] = useState({username: "", password: ""})
  const navigate = useNavigate();

  const handleClick = async () => navigate("/home");


  return (
    <div className="login-container">
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
    </div>
  )
}

export default LoginPage;