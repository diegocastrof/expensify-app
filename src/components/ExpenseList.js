import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import ExpenseListFilter from './ExpenseListFilter'
import ExpenseSummary from './ExpenseSummary'
import filteredExpenses from '../selectors/expenses'


const ExpenseList = (props) => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilter />
    <div className="container">
      <div className="expenses-list">
        <div className="expenses-list__header">
          <div>
            Expense
          </div>
          <div>
            Amount
          </div>
        </div>
      {
        props.expenses.length === 0 ? 
        <div className="expenses-list__item--empty">
          <p className="expenses-list__item--empty">
            You have no expenses pending. Good job!
          </p>
        </div> :
        props.expenses.map((expense, index) => (
          <ExpenseListItem {...expense} key={index}/>
        ))
      }
      </div>
    </div>

  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: filteredExpenses(state.expenses, state.filter)
  }
}

export default connect(mapStateToProps)(ExpenseList)