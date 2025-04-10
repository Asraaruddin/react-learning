import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './greeting'
import UserCard from './Usercard'
import ProductCard from './product'
import StatusBadge from './status'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div> 
 
     <StatusBadge isOnline={true} />
     <StatusBadge isOnline={false} />
     
    <ProductCard title="Shoes" price="3000" inStock={true} productPic="https://sneakernews.com/wp-content/uploads/2020/07/air-jordan-1-mid-metallic-gold-DC1419-700-1-1.jpg?w=1140" />
    <UserCard name="Patrick" email="patrick@gamil.com" isVerified={true} profilePic="https://6835b446.rocketcdn.me/wp-content/uploads/2022/02/thebatman1.jpg"  />
    <UserCard name="asrar" email="asraar@gamil.com" isVerified={false}  profilePic="https://images.lifestyleasia.com/wp-content/uploads/sites/5/2022/02/22205331/The-Batman.jpg" />
    
   
  </div>
      
  )
}

export default App
