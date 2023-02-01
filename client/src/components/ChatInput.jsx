import React from 'react'

function ChatInput() {
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative'>
        <textarea className='border-0 bg-transparent outline-none w-11/12'  rows={1} >




        <img
            src="./send.png"
            width={20}
            alt="send-button"
            className="absolute top-4
        right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125
        "
          />
        </textarea>
    </div>
  )
}

export default ChatInput