import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country'

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', medals: [
        { 
          id: "gold",
          name: "Gold",
          count: 2
        },
        { 
          id: "silver",
          name: "Silver",
          count: 4
        },
        { 
          id: "bronze",
          name: "Bronze",
          count: 6
        },
      ] },
      { id: 2, name: 'China', medals: [
        { 
          id: "gold",
          name: "Gold",
          count: 3
        },
        { 
          id: "silver",
          name: "Silver",
          count: 2
        },
        { 
          id: "bronze",
          name: "Bronze",
          count: 7
        },
      ] },
      { id: 3, name: 'Germany', medals: [
        { 
          id: "gold",
          name: "Gold",
          count: 0
        },
        { 
          id: "silver",
          name: "Silver",
          count: 4
        },
        { 
          id: "bronze",
          name: "Bronze",
          count: 5
        },
      ] },
    ]
  };

  getTotalMedalCount = (medalId) => {
    // object keys can use Dot notation
    // for example, b.gold
    // object keys can also use Bracket notation
    // for example, b['gold']
    // return countries.reduce((a, b) => a + b.gold, 0);
    return this.state.countries.reduce((a, b) => a + b.medals[b.medals.map(m => m.id).indexOf(medalId)].count, 0);
  }

  handleMedalUpdate = (countryId, medalId, medalChange) => {
    
    const updateCountryIndex = this.state.countries.map(c => c.id).indexOf(countryId);
    const countriesCopy = this.state.countries;
    countriesCopy[updateCountryIndex].medals[countriesCopy[updateCountryIndex].medals.map(m => m.id).indexOf(medalId)].count += medalChange;

    if(countriesCopy[updateCountryIndex].gold < 0){
      countriesCopy[updateCountryIndex].gold = 0;
    }

    this.setState({countries: countriesCopy})
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Country Gold Medal Counter
          { this.getTotalMedalCount('gold') }
          { this.getTotalMedalCount('silver') }
          { this.getTotalMedalCount('bronze') }
        </header>
        {this.state.countries.map(country =>
          <Country
            key={country.id}
            country={country}
            onMedalUpdate={this.handleMedalUpdate}
          />
        )}
      </div>
    )
  }
}

export default App;
