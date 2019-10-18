import React,{Component} from 'react';
import cSharp from '../images/csharp.png';
import html from '../images/html.png';
import css from '../images/css.png';
import sass from '../images/sass.png';
import bootstrap from '../images/bootstrap.png';
import js from '../images/js.png';
import jquery from '../images/jquery.png';
import ts from '../images/ts.png';
import angular from '../images/angular.png';
import reactjs from '../images/reactjs.png';
import aspnet from '../images/aspnet.png';
import netcore from '../images/netcore.png';
import wordpress from '../images/wordpress.png';
import drupal from '../images/drupal.png';
import entityframework from '../images/entityframework.png';
import nhibernate from '../images/nhibernate.gif';
import sqlserver from '../images/sqlserver.svg';
import oracle from '../images/oracle.jpg';

class Skills extends Component{
    render(){
        return(
            <section id="skills" className="p-3 p-lg-5 d-flex align-items-center">
                <div className="w-100">
                    <h2 className="mb-5 title">Skills</h2>
                    <h3 className="subheading mb-3">Languages</h3>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <img src={html} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={css} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={js} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={sass} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={jquery} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={bootstrap} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={ts} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={cSharp} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={sqlserver} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={oracle} alt=""/>
                        </li>
                    </ul>
                    <h3 className="subheading mb-3">Frameworks</h3>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <img src={angular} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={reactjs} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={aspnet} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={netcore} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={wordpress} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={drupal} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={entityframework} alt=""/>
                        </li>
                        <li className="list-inline-item">
                            <img src={nhibernate} alt=""/>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;