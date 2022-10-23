import React from "react";
import { ReactComponent as LogoHeader } from "../assets/icons/ic_logo_header.svg";
import { ReactComponent as Person } from "../assets/icons/ic_person.svg";
import "bootstrap";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top">
      <nav
        className="container-xxl bd-gutter flex-wrap flex-lg-nowrap"
        aria-label="Main navigation"
      >
        <div className="bd-navbar-toggle">
          <button className="btn btn-inline">
            <LogoHeader />
          </button>
        </div>
        <div className="bd-navbar-toggle">
          <div className="dropdown">
            <button
              role="button"
              className="btn btn-primary btn-primary-inline"
              data-toggle="dropdown"
            >
              <Person />
              <label className="px-2" id="userName">
                Hi, Romi Julianto
              </label>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
