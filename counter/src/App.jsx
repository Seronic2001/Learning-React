import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const AddCount = () => {
    setCounter((counter + 1) % 20)
  }
  const DecreaseCount = () => {
    setCounter(Math.max(0,((counter - 1) % 20)))
  }

  return (
    <>
      <h1>This is a Counter Page</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={AddCount}>Add (+ 1) : {counter}</button>
      <br />
      <button onClick={DecreaseCount}>Subract (- 1) : {counter}</button>
    </>
  )
}

export default App
