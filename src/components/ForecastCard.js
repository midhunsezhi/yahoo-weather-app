import React, { Component } from 'react';

class ForecastCard extends Component {

    render(){
        return (
            <div className='col col-lg-5 col-md-10 col-sm-10 col-10 mx-auto'>
                <div class="card forecast-card">
                    <div class="card-header">
                        {this.props.forecast.date}
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{this.props.forecast.description}</h4>
                        <p class="card-text text-muted">High: {this.props.forecast.high}</p>
                        <p class="card-text text-muted">Low: {this.props.forecast.low}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForecastCard;