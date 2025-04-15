import React, { useEffect, useState } from 'react'





function UserGreeting(props) {

  


  const cities = [ 'Select city','hyd','chennai','delhi','banglore','mumbai'];
  const [items] = useState(
    [
      {Category:'Electronics',Products:['TV',"Mobile"]},
      {Category:'Footwear',Products:['Casuals','Boots','Sneaker']}
    ]
  )
  const [mfd] = useState(new Date());
  const product = {
    name:"iphone16",
    price:"89,000",
    rating:4.3,
  }
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
const [isSubmited,setIsSubmitted] = useState(false);

const handleSubmit= () =>{
  if(!username.trim()) {
    alert("Please enter your name.");
    return;
  }
  if(city==="Select city"){
    alert("Please select a valid city.")
    return;
  }
      
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
               {cities.map((city,index )=>
                (<option key={index} value={city}>
                  {city} 
                  </option> ))}
            </select>
            <br />
            <button className='btn btn-primary ' onClick={handleSubmit}>
              Submit
            </button>
            {isSubmited &&(
              <p className='mt-4'>Hello! {username} from {city}</p>
            )}

            <ul>
              {
                Object.keys(product).map(key=><li key={key}>{key} : {product[key]}</li>)
              }
            </ul>

            <ol>
              {
                items.map(item=>
                  <li key={item.Category}>
                    {item.Category}
                  <ul>
                    {
                      item.Products.map(product=><li key={product}>{product}</li>)
                    }
                  </ul>
                  </li>
                )
              }
            </ol>
            <h2>{mfd.toDateString()}</h2>
            
    </div>
 
    )


  }

export default UserGreeting;