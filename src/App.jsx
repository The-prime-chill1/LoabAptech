import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import About from './components/About';
import Privacy from './components/Privacy';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <About />
      <Privacy/>
      <Footer/>
    </div>
  )
}

export default App
