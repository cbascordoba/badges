import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'

//los componentes son clases
class Badge extends React.Component {
    //el metodo render define cual va a ser el resultado a mostrar en pantalla
    render() {
      
      
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="logo"></img>
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.github}</div>
            </div>
            <div className="Badge__footer">#react</div>
        </div>;
    
    }

}


//tenemos que asegurar exportar este componente
export default Badge;