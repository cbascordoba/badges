import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar';

//los componentes son clases
class Badge extends React.Component {
    //el metodo render define cual va a ser el resultado a mostrar en pantalla
    render() {
      
      
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="logo"></img>
            </div>

            <div className="Badge__section-name">
            <Gravatar className="Badge__avatar" email={this.props.email} alt="Avatar" />
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