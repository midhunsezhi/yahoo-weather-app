import React, { Component } from 'react';

class TodayCard extends Component {
    render(){
        if(this.props.today) {
            return (
                <div className='col col-xs-10 mx-auto'>
                    <div className="card today-card">
                        <div className="card-header">
                            {this.props.today.date}
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.today.description}</h4>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <p className="card-text text-muted">High: {this.props.today.high}</p>
                                    <p className="card-text text-muted">Low: {this.props.today.low}</p>
                                </div>
                                <div className='col-sm-4'>
                                    <h1>{this.props.today.temp} <small>&deg;F</small></h1>
                                </div>
                                <div className='col-sm-4'>
                                    <p className="card-text text-muted">Sunrise: {this.props.today.sunrise}</p>
                                    <p className="card-text text-muted">Sunset: {this.props.today.sunset}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return '';
        }  
    }
}

export default TodayCard;
