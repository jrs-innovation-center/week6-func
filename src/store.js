import { createStore } from 'redux'
import { append } from 'ramda'

const rootReducer = function (state, action) {
  if (!state) {
    state = {
      todos: [{id: 1, text: 'Fake Todo'}],
      todoText: ''
    }
  }

  if (action.type === 'SET_TEXT') {
    return {
      todos: state.todos,
      todoText: action.payload
    }
  }

  if (action.type === 'ADD') {
    return {
      todos: append(action.payload, state.todos),
      todoText: ''
    }
  }

  return state
}

const store = createStore(rootReducer)

export { store }
