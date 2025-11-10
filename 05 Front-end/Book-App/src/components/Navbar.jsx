import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="nav-logo">🎓 ABES BookStore</h2>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Register</Link>
        <span className="cart-badge">🛒 {cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
