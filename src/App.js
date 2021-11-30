import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'

import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <nav>
          <section>
            <h1>Redux Fundamentals Example</h1>

            <div className="navContent">
              <div className="navLinks"></div>
            </div>
          </section>
        </nav>
        <Header />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
