import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
  const handleLogout = (params) => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  let location = useLocation();
  let history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-notes-medical mx-2"></i>
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                <i className="fas fa-house-user mx-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                <i className="fas fa-address-card mx-1"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/contact"
              >
                <i class="fa fa-envelope mx-1"></i>
                ContactUs
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-outline-light mx-1"
                to="/login"
                role="button"
              >
                Login
                <i className="fas fa-user mx-1"></i>
              </Link>
              <Link
                className="btn btn-outline-light mx-1"
                to="/signup"
                role="button"
              >
                Signup
                <i className="fas fa-sign-in-alt mx-1"></i>
              </Link>
            </form>
          ) : (
            <button onClick={handleLogout} className="btn btn-outline-light">
              <i className="fas fa-sign-out-alt mx-1"></i>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
