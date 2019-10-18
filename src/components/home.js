import React,{Component} from 'react';

export default class Home extends Component{
    render(){
        return(
            <section id="home" className="section-home p-3 p-lg-5 d-flex align-items-center">
                <div className="w-100">
                    <h3>Hi, my name is</h3>
                    <h1>Phuong Nguyen.</h1>
                    <h2>I love building things for web.</h2>
                    <div className="home-buttons">
                        <a rel="me" href="#contact" className="btn-contact">Contact Me</a>
                    </div>
                </div>
            </section>
        );
    }
}