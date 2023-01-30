import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* header  */}
      <div className="header"></div>

       {/* body  */}
      <div className="body"></div>

       {/* input  */}
       <div className="input"></div>
    </div>
  )
}

export default App
