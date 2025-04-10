import React from "react";


function ProductCard(props){
    return(

        <div className="productcard">
           

<img
         src={props.productPic}
         alt={`${props.name}'s profile`}
         style ={{ width:"100px", borderRadius:"50%" }}
        
        />
           <h1>{props.title}</h1>
           <p>Price: {props.price} -/ </p>
           <p><strong>In stock:{props.inStock ? "Yes" : "No"}</strong></p>
        </div>
    )
}
export default ProductCard