import React, { Component } from 'react';
import './App.css';
import {getWeatherDataByCity} from './Client.js';

class App extends Component {
  state = {
    weatherData: ''
  }
  componentDidMount() {
    getWeatherDataByCity('san diego', (result) => {
      this.setState({
        weatherData: JSON.stringify(result)
      });
      console.log(result);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yahoo! Weather App</h1>
        </header>
        <p>{this.state.weatherData}</p>
      </div>
    );
  }
}

export default App;
