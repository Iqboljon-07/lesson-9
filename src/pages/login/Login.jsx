import React, { memo } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate(); //bu funksiya
  console.log(navigate);

  return (
    <div className="login">
      <div className="back">
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>

      <div className="login_item">
        <h1>Login</h1>
        <input className="inputlogin" type="text" placeholder="Email" />

        <div className="login_item2">
          <input className="inputlogin" type="text" placeholder="Password" />
          <label>
            <input type="checkbox" />
            Show Passpord
          </label>
        </div>
        <button>SIGN IN</button>
      </div>
    </div>
  );
}

export default memo(Login);
