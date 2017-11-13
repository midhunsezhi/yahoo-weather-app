import React, { Component } from 'react';
import './../App.css';
import {getWeatherDataByCity, getDefaultData} from './../Client.js';
import SelectCity from './SelectCity.js';
import TodayCard from './TodayCard.js';
import ForecastList from './ForecastList.js';

class App extends Component {
  state = {
    today: '',
    forecast:[],
    selectedCity: ''
  }
  componentDidMount() {
    getDefaultData(result => {
      this.setState({
        ...result
      });
    });
  }

  handleChange = (city) => {
    getWeatherDataByCity(city, result => {
      this.setState({
        ...result,
      });
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yahoo! Weather App</h1>
        </header>
        <SelectCity 
          selectedCity={this.state.selectedCity}
          onCityChange={this.handleChange}
        />
        <TodayCard 
          today={this.state.today}
        />
        <ForecastList 
          forecastList={this.state.forecast}
        />
      </div>
    );
  }
}

export default App;
