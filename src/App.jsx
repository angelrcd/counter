import React, { useState } from 'react'
import './index.css'
import TopBar from './components/TopBar'
import Counter from './components/Counter'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Counter />
    </>
  )
}

export default App
