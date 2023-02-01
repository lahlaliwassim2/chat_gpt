import React from 'react'

function ChatBody() {
    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto "

  return (
<div className="flex flex-col gap-4">
{/* client message */}
<div className='border-[#999999] break-words border-2 rounded-xl py-3 self-end px-3 max-w-[80%]'>
    <pre className='whitespaces-pre-wrap'>
        <span>Hy Chat GPT, Can YOU HELP ME</span>
    </pre>
</div>


{/* ai message */}
<div className={`border-[#999999] break-words border-2 rounded-xl py-3 self-end px-3 max-w-[80%] ${aiStyle}`}>
    <pre className='whitespaces-pre-wrap'>
        <span>Yeah , I can help you with anything</span>
    </pre>
</div>
</div>  )
}

export default ChatBody