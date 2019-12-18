import React from 'react';
import "./styles/Navbar.css";
import logo from '../images/logo.svg'

class Navbar extends React.Component {
    render(){
        return <div className="Navbar">
            <div className="container-fluid">

            <a className="Navbar__brand" href="/" >
                <img className="Navbar__brand-logo" src={logo} alt="Logo"></img>
                <span className="font-weight-light">Conference </span>
                <span className="font-weight-bold">Badge</span>
            </a>
            </div>
        </div>
    }
}

export default Navbar;