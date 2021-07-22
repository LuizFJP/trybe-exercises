import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from './Component';

  function message(value) {
    return <h1>{ value }</h1>
  }
  const testJSX = 'Hello, JSX';
function App() {
  return( 
  message(testJSX)
  );
}

export default App;
