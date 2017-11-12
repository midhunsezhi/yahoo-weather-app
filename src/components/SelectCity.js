import React, { Component } from 'react';
import {cities} from './../Constants.js'

class SelectCity extends Component {
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
            <div>
                <select>
                    {options}
                </select>
            </div>
        )
    }
}

export default SelectCity;