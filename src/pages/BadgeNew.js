import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm.js';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';


class BadgeNew extends React.Component {
    render(){
        return (
         <div>
             {/* vamos a crear el componente NAVBAR */}
             <Navbar />
             <div className="BadgeNew__hero">
                 <img className="img-fluid" src={header} alt="Logo"></img>
             </div>
             <div className="container">
                 <div className="row">
                     <div  className="col-6">
                        <Badge firstName="Sebastián" lastName="Córdoba" github="cbascordoba" jobTitle="Frontend Engineer" />
                     </div>
                     <div className="col-6">
                        <BadgeForm />
                     </div>
                 </div>
             </div>
         </div>
        )
    }
}

export default BadgeNew;