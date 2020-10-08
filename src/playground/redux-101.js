import { createStore } from 'redux'

// Actions generators - Functions that returns action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ newCount }) => ({
  type: 'SET',
  newCount
})

const resetCount = () => ({
  type: 'RESET'
})

// Action handeler - REDUCER
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT': 
      return {
        count: state.count - action.decrementBy
      }
    case 'SET': 
      return {
        count: action.newCount
      }
    case 'RESET': 
      return {
        count: 0
      }    
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


// Call to actions
store.dispatch(incrementCount({ incrementBy: 4}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 3 }))

store.dispatch(setCount({ newCount: 15 }))

store.dispatch(decrementCount())