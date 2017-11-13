import React, { Component } from 'react';
import {cities} from './../Constants.js';

class SelectCity extends Component {
    handleChange = (e) => {
        this.props.onCityChange(e.target.value)
    } 
    render(){
        if (this.props.selectedCity) {
            const options = cities.map(city => (
                <option 
                    value={city.key}
                    key={city.key}
                >
                    {city.name}
                </option>
            ));
            return (
                <div className='row'>
                    <div className='col col-md-4 col-sm-8 col-8 mx-auto'>
                        <select 
                            className='form-control'
                            value={this.props.selectedCity}
                            onChange={this.handleChange}
                        >
                            {options}
                        </select>
                    </div>
                </div>
            )
        } else {
            return '';
        }
    }
}

export default SelectCity;