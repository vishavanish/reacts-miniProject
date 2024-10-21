import {People} from './data';

import React from 'react'
import Person from './Person';

function Listting() {
  return (
    <>
    {People.map( (people) => {
        return  <Person key ={people.id} {...people}/>
        return <div key={people.id}>
            <h1>{people.name}</h1>
        </div>
    })}
    </>
   
  )
}

export default Listting