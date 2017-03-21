import React from 'react'

import TodoList from './components/todo-list'
import TodoInput from './components/todo-input'
import TodoComplete from './components/todo-complete'


const App = function () {
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>

        <section className="main">
          <TodoComplete />
          <TodoList />
        </section>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <p>Created by <a href="#">you</a></p>
        <p>Part of <a href="#">TodoMVC App</a></p>
      </footer>
    </div>
  )
}

export default App
