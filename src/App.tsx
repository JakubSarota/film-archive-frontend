import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import home from './pages/home'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={home}/>
        </Switch>
      </Router>
    </div>
  );
}

