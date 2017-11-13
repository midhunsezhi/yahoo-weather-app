import React from 'react';
import {shallow} from 'enzyme';
import App from './../components/App';
import Client from './../Client';

jest.mock('../Client');

describe('App', () => {
    let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  afterEach(() => {
    Client.getWeatherDataByCity.mockClear();
  })

  it('should have a title', () => {
    expect(
      wrapper.find('h1.App-title').length
    ).toBe(1)
  });

  it('should render SelectCity Component', () => {
    expect(
      wrapper.find('SelectCity').length
    ).toBe(1)
  });

  it('should render TodayCard Component', () => {
    expect(
      wrapper.find('TodayCard').length
    ).toBe(1)
  });

  it('should render ForecastList Component', () => {
    expect(
      wrapper.find('ForecastList').length
    ).toBe(1)
  });

  describe('handleChange function is invoked', () => {
    const response = {
      "today": {
        'test': 'test',
      },
      "forecast": [],
      "selectedCity": "SFO"
    };

    beforeEach(() => {
      wrapper.instance().handleChange('SFO');
      const invocationArgs = Client.getWeatherDataByCity.mock.calls[0];
      const cb = invocationArgs[1];
      cb(response);
      wrapper.update();
    });

    it('should update its state', () => {
      expect(wrapper.state()).toEqual(response);
    });

    it('should render TodayCard Component with new data', () => {
      expect(
        wrapper.find('TodayCard').props().today
      ).toEqual(response.today);
    })
  });

});