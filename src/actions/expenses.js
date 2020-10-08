import { nanoid } from 'nanoid'

// ------------ Expenses Actions --------------- 
// * ADD_EXPENSE
export const addExpense = ({
  description = '',
  note = '',
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
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// * REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})