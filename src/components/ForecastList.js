import React, { Component } from 'react';
import ForecastCard from './ForecastCard.js'

class ForecastList extends Component {
    render(){
        const forecastCards = this.props.forecastList.map(forecast => (
            <ForecastCard 
                key={forecast.date}
                forecast={forecast}
            />
        ));

        return (
            <div className='row'>
                {forecastCards}
            </div>
        )
    }
}

export default ForecastList;