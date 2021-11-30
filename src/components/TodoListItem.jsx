import React from 'react'

const TodoListItem = ({ todo }) => {
  return (
    <ul>
      <p>{todo.text}</p>
      <p>{todo.completed}</p>
      <div className={todo.color}></div>
    </ul>
  )
}

export default TodoListItem
