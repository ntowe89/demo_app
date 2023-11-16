import { useState } from "react";


function App() {
  // const [name, setName] = useState('Nathan')

  // setTimeout(() => {
  //   setName('Dustin')
  // }, 3500)

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(currantValue => {
      return currantValue + 1
    })
  }

  const decrement = () => {
    if(counter === 0) return
    setCounter(currantValue => {
      return currantValue - 1
    })
  }

  return (
    <div>
      <h3> counter: {counter}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

// Don't manipulate the DOM directly
//don't ever ever ever change a stateful variable directly