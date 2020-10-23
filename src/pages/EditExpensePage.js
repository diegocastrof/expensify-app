import React from 'react';
import { connect } from 'react-redux'

import ExpenseForm from '../components/ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="container">
        <div className="edit-header">
          <p className="edited-expense">
            Editing expense { props.expense.description }
          </p>
          <div className="delete-btn">
            <button 
              className="btn btn-red btn-md"
              onClick= {() => { 
                props.dispatch(startRemoveExpense(props.expense.id))
                props.history.push('/')
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
    <ExpenseForm 
      expense={props.expense}
      onSubmit={ (expense) => { 
        props.dispatch(startEditExpense(props.expense.id , expense))
        props.history.push('/')
      }} 
    />
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage)