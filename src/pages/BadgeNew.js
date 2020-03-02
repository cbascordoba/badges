import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm.js';
import PageLoading from '../components/PageLoading.js';

import Badge from '../components/Badge';
import api from '../api';

class BadgeNew extends React.Component {

    //inicializamos el estado en form 
    state = {
        loading:false,
        error:null,

        form:{

        firstName: '',
        lastName:'',
        jobTitle:'',
        github:''

    } };

    handleChange =  e =>{
  //la segunda forma es descomponer
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading:true,error:null})
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading:false})
        } catch (error) {
            this.setState({ loading:false,error:error})
        }
    }

    render(){

        if(this.state.loading){
            return <PageLoading />
        }
        return (
         <React.Fragment>
    
             <div className="BadgeNew__hero">
                 <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"></img>
             </div>
             <div className="container">
                 <div className="row">
                     <div  className="col-6">
                        <Badge firstName={this.state.form.firstName || 'Nombre'} 
                        lastName={this.state.form.lastName || 'Apellido'} 
                        email={this.state.form.email || 'EMAIL'} 
                        github={this.state.form.github || 'Github'} 
                        jobTitle={this.state.form.jobTitle || 'Cargo'} />
                     </div>
                     <div className="col-6">
                        <BadgeForm 
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form} />
                     </div>
                 </div>
             </div>
         </React.Fragment>
        )
    }
}

export default BadgeNew;