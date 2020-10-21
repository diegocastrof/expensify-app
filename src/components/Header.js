import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header>
    <h1>ExpensifyApp</h1>
    <NavLink to="/dashboard" activeClassName="navlink-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="navlink-active">Add Expense</NavLink>
    <button onClick={ startLogout }>Logout</button>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => { 
    dispatch(startLogout())
  }
});

export default connect(undefined, mapDispatchToProps)(Header)