import logo from './logo.svg';
import './App.css';
import { Home, Contact, Projects, About } from './index';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/projects">Projects</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </>
  );
}

export default App;
