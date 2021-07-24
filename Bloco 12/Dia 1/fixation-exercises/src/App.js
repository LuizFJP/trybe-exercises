import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.im = this.im.bind(this);
    this.learning = this.learning.bind(this);
    this.react = this.react.bind(this);
  }

  im() {
    console.log("I'm");
  }

  learning() {
    console.log('learning');
  }

  react() {
    console.log('React');
  }

  render () {
    return(
      <div>
        <button onClick = {this.im}>I'm</button>
        <button onClick = {this.learning}>Learning</button>
        <button onClick = {this.react}>React</button>
      </div>
      );
  }
    
}

export default App;
