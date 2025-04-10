import React from "react";

function UserCard(props) {
    return (
     <div className="user-card">
        <img
         src={props.profilePic}
         alt={`${props.name}'s profile`}
         style ={{ width:"100px", borderRadius:"50%" }}
        
        />
      <p><strong>Name:</strong>{props.name}</p>
      <p><strong>Email</strong> {props.email}  </p>
      <p>
      <strong>Status:</strong> {props.isVerified ? "✅ Verified" : "❌ Not Verified"}
      </p>
      
    
     </div>
    )
  }

  export default UserCard;