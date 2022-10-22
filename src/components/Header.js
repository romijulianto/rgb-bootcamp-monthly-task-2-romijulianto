import React from "react";
import { ReactComponent as LogoHeader } from "../assets/icons/ic_logo_header.svg";
import { ReactComponent as Person } from "../assets/icons/ic_person.svg";

function Header() {
  return (
    <header class="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top">
      <nav
        class="container-xxl bd-gutter flex-wrap flex-lg-nowrap"
        aria-label="Main navigation"
      >
        <div class="bd-navbar-toggle">
          <button className="btn btn-inline">
            <LogoHeader />
          </button>
        </div>
        <div class="bd-navbar-toggle">
          <button className="btn btn-primary btn-primary-inline">
            <Person />
            <label className="px-2" id="userName">
              Hi, Romi Julianto{" "}
            </label>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
