import React from 'react';
import { connect } from 'react-redux'

import ExpenseForm from '../components/ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => (
  <div>
    <h1>This is Edit for {props.expense.description}</h1>
    <ExpenseForm 
      expense={props.expense}
      onSubmit={ (expense) => { 
        props.dispatch(startEditExpense(props.expense.id , expense))
        props.history.push('/')
      }} 
    />
    <button 
      onClick= {() => { 
        console.log('click')
        props.dispatch(startRemoveExpense(props.expense.id))
        props.history.push('/')
      }}
    >
      Remove
    </button>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage)