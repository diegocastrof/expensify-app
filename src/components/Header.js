import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>ExpensifyApp</h1>
    <NavLink to="/" activeClassName="navlink-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="navlink-active">Add Expense</NavLink>
    <NavLink to="/help" activeClassName="navlink-active">Help</NavLink>
  </header>
)

export default Header