// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//el que es el elemento html y el donde es el container

//props son argumentos a una función
//para este caso van a ser los atributos de nuestro componente
ReactDOM.render(< Badge
     firstName="Sebastián"
     lastName="Córdoba"
     jobTitle="Frontend Engineer"
     github="cbascordoba"/>,
      container);
