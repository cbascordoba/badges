import React from 'react';

import confLogo from '../images/badge-header.svg'

//los componentes son clases
class Badge extends React.Component {
    //el metodo render define cual va a ser el resultado a mostrar en pantalla
    render() {
        return <div>
            <div>
                <img src={confLogo} alt="logo"></img>
            </div>

            <div>
                <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                <h1>Sebastian <br/>Cordoba</h1>
            </div>
            <div>
                <p>Frontend Engineer</p>
                <p>@cbascordoba</p>
            </div>
            <div>#react</div>
        </div>;
    
    }

}


//tenemos que asegurar exportar este componente
export default Badge;