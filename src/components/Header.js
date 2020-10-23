import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header className="header">
    <div className="header-content">
      <div className="header__brand">
        <NavLink
          className="header__brand--link" 
          to="/dashboard" 
          activeClassName="navlink-active" 
          exact={true}
        >
          Expensify
        </NavLink>
      </div>
      <div className="header__links">
        <button 
          className="header__links--logout"
          onClick={ startLogout }
        >
          Logout
        </button>
      </div>
    </div>    
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => { 
    dispatch(startLogout())
  }
});

export default connect(undefined, mapDispatchToProps)(Header)