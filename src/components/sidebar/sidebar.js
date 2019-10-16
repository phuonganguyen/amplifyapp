import React,{Component} from 'react';
import logo from '../../logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import './sidebar.scss';
import Image from 'react-bootstrap/Image'

export default class Sidebar extends Component{
    render(){
        return(
            <Navbar expand="lg" className="sidebar">
                <Navbar.Brand href="#root">
                    <Image src={logo} fluid roundedCircle className="img-profile" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/about" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Skills</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}