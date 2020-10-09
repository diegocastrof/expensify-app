import React from 'react'
import { connect } from 'react-redux'
import filteredExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'



const ExpenseSummary = ({ expenses }) => {
    const totalExpensesCount = expenses.length;
    const totalExpensesAmount = getExpensesTotal(expenses)
    
    return (
            <div>
              {
                <h3> { `You'are viewing ${totalExpensesCount} 
                ${totalExpensesCount === 1 ? 'expense' : 'expenses'}. 
                Total amount: ${numeral(totalExpensesAmount / 100).format('$0,0.00')}` } </h3>
              }
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
      expenses: filteredExpenses(state.expenses, state.filter)
    }
}


export default connect(mapStateToProps)(ExpenseSummary)