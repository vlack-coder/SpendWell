import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>SpendWell</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

export default connect(undefined, { startLogout })(Header);
