import React, { useState } from 'react'

function TrulyFalsy() {

    const [text , setText] = useState('')
    const [name , setName] = useState('vish')
  return (
    // <div>{if(text){<h1>text</h1>}}</div>
    <div>
        <h3>Falsy OR : {text || "Hello False OR" }</h3>
        <h3> Falsy AND : { text && 'Hello False AND'}</h3>
        <h3>Truthy OR : {name || 'Hello True OR'}</h3>
        <h3>Truthy AND : {name && 'Hello True AND'}</h3>
    </div>
  )
}

export default TrulyFalsy