import React from 'react';
import ReactDOM from 'react-dom';
import voivodeships from './data/voivodeships.json';
import cities from './data/cities.json';
import './index.scss';
import App from './App';

ReactDOM.render(<App voivodeships={voivodeships} cities={cities} />, document.getElementById('root'));
