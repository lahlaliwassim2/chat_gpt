import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1A232E] h-screen py-6 sm:px-28 relative text-white  overflow-hidden flex flex-col justify-between align-middle'>
      {/* header  */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      <div className="uppercase font-bold text-2xl text-center mb-3">Chater m3a Gpt</div>

       {/* body  */}
      <div className="body">header</div>

       {/* input  */}
       <div className="input">input</div>
    </div>
  )
}

export default App
