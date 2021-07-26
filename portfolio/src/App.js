import './App.css'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Resume from './pages/Resume'

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(props) => <Main {...props} />} />
      <Route path="/resume" render={(props) => <Resume {...props} />} />
    </div>
  )
}

export default App
