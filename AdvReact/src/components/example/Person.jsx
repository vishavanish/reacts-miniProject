import React from 'react'
import reactLogo from '../../assets/react.svg'

function Person({id ,name , city , images}) {
  const image = images && images[0] && images[0].small ? images[0].small.url : {reactLogo};
  // const img = images[0].small.url
  // console.log(reactLogo)
  return (
    <div>
        <img src={reactLogo} alt="Loading..." />
        <p>{id}</p>
        <h3>{name} -- {city}</h3>
        {/* <h4></h4> */}
    </div>
  )
}

export default Person