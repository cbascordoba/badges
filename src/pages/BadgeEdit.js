import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm.js';
import PageLoading from '../components/PageLoading.js';

import Badge from '../components/Badge';
import api from '../api';

class BadgeEdit extends React.Component {

    //inicializamos el estado en form 
    state = {
        loading:true,
        error:null,

        form:{

        firstName: '',
        lastName:'',
        jobTitle:'',
        github:''

    } };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({loading: true,error:null});
        try {
            const data =  await api.badges.read(
                this.props.match.params.badgeId
            )
            
            this.setState({loading:false, form:data});
        } catch (error) {
            this.setState({loading:false, error:error});
        }
    };

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
        this.setState({ loading:true, error:null});
        try {
            //pasamos el id y la informacion del form
            await api.badges.update( this.props.match.params.badgeId,this.state.form);
            this.setState({ loading:false});
            this.props.history.push('/badges');

        } catch (error) {
            this.setState({ loading:false, error:error});
        }
    }

    render(){

        if(this.state.loading){
            return <PageLoading />
        }
        return (
         <React.Fragment>
    
             <div className="BadgeEdit__hero">
                 <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"></img>
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
                     <h1>Edit Attendant</h1>
                        <BadgeForm 
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}
                        error={this.state.error} />
                     </div>
                 </div>
             </div>
         </React.Fragment>
        )
    }
}

export default BadgeEdit;