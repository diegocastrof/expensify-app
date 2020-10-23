import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppRouter, { history } from './routers/AppRouter';

import Loading from './components/Loading';

import configStore from './store/configStore';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configStore();

const jsx = (
  <Provider store = { store }>
    <AppRouter/>
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true;
  }
}

ReactDOM.render(<Loading/>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('login')
    const { uid, displayName, email } = user
    store.dispatch(login({ uid, displayName, email }))
    store.dispatch(startSetExpenses())
    .then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    })
  } else {
    console.log('logout')
    store.dispatch(logout())
    renderApp();
    history.push('/');
  }
})