import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [resource, setResourse] = useState('Posts')
  const [darkMode, setDarkMode] = useState(false)
  console.log("Rendered");
  
  useEffect(()=>{
    console.log("OnMount");
    
  },[])

  return (

    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <button onClick={()=>setResourse('Posts')}> Posts</button>
      <button onClick={()=>setResourse('Users')}> Users</button>
      <button onClick={()=>setResourse('Feeds')}> Feeds</button>
      <button onClick={()=>setDarkMode(!darkMode)} >{darkMode? "Light Mode" :" Dark Mode"}</button>
      <h1>{resource}</h1>
    </div>
    
  )
}

export default App
