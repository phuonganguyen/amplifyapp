import React,{Component} from 'react';
import profilePic from '../../images/profile_pic.jpeg';
import {Navbar, Nav} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './sidebar.scss';

export default class Sidebar extends Component{
    render(){
        return(
            <Navbar expand="lg" className="sidebar" variant="dark" fixed="top">
                <Navbar.Brand href="#home">
                    <Image src={profilePic} fluid roundedCircle className="img-profile" />
                    <h1 className="name">Phuong Nguyen</h1>
                    <h2 className="title">Software Engineer</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="#about" data-nav-section="about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#experience" data-nav-section="experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#">My CV</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#">Interests</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <div className="contact">
                    <div><a href="#">Get in touch</a></div>
                    <div className="social-icons">
                        <a rel="me" href="mailto:phuong.nguyenanh06@gmail.com" className="button button-icon" title="mail: phuong.nguyenanh06@gmail.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a rel="me" href="https://www.linkedin.com/in/phuong-nguyen-5b214862/" className="button button-icon">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a rel="me" href="https://github.com/phuonganguyen" className="button button-icon">
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a rel="me" href="#" className="button button-icon">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a rel="me" href="#" className="button button-icon">
                            <i className="fa fa-twitter-square"></i>
                        </a>
                    </div>
                </div>
            </Navbar>
        );
    }
}