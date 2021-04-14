import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './header.scss'
const Header = () =>{
    return (
        <div className="header">
            <div id="navbar">
                <div id="logo">
                    <span className="spn1">
                        <span className="spn1.1">w</span>
                        <span className="spn1.2">e</span>
                    </span>
                    <span className="spn2">R</span>
                    <span className="spn3">d</span>
                    <span className="spn4">e</span>
                    <span className="spn5">v</span>
                    <span className="spn6">s</span>
                </div>
                <div id="navmenu">
                    <NavLink to="/"><a className="home btn btn-default btn-lg active" href="#a1">HOME</a></NavLink>
                    <NavLink to="/about"><a className="about btn btn-default btn-lg disable" href="#a2">ABOUT</a></NavLink>
                    
                </div>
            </div>
        </div>
    )
}
export default Header;