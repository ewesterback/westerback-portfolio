import './App.css'
import { Switch, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App
