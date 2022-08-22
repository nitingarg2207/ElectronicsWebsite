import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png"

const Navbar = () => {
  return (
    <div>
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#FFF5EB" }}
    >
      <div className="container-fluid">
        <div className="logo">
          <img src={Logo} alt="..." />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              <button type="button" className="btn btn-outline-primary">
                <i className="fas fa-home"></i> Home
              </button>
            </Link>

            <Link to="/products" className="nav-link">
              <button type="button" className="btn btn-outline-success">
                <i className="fa fa-shopping-bag"></i> Products
              </button>
            </Link>

            <Link to="/about" className="nav-link">
              <button type="button" className="btn btn-outline-secondary">
                <i className="fas fa-address-card"></i> About Us
              </button>
            </Link>

            <Link to="/contact" className="nav-link">
              <button type="button" className="btn btn-outline-warning">
              <i className="fa fa-phone" aria-hidden="true"></i> Contact Us
              </button>
            </Link>

            <Link to="/qna" className="nav-link">
              <button type="button" className="btn btn-outline-dark">
              <i className="fa fa-question" aria-hidden="true"></i> F&Q
              </button>
            </Link>

              <Link to="/register" className="nav-link">
                <button type="button" className="btn btn-outline-info" id="rl">
                  <i className="fas fa-user"></i> Register
                </button>
              </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar