import React from 'react';
import ExpenseForm from '../components/ExpenseForm'
import { connect } from 'react-redux'

import { startAddExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h1>Add an expense</h1>
    <ExpenseForm 
      onSubmit={ (expense) => { 
        props.dispatch(startAddExpense(expense))
        props.history.push('/') 
      }} 
    />
  </div>
)

export default connect()(AddExpensePage)