import { useState } from 'react'
import ChatBody from './components/ChatBody'
import ChatInput from './components/ChatInput'

function App() {
  const [chat, setChat] = useState([])
  const sendMessage = async ()=>{
    await Promise.resolve(setChat((prev)=>[...prev,message]))
  }
  return (
    <div className='bg-[#1A232E] h-screen py-8  sm:px-28 relative text-white  overflow-hidden flex px-10 flex-col justify-between align-middle'>
      {/* header  */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      <div className="uppercase font-bold text-2xl text-center mb-3">Chater m3a Gpt</div>

       {/* body  */}
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 self-center">
        <ChatBody chat={chat} />
      </div>

       {/* input  */}
       <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput sendMessage={sendMessage} />
       </div>
    </div>
  )
}

export default App
