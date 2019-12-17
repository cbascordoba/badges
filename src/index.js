// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';


const name = 'Sebastián'
// const element = React.createElement('a',{ href:'https://sebastiancordoba.co/'},`Ir a ${name}`);
//vs
// const element =  <h1>Hola, soy {name}</h1>
const element = (
    <div>
        <h1>Hola soy {name} 
            <p>Soy ingeniero front-end</p>
        </h1>
    </div>
);
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//el que es el elemento html y el donde es el container
ReactDOM.render(element, container);
