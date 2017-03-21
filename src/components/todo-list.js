import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const TodoList = function (props) {
  const listTodo = (todo) => {
    return (
      <li key={todo.id} className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{todo.text}</label>
          <button className="destroy" />
        </div>
        <input className="edit" defaultValue="Rule the web" />
      </li>
    )
  }

  return (
    <div>
    <input className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className="todo-list">
      { map(listTodo, props.todos) }
    </ul>
    </div>
  )
}

const mapStateToProps = function (state) {
  return { todos: state.todos }
}


export default connect(mapStateToProps)(TodoList)
