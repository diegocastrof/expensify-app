import React from 'react';
import ExpenseForm from '../components/ExpenseForm'
import { connect } from 'react-redux'

import { startAddExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="container">
        <h1>Add an Expense</h1>
      </div>
    </div>
    <ExpenseForm 
      onSubmit={ (expense) => { 
        props.dispatch(startAddExpense(expense))
        props.history.push('/') 
      }} 
    />
  </div>
)

export default connect()(AddExpensePage)