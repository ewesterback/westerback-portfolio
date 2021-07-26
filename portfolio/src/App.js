import './App.css'
import { Switch, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Resume />
    </div>
  )
}

export default App
