import React from 'react'
 
//blue print for variable//
type MessagesType = {
    title : String
    messages : String
}

const Messages = (props:MessagesType) => {
  return (
    <div className='m-4 text-justify pt-4 grid grid-cols-1 divide-y'>
        <p className='text-lg font-bold'>{props.title}</p>
        <p className='  font-thin '>{props.messages}</p>
        <div className= "grid grid-cols-1 divide-y"/>
    </div>
  )
}

export default Messages
