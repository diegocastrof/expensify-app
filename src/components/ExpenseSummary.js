import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import filteredExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';




const ExpenseSummary = ({ expenses }) => {
    const totalExpensesCount = expenses.length;
    const totalExpensesAmount = getExpensesTotal(expenses)
    const formattedAmount = numeral(totalExpensesAmount / 100).format('$0,0.00')
    
    return (
            <div className="page-header">
              <div className="container">
                <div className="summary__content">
                    <h3 className="summary__content--title">  You'are viewing <span>{totalExpensesCount}</span> 
                    {totalExpensesCount === 1 ? ' expense' : ' expenses'}. 
                    Total amount: <span>{formattedAmount}</span>  </h3>
                </div>
                <div className="summary__addExpense">
                  <Link className="btn btn-blue btn-md" to="/create">Add Expense</Link>
                </div>
              </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
      expenses: filteredExpenses(state.expenses, state.filter)
    }
}


export default connect(mapStateToProps)(ExpenseSummary)