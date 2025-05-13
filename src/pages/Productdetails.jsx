import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(){
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data);
            setLoading(false)
        })
    },[id]);

    if (loading) return <p className="p-4">Loading...</p>;
    if(!product) return <p className="p-4 text-red-600">Product not found</p>;

    return(
        <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <img src={product.image} alt={product.title} className="w-32 max-auto" />
            <p className="mt-2 text-gray-700">${product.price}</p>
            <p className="mt-4">{product.description}</p>
        </div>
    )

    
}