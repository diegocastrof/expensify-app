const getExpensesTotal = (filteredExpenses) => {
    return filteredExpenses.reduce((acc, { amount }) => amount + acc, 0)
}

export default getExpensesTotal