// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const [inpuValue, setInputValue] = React.useState('')

  const inputRef = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()

    const value = inputRef.current.value
    onSubmitUsername(value)
  }

  const handleChange = event => {
    const {value} = event.target
    setInputValue(value)
    const isValid = value === value.toLowerCase()

    const errorText = 'Username must be lower case'
    setError(isValid ? null : errorText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          id="userNameInput"
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={inpuValue}
        />
        {error && (
          <p style={{color: 'red'}} role="alert">
            {error}
          </p>
        )}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
