import { createStore, combineReducers } from 'redux'
import { nanoid } from 'nanoid'


// Expenses: 
// * ADD_EXPENSE
const addExpense = ({
  description = '',
  note = 'No note added',
  amount = 0,
  createdAt = 0
} = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: nanoid(10),
    description,
    note,
    amount,
    createdAt
  }
})
// * EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// * REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// Filters:
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})


const demoState = {
  expenses: [{
    id: '594asd84sd',
    description: 'subject of expense',
    note: 'A note about the expense',
    amount: 54000,
    createdAt: 0
  }],
  filters: {
    text: 'text query',
    sortBy: 'date-or-amount', // can be sorted by date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// Expenses reducer
const expensesDefault = []; 

const expensesReducer = ((state = expensesDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'EDIT_EXPENSE': 
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else return expense 
      }) 
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)  
    default: 
      return state
  }
})

// Filter reducer
const filterDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = ((state = filterDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      } 
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
})


const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
}));

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  let filtededExpenses = expenses.filter(expense => {
    const startMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endMatch =  typeof endDate !== 'number' || expense.createdAt <= endDate;
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


const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log(state)
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
  console.log(visibleExpenses)
})

// calls to action 

const expense1 = store.dispatch(addExpense({ description: 'Perrito', amount: 5000, createdAt: 100}))
const expense2 = store.dispatch(addExpense({
  description: 'Gatito',
  amount: 10000,
  createdAt: 600
}))
const expense3 = store.dispatch(addExpense({
  description: 'Ladrador',
  amount: 2000,
  createdAt: 300
}))

// store.dispatch(removeExpense({ id: expense1.expense.id }))

// store.dispatch(editExpense(
//   expense2.expense.id,

// ))



// store.dispatch(setTextFilter('dor'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount())

// store.dispatch(setStartDate(700))
// store.dispatch(setEndDate(525))

// console.log(store.getState())




