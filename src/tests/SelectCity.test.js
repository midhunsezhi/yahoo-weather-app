import React from 'react';
import {shallow, mount} from 'enzyme';
import SelectCity from './../components/SelectCity';
import {cities} from './../Constants.js';


describe('SelectCity Component', () => {
  let wrapper;
  let handleChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(
        <SelectCity
        selectedCity="NYC"
        onCityChange={handleChange}
      />
    );
  });

  afterEach(() => {
    handleChange.mockClear();
  });

  it('should have a select menu with 6 options', () => {
      expect(
        wrapper.find('select option').length
      ).toBe(6)
  });

  it('should have New York selected', () => {
    expect(wrapper.find('select').props().value).toBe("NYC");
  });

  describe('user changes the selected city', () => {
      beforeEach(() => {
        wrapper.find('select').simulate('change',{
            target: { value : 'SFO'}
        });
        it('should call handleChange with `value`', () => {
            const invocationArgs = handleChange.mock.calls[0];
            expect(
              invocationArgs[0]
            ).toEqual('SFO');
          });
      });
  });

});