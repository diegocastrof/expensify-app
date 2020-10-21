import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <h1>This is the Login Page</h1>
      <button onClick={ startLogin }>Login</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => { 
    dispatch(startLogin())
  }
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
