import { combineReducers, createStore } from 'redux'

import todosReducer from './todos/todosReducer'
import filtersReducer from './filters/filtersReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

const store = createStore(rootReducer)

export default store
