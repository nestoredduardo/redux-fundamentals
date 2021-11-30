import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleKey = (e) => {
    const trimmedText = e.target.value.trim()
    console.log(text)

    if (e.key === 'Enter' && trimmedText) {
      dispatch({ type: 'TODO_ADD', payload: trimmedText })
      setText('')
    }
  }

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKey}
    />
  )
}

export default Header
