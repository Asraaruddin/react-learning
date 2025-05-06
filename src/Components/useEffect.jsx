import { useEffect, useState } from "react";

export function Useeffect(){
const [resourceType,setResourceType] = useState('posts')
const [items,setItems] = useState([])
const [windowWidth,setwindowWidth] = useState(window.innerWidth)

console.log('render')

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response=>response.json())
    .then(json=>setItems(json))
},[resourceType])

return (
    <div>
        <button className="btn btn-primary"  onClick={()=>setResourceType('posts')}>Posts</button>
        <button className="btn btn-secondary my-4"  onClick={()=>setResourceType('Users')}>Users</button>
        <button className="btn btn-danger"  onClick={()=>setResourceType('comments')}>Comments</button>
        <h1>{resourceType}</h1>
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
        <h2>{windowWidth}</h2>
    </div>

)

}