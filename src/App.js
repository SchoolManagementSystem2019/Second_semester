import React,{Component} from 'react';
import Nav from './navbar';
// import Footerpage from './footer';
// import {BrowserRouter ,Route} from 'react-router-dom';
// import Cart from './cart'
import ScrollUpButton from "react-scroll-up-button";

class App extends Component{
  render(){
    return(
      <div>
        <Nav />
        <ScrollUpButton />
      </div>
    );
  }
}
export default App;