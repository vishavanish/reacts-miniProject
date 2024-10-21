import React, { useState } from 'react'
import {data} from '../components/example/data';

function InputForm() {
  const [name , setName] =useState('')
  // const [email , setEmail] = useState('')
  const [users , setUsers] =  useState(data)
  const handleSubmit = (e) =>{
      e.preventDefault()
      // console.log(name ,"----"  ,email);
      if(!name) return;
      const fakeId = Date.now()
      const newUser = {id:fakeId , name:name}
      const updatedUser = [newUser, ...users]
      setUsers(updatedUser)
      setName('')
 }
 const removeUser = (id) => {
  const remUser = users.filter((user) => user.id !== id);  // Remove user by filtering out by ID
  setUsers(remUser);  // Update state with remaining users
};
 

  return (
    <React.Fragment>
        <form action="" className='form' onSubmit={handleSubmit}>
            <h4> Registration Form </h4>
            <div className='form-row'>
              <label htmlFor="name">Name    </label><span>  -  </span>
              <input type="text" value={name} id='name' className='form-input' onChange={ (e) => setName(e.target.value)}/>
            </div>
            <div className='form-row'>
              {/* <label htmlFor="email">Email</label><span>  -  </span> */}
              {/* <div></div> */}
              {/* <input type="email"  id='email' value={email} onChange={ (e) => setEmail(e.target.value)} className='form-input'/> */}
              {/* <br /> */}
            
            </div>
            <br />
           
            <button type='submit' className='btn btn-block'>Submit</button>
            <div></div>

        </form>
        <ul>
        {users && users.map((user) => (
          <div key={user.id}>
            <li>
              {user.name || "Not found"}
            </li>
            <button onClick={() => removeUser(user.id)} className='btn'>Delete</button>
          </div>
        ))}
      </ul>

    </React.Fragment>
  )
}

export default InputForm