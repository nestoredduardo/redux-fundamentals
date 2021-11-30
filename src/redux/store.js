import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import todosReducer from './todos/todosReducer'
import filtersReducer from './filters/filtersReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

const middlewareEnhancer = applyMiddleware(thunk)
const composeEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, composeEnhancers)

export default store
