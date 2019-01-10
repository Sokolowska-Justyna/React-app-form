import React from 'react';
import { TextInput } from '../TextInput';
import { shallow } from 'enzyme';

describe('TextInput', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TextInput 
      placeholder="placeholder"
      name="text-input-name"
      onChange={jest.fn()}
    />);
  
    expect(wrapper).toMatchSnapshot();
  });
});