import React from "react";
// import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
