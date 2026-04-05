import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/navbarComponent/navbarComponent.tsx'
import MainPageComponent from './components/mainPageComponent/mainPageComponent.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarComponent />
      <MainPageComponent />
    </div>
    
  )
}

export default App
