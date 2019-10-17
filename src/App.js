import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Sidebar></Sidebar>
        <Container fluid className="p-0">
          <Home></Home>
          <About></About>
          <Experience></Experience>
        </Container>
      </div>
    );
  }
}

export default App;
