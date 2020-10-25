import React from "react";

const Navbar = ({ color }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a
              className={`nav-link mr-5 ${
                color === "white" ? "text-muted" : "text-dark"
              }`}
              href="/"
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link mr-5 ${
                color === "white" ? "text-muted" : "text-dark"
              }`}
              href="/"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link mr-5 ${
                color === "white" ? "text-muted" : "text-dark"
              }`}
              href="/"
            >
              Dental Services
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link mr-5 ${
                color === "white" ? "text-white" : "text-dark"
              }`}
              href="/"
            >
              Reviews
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link mr-5 ${
                color === "white" ? "text-white" : "text-dark"
              }`}
              href="/"
            >
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link mr-5 ${
                color === "white" ? "text-white" : "text-dark"
              }`}
              href="/dashboard"
            >
              <button className="btn btn-info">Dashboard</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
