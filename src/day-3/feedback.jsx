import { useState } from "react"

function FeedbackForm(){
    const dropdown = ["Feedback", "Bug Report", "Suggestion", "Other"]
    const  [name,setName] = useState('');
    const [type,setType] = useState(dropdown[0]);
    const [message, setMessage] = useState('');

   const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`Name:${name}\nType:${type}\n Message:${message}`)
   }
    return(
        <div className="container-fluid p-4">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Type</label>
          <select 
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {dropdown.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
                <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea 
            className="form-control" 
            rows="4" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </div>

             <button  type="submit" className="btn btn-primary m-4">Submit</button>

            </form>

        </div>
    )
}
export default FeedbackForm