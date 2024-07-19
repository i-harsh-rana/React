import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function add () {
    if(count==20){
      return;
    }else{
      setCount(count+1);
    }
  }

  function minus(){
    if(count==0){
      return;
    }else{
      setCount(count-1);
    }
  }

  return (
    <>
      <h2>React Counter: {count}</h2>
      <button onClick={add}>Increase</button>
      <button onClick={minus}>Decrease</button>
    </>
  )
}

export default App
