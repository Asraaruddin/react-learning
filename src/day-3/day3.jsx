import React, { useEffect, useState } from 'react'





function UserGreeting(props) {
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
const [isSubmited,setIsSubmitted] = useState(false);

const handleSubmit= () =>{
  setIsSubmitted(true);
} 

  return (   
    
    <div className='container-fluid mt-5  bg-dark text-white  '>
         
          <h1>Welcome !</h1>
          <input type="text" 
          placeholder='Enter your name'
          className='form-control mb-2 w-25 '
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          />
            <select className='form-selct mb-3 w-25' 
            value={city} 
            onChange={(e)=>setCity(e.target.value)}
            >
                <option value="-1">Select your city</option>
                <option value="chennai">chennai</option>
                <option value="hyd">hyd</option>
                <option value="delhi">delhi</option>
            </select>
            <br />
            <button className='btn btn-primary ' onClick={handleSubmit}>
              Submit
            </button>
            {isSubmited &&(
              <p className='mt-4'>Hello! {username} from {city}</p>
            )}
            
    </div>
 
    )


  }

export default UserGreeting;