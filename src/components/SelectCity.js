import React, { Component } from 'react';
import {cities} from './../Constants.js';

class SelectCity extends Component {
    state = {
        cities: [],
        selectedCity: 'SAN'
    }
    
    render(){
        const options = cities.map(city => (
            <option 
                value={city.name}
                key={city.key}
                defaultChecked={!!city.isDefault}
            >
                {city.name}
            </option>
        ));
        return (
            <div className='row'>
                <div className='col col-md-4 col-sm-8 col-8 mx-auto'>
                    <select className='form-control'>
                        {options}
                    </select>
                </div>
            </div>
        )
    }
}

export default SelectCity;