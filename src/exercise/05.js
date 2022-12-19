// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({styles, size, text}) => {
  const componentStyles = {
    fontStyle: 'italic',
    ...styles,
  }

  const sizeClassName = size ? `box--${size}` : ''

  return (
    <div className={`box ${sizeClassName}`} style={componentStyles}>
      {text}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box
        styles={{backgroundColor: 'lightblue'}}
        size="small"
        text="small lightblue box"
      />
      <Box
        styles={{backgroundColor: 'pink'}}
        size="medium"
        text="medium pink box"
      />
      <Box
        styles={{backgroundColor: 'orange'}}
        size="large"
        text="large orange box"
      />
    </div>
  )
}

export default App
