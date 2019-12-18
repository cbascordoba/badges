import React from 'react';

class BadgeForm extends React.Component {
    state= {
        jobTitle: 'Designer'
    };
    handleChange= e =>{
        // console.log({
        //     name: e.target.name,
        //     value:e.target.value});

        //vamos a gurdar la informacion en estado 
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick= e =>{
        console.log("Button was clicked");
    }
    handleSubmit= e =>{
        e.preventDefault();
        console.log("form was clicked");
        console.log(this.state);
    }
    render(){
        return (
            <div>

            <h1>New Attendant</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email} />
                </div>
                <div className="form-group">
                    <label>jobTitle</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle} />
                </div>
                <div className="form-group">
                    <label>Github</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="github" value={this.state.github} />
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Save</button>
            </form>
            </div>
        );
    }
}

export default BadgeForm;