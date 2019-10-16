import React,{Component} from 'react';
import logo from '../logo.svg';
import {Nav, Navbar} from 'react-bootstrap';

export default class Sidebar extends Component{
    render(){
        return(
            <Navbar bg="dark">
                <Navbar.Brand>
                    <img src={logo} alt="logo" width="50" height="50"/>
                </Navbar.Brand>
            </Navbar>
        );
    }
}