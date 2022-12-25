import React, { useState } from 'react'
import '../index.css'
import './Counter.css'

function Counter () {
  const [counter, setCounter] = useState(0)
  const [xd, setIncrement] = useState(1)

  const decrement = () => {
    setCounter(counter - xd)
  }

  const increment = () => {
    setCounter(counter + xd)
  }

  return (
    <div className='app-container'>
      <div className='counter-app-container'>
        <h1>Counter</h1>
        <div className='counter'>
          <button onClick={decrement}>-</button>
          <div>{counter}</div>
          <button onClick={increment}>+</button>
        </div>
        <input onChange={(ev) => setIncrement(parseInt(ev.target.value))} type="number" min="1" max="100" />
      </div>
    </div>
  )
}

export default Counter
