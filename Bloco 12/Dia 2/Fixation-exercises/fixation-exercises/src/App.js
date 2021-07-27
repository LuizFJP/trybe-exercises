import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      aboutMe: '',
    }
  }

  handleChange(e) {
    this.setState({
      aboutMe: e.target.value,
    })
  }

  render(){
  return (
    <section>
      <input type = "number" name = "age">
      </input>
      <textarea onChange = {this.handleChange} value = {this.state.aboutMe}></textarea>
      <input type = "name" name = "name">
      </input>
    </section>
  );
  }
}

export default App;
