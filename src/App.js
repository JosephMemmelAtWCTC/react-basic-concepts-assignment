import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country'

class App extends Component {
  state = { };
  render() {
    return (
      <div>
        <header>
        </header>
        <Country countryName='test'>
        </Country>
      </div>
    )
  }
}

export default App;
