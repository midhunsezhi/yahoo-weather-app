import React, { Component } from 'react';

class ForecastCard extends Component {

    render(){
        return (
            <div className='col col-lg-5 col-md-10 col-sm-10 col-10 mx-auto'>
                <div className="card forecast-card">
                    <div className="card-header">
                        {this.props.forecast.date}
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.forecast.description}</h4>
                        <p className="card-text text-muted">High: {this.props.forecast.high}</p>
                        <p className="card-text text-muted">Low: {this.props.forecast.low}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForecastCard;