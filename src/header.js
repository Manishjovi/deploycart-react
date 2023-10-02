import React from "react";
import { Link } from "react-router-dom";
const logout = () => {
  localStorage.clear(); // delete all data from local storage
  window.location.href = "http://localhost:3000/#/login"; // go to login page
  window.location.reload(); // reload the page after going to login page
};

const Header = () => {
  if (localStorage.getItem("vendorid") != null) {
    var mynav = (
      <>
        <li className="nav-item">
          <Link className="nav-link active" to="/dashboard">
            <i className="fa fa-cogs"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/myproduct">
            <i className="fa fa-suitcase"></i> Manage product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-danger" onClick={logout}>
            Welcome - {localStorage.getItem("fullname")} ,{" "}
            <i className="fa fa-power-off"></i> Logout
          </Link>
        </li>
      </>
    );
  } else {
    var mynav = (
      <>
        <li className="nav-item">
          <Link className="nav-link active" to="/register">
            {" "}
            <i className="fa fa-user-plus"></i> Register{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login">
            {" "}
            <i className="fa fa-lock"></i> Login{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/cart">
            {" "}
            <i className="fa fa-shopping-cart"></i> My Cart{" "}
          </Link>
        </li>
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React E-commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                {" "}
                <i className="fa fa-home"></i> Home{" "}
              </Link>
            </li>
            {/* <li className="nav-item">
                      <Link className="nav-link active" to="/dashboard"> <i className="fa fa-cogs"></i> Dashboard </Link>
                </li>
                <li className="nav-item">
                      <Link className="nav-link active" to="/myproduct"> <i className="fa fa-suitcase"></i> My Product </Link>
                </li> */}
            {mynav}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
