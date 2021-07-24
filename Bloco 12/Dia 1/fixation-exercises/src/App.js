import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      numOfClickIm: 0
    }
    this.im = this.im.bind(this);
    this.state = {
      numOfClickLearning: 0
    }
    this.learning = this.learning.bind(this);
    this.state = {
      numOfClickReact: 0
    }
    this.react = this.react.bind(this);
  }

  im = () => {
    // console.log("I'm");
    this.setState((beforeState, _props) => ({
      numOfClickIm: beforeState.numOfClicksIm + 1
    }))
  }

  learning = () => {
    // console.log('learning');
    this.learning((beforeState, _props) => ({
      numOfClickLearning: beforeState.numOfClickLearning + 1
    }))
  }

  react = () => {
    // console.log('React');
    this.setState((beforeState, _props) => ({
      numOfClickReact: beforeState.numOfClickReact + 1
    }))
  }

  render () {
    console.log(this);
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
