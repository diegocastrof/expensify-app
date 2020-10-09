import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import ExpenseListFilter from './ExpenseListFilter'
import ExpenseSummary from './ExpenseSummary'
import filteredExpenses from '../selectors/expenses'


const ExpenseList = (props) => (
  <div>
    <h1>This is the Expenses List</h1>
    <ExpenseSummary />
    <ExpenseListFilter />
    {
      props.expenses.map((expense, index) => (
        <ExpenseListItem {...expense} key={index}/>
      ))
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: filteredExpenses(state.expenses, state.filter)
  }
}

export default connect(mapStateToProps)(ExpenseList)