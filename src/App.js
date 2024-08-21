import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country'

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  };

  handleGoldUpdate = (countryId, goldChange) => {
    console.log(countryId, goldChange);
    const updateCountryIndex = this.state.countries.map(c => c.id).indexOf(countryId);
    const countriesCopy = this.state.countries;
    countriesCopy[updateCountryIndex].gold += goldChange;

    if(countriesCopy[updateCountryIndex].gold < 0){
      countriesCopy[updateCountryIndex].gold = 0;
    }

    this.setState({countries: countriesCopy})
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Country Gold Metal Counter
        </header>
        {this.state.countries.map(country =>
          <Country
            key={country.id}
            country={country}
            onGoldUpdate={this.handleGoldUpdate}
          />
        )}
      </div>
    )
  }
}

export default App;
