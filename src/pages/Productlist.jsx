import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductList(){
    const [products,setProduct] = useState([]);
    useEffect(()=>{
   fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())   
    .then((data)=> setProduct(data));
    },[]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <ul className="space-y-3">
                {products.map((product)=>(
                    <li  key={product.id}>
                        <Link to={`/products/${product.id}` } className="text-blue-600 underline">
                        {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}