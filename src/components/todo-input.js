import React from 'react'
import { connect } from 'react-redux'

const TodoInput = function (props) {
  return (
    <form onSubmit={props.addTodo(props)}>
      <input
        className="new-todo"
        placeholder="What needs to be done?" autoFocus
        value={props.todoText}
        onChange={props.setTodoText}
      />
    </form>
  )
}

const mapStateToProps = function (state) {
  return {
    todoId: state.todos.length + 1,
    todoText: state.todoText
  }
}

const mapActionsToProps = function (dispatch) {
  return {
    setTodoText: function (e) {
      dispatch({type: 'SET_TEXT', payload: e.target.value})
    },
    addTodo: function (props) {
      return function (e) {
        e.preventDefault()
        const newTodo = {id: props.todoId, text: props.todoText }
        dispatch({type:'ADD', payload: newTodo})
      }
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TodoInput)
