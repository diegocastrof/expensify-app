import moment from 'moment'

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  let filtededExpenses = expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    
    const startMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startMatch && endMatch && textMatch
  })
  return filtededExpenses.sort((a, b) => {
    if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1
    } else {
      return a.createdAt > b.createdAt ? -1 : 1
    }
  })
}

export default getVisibleExpenses