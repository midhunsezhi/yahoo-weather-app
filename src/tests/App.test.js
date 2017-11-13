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

});