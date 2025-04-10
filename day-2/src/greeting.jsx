import React from "react";
import PropTypes from "prop-types";


function Greeting(props) {
  console.log("Props received:", props);
  return (
   <div className="student">
    <p>Name:{props.name}</p>
    <p>Age: {props.age} </p>
    <p>Student:{props.isStudent ? "yes": "No"}</p>
    
   </div>
  )
}
Greeting.propTypes ={
  name:PropTypes.string,
  age: PropTypes.number,
  isStudent:PropTypes.bool,

}

Greeting.defaultProps = {
  name:"Guest",
  age:0,
  isStudent:false,
}
export default Greeting;
