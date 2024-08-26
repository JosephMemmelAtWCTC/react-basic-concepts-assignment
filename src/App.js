import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from '@mdi/react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Country from './components/Country'
import {mdiMedal} from '@mdi/js';

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
          count: 0
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
    let medalsIndex = countriesCopy[updateCountryIndex].medals.map(m => m.id).indexOf(medalId);
    countriesCopy[updateCountryIndex].medals[medalsIndex].count += medalChange;

    if(countriesCopy[updateCountryIndex].medals[medalsIndex].count < 0){
      countriesCopy[updateCountryIndex].medals[medalsIndex].count = 0;
    }

    this.setState({countries: countriesCopy})
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header flex-container'>
          <div className='flex-container'>
            Country Gold Medal Counter
            <div className="flex-child flex-container" style={{"margin-left": "1em"}}>
              Totals:
              <div>
                {<Icon path={mdiMedal}
                  title={this.getTotalMedalCount('gold')+" total gold medals"}
                  size={1}
                  color='gold'
                />}
                  {this.getTotalMedalCount('gold')}
              </div>
              <div className="flex-child flex-container">
                {<Icon path={mdiMedal}
                  title={this.getTotalMedalCount('silver')+" total silver medals"}
                  size={1}
                  color='silver'
                />}
                {this.getTotalMedalCount('silver')}
              </div>
              <div className="flex-child flex-container">
                {<Icon path={mdiMedal}
                  title={this.getTotalMedalCount('bronze')+" total bronze medals"}
                  size={1}
                  color='brown'
                />}
                {this.getTotalMedalCount('bronze')}
              </div>
            </div>
          </div>
        </header>
        <body>
        <Grid container>
          {this.state.countries.map(country =>
            <Paper elevation={1} key={country.id} style={{"min-width": "250px", "margin": "1em"}}>
              <Country
                key={country.id}
                country={country}
                onMedalUpdate={this.handleMedalUpdate}
              />
            </Paper>
          )}
        </Grid>
        </body>
      </div>
    )
  }
}

export default App;
