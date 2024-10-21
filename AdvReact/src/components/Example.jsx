import React from 'react'
import { useState , useEffect } from 'react'
const url= 'https://api.github.com/users/vishavanish';
// const url = "https://www.facebook.com/user/s"

function Example() {
    const [example ,setExample] = useState(2)
    const [error , setError] = useState(false)
    const [success , setSuccess] = useState(false)
    const [user ,setUser] = useState("")

    useEffect(() => {
      const fetchData = async () => {
        try{

        const response = await fetch(url)
        const data =  await response.json();
        setUser(data)
        console.log(data);
        setError(false)
        setSuccess(true)
      }
      catch{
        setError(true)
        setSuccess(false)

      }
      };
      fetchData()
      }, [])
      if(error) return 'fetching data from server'
      // if(success)  return 'Loaded'
   
    const {login ,name ,type,avatar_url} = user
    
  return (
    <div>
      {success? (
        <div> 
          <h1>{login}</h1>
        <h1>{name}</h1>
        <h3>{type}</h3> 
        <img src={avatar_url} alt="img loadded" />
      </div>
      )
        : null
      }
    </div>
  )
}

export default Example