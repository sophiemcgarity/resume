import React, { Component } from 'react';
import logo from '../Assets/Image/logo.png'
import Button from 'react-bootstrap/Button'
import profilePhoto from '../Assets/Image/mcgarity_s.jpg'

class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navlinks">
                    <div className="leftnav">
                        <li className="logo"><img src={logo} alt="logo"></img></li>
                        <div className="leftnavlinks">
                            <li><a href="#profile">Overview</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#social">Social</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </div>
                    </div>
                    <div className="rightnav">
                        <li><Button><a href="https://www.linkedin.com/in/sophie-mcgarity-0866ba181/" target="_blank">Connect</a></Button></li>
                        <li><img className="avatar-img" src={profilePhoto} alt="profile"></img></li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navigation;