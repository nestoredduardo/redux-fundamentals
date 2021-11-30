import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed)
    return uncompletedTodos.length
  })

  const { status, colors } = useSelector((state) => state.filters)

  return (
    <footer>
      <div>
        <h5>Actions</h5>
        <button>Mark All Completed</button>
        <button>Clear Completed</button>
      </div>
    </footer>
  )
}

export default Footer
