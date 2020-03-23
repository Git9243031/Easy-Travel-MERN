import React, { useState } from "react";
import { NavbarContainer } from "./Navbar.styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { SwitchStyled } from "../Switch/Switch.styles";
import { setTheme } from "../../redux/theme/theme";
import Languages from "../Languages/Languages";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const [disabled, setDisabled] = useState(theme === "light" ? true : false);

  const handleDisabledChange = () => {
    setDisabled(!disabled);
    dispatch(setTheme());
  };
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <div className="logo-symbol">E</div>
          <div className="logo-text">
            Easy <span>Travel</span>
          </div>
        </Link>
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
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                About Me
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">
                  Action
                </Link>
                <Link className="dropdown-item" to="/">
                  Another action
                </Link>
              </div>
            </li>
             */}
          </ul>
          <div className="d-flex align-items-center">
            <Languages />
            <SwitchStyled
              size="small"
              checked={disabled}
              onChange={handleDisabledChange}
            />
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
