import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm.js';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';


class BadgeNew extends React.Component {

    //inicializamos el estado en form 
    state = { form:{

        firstName: '',
        lastName:'',
        jobTitle:'',
        github:''

    } };

    handleChange = e =>{
  //la segunda forma es descomponer
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
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
                        <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} github={this.state.form.github} jobTitle={this.state.form.jobTitle} />
                     </div>
                     <div className="col-6">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                     </div>
                 </div>
             </div>
         </div>
        )
    }
}

export default BadgeNew;