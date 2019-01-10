import React from 'react';
import { Selector } from '../Selector';
import { shallow } from 'enzyme';

describe('Selector', () => {
  it('should match snapshot', () => {
    const options = ['option1', 'option2'];
    const wrapper = shallow(<Selector 
      name="selector-name"
      currentValue={'option1'}
      values={options}
      onChange={jest.fn()}
    />);
  
    expect(wrapper).toMatchSnapshot();
  });
});