import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const AddCount = () => {
    setCounter((counter + 1) % 20)
  }
  const DecreaseCount = () => {
    if(counter<=0)
       counter = 0;
    else
        counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
      <h1>This is a Counter Page</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={AddCount}>Add (+) : {counter}</button>
      <br />
      <button onClick={DecreaseCount}>Subract (-) : {counter}</button>
    </>
  )
}

export default App
