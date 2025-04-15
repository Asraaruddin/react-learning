import { useState } from "react";

function UserForm(){

const [name, setName] = useState('');
const [age,setAge] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !age){
        alert("Please enter all fields")
    }
    alert(`Hello ${name},you are ${age} years old`);
    setName("");
    setAge("")
};
const handleCustomClick = (message) => {
    alert("Custom message:" + message)
}


return(

    <div className="container-fluid mt-4">
        <h2>User Form </h2>
        <form onSubmit={handleSubmit} className="form-control mb-2 w-50">
            <input type="text" 
            value={name}
            placeholder="Enter Name"
            onChange={(e)=> setName(e.target.value)}
            />
            
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-control mb-2 w-50"
        />
        
            <button  type="submit" className="btn btn-primary m-4">Submit</button>
            <br />
        </form>
        <button className="btn btn-secondary" onClick={()=>handleCustomClick("Hey asrar!")}>Click with Custom Arg</button>
    </div>
)

}

export default UserForm;