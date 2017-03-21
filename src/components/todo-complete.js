import React from 'react'

const TodoCompleted = function () {
  return (
    <div>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </div>
  )
}

export default TodoCompleted
