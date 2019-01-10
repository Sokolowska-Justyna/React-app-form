import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const cities = ['city1', 'city2'];
  const voivodeships = ['voivode1', 'voivode2'];
  ReactDOM.render(<App cities={cities} voivodeships={voivodeships} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
