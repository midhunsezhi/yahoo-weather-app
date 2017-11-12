import React, { Component } from 'react';
import './../App.css';
import {getWeatherDataByCity} from './../Client.js';
import SelectCity from './SelectCity.js';
import TodayCard from './TodayCard.js';
import ForecastList from './ForecastList.js';

class App extends Component {
  state = {
    weatherData: ''
  }
  componentDidMount() {
    getWeatherDataByCity('san diego', (result) => {
      this.setState({
        ...result
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yahoo! Weather App</h1>
        </header>
        <SelectCity />
        <h2>{this.state.location}</h2>
        <TodayCard 
          today={this.state.today}
        />
        <ForecastList 
          forecast={this.state.forecast}
        />
      </div>
    );
  }
}

export default App;
