// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//el que es el elemento html y el donde es el container
ReactDOM.render(< Badge />, container);
