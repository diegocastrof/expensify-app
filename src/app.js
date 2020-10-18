import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter';

import configStore from './store/configStore';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configStore();

const jsx = (
  <Provider store = { store }>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))
store.dispatch(startSetExpenses())
  .then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
  })


