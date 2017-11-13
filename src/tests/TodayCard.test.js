import React from 'react';
import {shallow} from 'enzyme';
import TodayCard from './../components/TodayCard';


describe('TodayCard Component', () => {
  let wrapper;
    
  it('should not render anything when props are not valid', () => {
    wrapper = shallow(
      <TodayCard
        today=''
      />
    );
    expect(
      wrapper.find('.card').length
    ).toBe(0)
  });

  describe('Today card with valid props', () => {
    const today = {
      description: 'Cloudy',
      high: 110,
      low: 20,
      temp: 71,
      sunrise: '6.30 am',
      sunset: '7.00 pm',
      date: 'Sunday, November 12th 2017'
    };
    beforeEach(() => {
      wrapper = shallow(
        <TodayCard
          today={today}
        />
      );
    });

    it('should render a card', () => {
      expect(
        wrapper.find('.card').length
      ).toBe(1)
    });

    it('should show current temperature', () => {
      const temperatureElement = wrapper.find('h1').first();
      expect(
        temperatureElement.text()
      ).toBe('71 °F');
    });

    //specs to check other data elemnets like, description, date etc. here
  });
});