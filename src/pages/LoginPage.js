import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => {
  return (
    <div className="login">
      <div className="login-bg">
        <img className="login-bg__img" src="./imgs/bg.jpg" alt="Login Page Background Image"/>
      </div>
      <div className="text-container">
        <h1 className="text-container__title">Expensify</h1>
        <p className="text-container__subtitle">It's time to put your spending under control</p>
        <button 
          className="btn btn-blue btn-lg"
          onClick={ startLogin }
        >
          Login with 
          <span className="google-icon">
            <img src="./imgs/google-icon.png" alt=""/>
          </span>
        </button>
      </div>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => { 
    dispatch(startLogin())
  }
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
