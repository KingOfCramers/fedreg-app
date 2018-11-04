import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth"; // A function...

export const Header = ({ startLogout }) => ( // Props need to be imported in a stateless functional here!
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__title">
          <h1>Fedtracker</h1>
        </div>
        <Link to="/about">
          <button className="button--link" >About</button>
        </Link>
        <a href="https://twitter.com/HarrisonCramer" target="blank">
          <button className="button--link" onClick={() => {}}>Contact</button>
        </a>
        <button className="button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);