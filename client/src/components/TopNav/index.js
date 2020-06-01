import React from "react";
import "./style.css";

function TopNav(){
    return(
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light bg-navBar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav" id="category-nav">
            <li className="nav-item">
              <a className="nav-link" href="/roles">Departments/Roles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clients">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">Login/Register</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default TopNav;