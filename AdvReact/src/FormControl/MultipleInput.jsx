import React,{useState} from 'react'

function MultipleInput() {
    const [Term, setTerm] = useState(false)
 const handleCheck = (e)=> {
    console.log(e.target.checked);
    setTerm(e.target.checked)
 }
 const [user, setUser] = useState({
    name:"" ,
    email: "" ,
    password:"" 
 });
 const handleChnage = (e) =>{
    console.log(e.target.value);
    console.log(e.target.name);
    //logic to spreadte and get store in variavle
    setUser({...user ,[e.target.name]: e.target.value})

 }
 const handleSubmit = (e)=> {
    e.preventDefault()
    if(!Term) return;
    console.log("submited form :)")
 }
  return (
    <>
        <form action="" className='form' onSubmit={handleSubmit}>
            <div>
                <h5>Multiple Inputs</h5>
            </div>
            <div>
                <label htmlFor="name" className='form-row'>Name</label>
                <input type="text" name='name' value={user.name} onChange={handleChnage}/>
            </div>
            <div>
                <label htmlFor="email" className='form-row'>Email</label>
                <input type="email" name='email' value={user.email} onChange={handleChnage}/>
            </div>
            <div>
                <label htmlFor="password" className='form-row'>Password</label>
                <input type="password" name='password' value={user.password} onChange={handleChnage}/>
            </div>
            <div>
                <label htmlFor="term">Terms: </label>
                <input type="checkbox"  id='term' name='term' checked={Term} onChange={handleCheck}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </>
  )
}

export default MultipleInput