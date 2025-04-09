import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import './App.css'


const user = {
  name:"Asrar uddin",
  imageUrl:"https://pluspng.com/img-png/react-logo-png-black-and-blue-atom-icon-screenshot-react-javascript-responsive-920x1000.png",
  imageSize: 100,
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My First React App 🚀</h1>
      <Counter />
      <h1>{user.name}</h1>
      <img 
      className='avatar'
      src={user.imageUrl}
      alt={'Photo of ' + user.name} 
      style={{
        width:user.imageSize,
        height:user.imageSize,
      }}
      />
    </div>
    
  );
}



export default App
