import React from "react";
import { ReactComponent as LogoHeader } from "../assets/icons/ic_logo_header.svg";
import { ReactComponent as Person } from "../assets/icons/ic_person.svg";
import { ReactComponent as Profile } from "../assets/icons/ic_account_circle.svg";
import { ReactComponent as Exit } from "../assets/icons/ic_exit_to_app.svg";
import { ReactComponent as Patient } from "../assets/icons/ic_supervised_user_circle.svg";
import { ReactComponent as Security } from "../assets/icons/ic_help.svg";
import { ReactComponent as Help } from "../assets/icons/ic_verified_user.svg";
import "bootstrap";



function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top">
      <nav
        className="container bd-gutter flex-wrap flex-lg-nowrap"
        aria-label="Main navigation"
      >
        <div className="bd-navbar-toggle">
          <button className="btn btn-inline">
            <LogoHeader />
          </button>
        </div>
        <div className="bd-navbar-toggle">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle btn-primary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Person />
                <label className="px-2" id="userName">
                  Hi, Romi Julianto
                </label>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-start" href="#">
                    <Profile />&nbsp; &nbsp; Edit Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-start" href="#">
                    <Security />&nbsp; &nbsp; Privasi & Keamanan
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-start" href="#">
                    <Patient />&nbsp; &nbsp; Data Pasien
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-start" href="#">
                    <Help />&nbsp; &nbsp; Bantuan
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-start text-danger" href="#">
                    <Exit />&nbsp; &nbsp; Keluar
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
