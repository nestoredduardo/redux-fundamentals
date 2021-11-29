import { TODO_ADD, TODO_TOGGLE } from './todosType'

const initialState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'All',
    colors: [],
  },
}

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      }
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed,
          }
        }),
      }
    default:
      return state
  }
}

export default todosReducer
