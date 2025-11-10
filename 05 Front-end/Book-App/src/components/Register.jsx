import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
    </div>
  );
};

export default Register;
