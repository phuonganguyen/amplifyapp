import React, {Component} from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Sidebar></Sidebar>
        <div className="content-page"></div>
      </div>
      
    );
  }
}

export default App;
