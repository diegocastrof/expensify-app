import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter';

import configStore from './store/configStore'

import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configStore();

console.log(store.getState())

store.dispatch(addExpense({ description: 'Water bill', amount: 20000, createdAt: 1 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 35000, createdAt: 2 }))
store.dispatch(addExpense({ description: 'Rent', amount: 100000, createdAt: 5 }))


console.log(store.getState())
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filter))


const jsx = (
  <Provider store = { store }>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
