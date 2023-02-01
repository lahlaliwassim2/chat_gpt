import React from 'react'

function ChatBody() {
  return (
<div className="flex flex-col gap-4">
{/* client message */}
<div>
    <pre>
        <span>Hy Chat GPT, Can YOU HELP ME</span>
    </pre>
</div>


{/* ai message */}
<div>
    <pre>
        <span>Yeah , I can help you with anything</span>
    </pre>
</div>
</div>  )
}

export default ChatBody