import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import home from './pages/home'
import test from './pages/test'
import signup from './pages/signup'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={home}/>
          <Route path='/test' exact component={test}/> {/*test linkowania*/}
          <Route path='/signup' exact component={signup}/>
        </Switch>
      </Router>
    </div>
  );
}

