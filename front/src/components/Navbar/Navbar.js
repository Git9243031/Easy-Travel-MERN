import React from "react";
import { NavbarContainer } from "./Navbar.styles";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <NavbarContainer>
      <nav class="navbar navbar-expand-lg">
        <Link class="navbar-brand" to="/">
          <div className="logo-symbol">E</div>
          <div className="logo-text">
            Easy <span>Travel</span>
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            {/* <li class="nav-item">
              <Link class="nav-link" to="/">
                About Me
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/">
                  Action
                </Link>
                <Link class="dropdown-item" to="/">
                  Another action
                </Link>
              </div>
            </li>
             */}
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
