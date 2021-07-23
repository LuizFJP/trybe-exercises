import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function im() {
  console.log("I'm");
}

function learning() {
  console.log('learning');
}

function react() {
  console.log('React');
}

class App extends Component {
  render () {
    return(
      <div>
        <button onClick = {im}>I'm</button>
        <button onClick = {learning}>Learning</button>
        <button onClick = {react}>React</button>
      </div>
      );
  }
    
}

export default App;
