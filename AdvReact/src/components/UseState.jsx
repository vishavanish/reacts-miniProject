import React, { useState } from 'react'

function UseState() {
    const [peoples, setPeoples] =useState([{id :1 ,name :'avanish'} ,{id :2 ,name :'Vikash'} ,{id :3 ,name : "Deepka"} ,{id :4 ,name :'Abhishek'}])
    const delClear = (id) => {
        setPeoples(peoples.filter((people)=>{people.id !== id}))
    }
    const deletAll = () =>{
        setPeoples([])
        console.log("all clear")
    }
  return (
    <div>
        { peoples.map( (people) => {
            const {id , name} =people
            return(
                <div key={id}>
                <h1>{name}</h1>
                <button onClick={ () =>{delClear(id)}}>Clear</button>
                </div>
                
            )
        })}
        <button onClick={deletAll}>ClearAll</button>
    </div>
  )
}

export default UseState