import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./home";
import Embroided from "./Stitched/embroided";
import Printed from "./Stitched/printed";
import Solid from './Stitched/solid';
import New from './Stitched/newarrivals';
import Embroidedu from "./Unstitched/embroided";
import Solidu from "./Unstitched/solid";
import Printedu from "./Unstitched/printed";
import Newu from "./Unstitched/newarrivals";
import Casualprets from './Prets/casual';
import  Embroidedprets from './Prets/embroided';
import Partyprets from './Prets/partywear';
import Printedprets from './Prets/printed';
import Newp from './Prets/newarrivals';
import Footwear from './Accessories/footwear';
import Handbags  from './Accessories/handbags';
import Wraps from './Accessories/wraps';
import Jewellery from "./Accessories/jewellery";
import Accnew from './Accessories/accnewarrivals';

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <img
              src={process.env.PUBLIC_URL + "Images/navbar/logo.jpg"}
              alt="logo"
            />
            <Link to="/" className="navbar-brand">
              Clothing Brand
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    New Arrivals
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/Stitched/newarrivals" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/women.jpg"}
                    alt="logo"/> Stitched </Link>
                    <Link to="/Unstitched/newarrivals" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/U_printed.jpg"}
                    alt="logo"/> Unstitched </Link>
                    <Link to="/Prets/newarrivals" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/casual.jpg"}
                    alt="logo" />Prets </Link>
                    <Link to="/accnewarrivals" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/bag.jpg"}
                    alt="logo"/> Accessories </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                    Stitched
                  </a>
                  <div className="dropdown-menu">
                    
                    <Link to="/Stitched/solid" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/S_solid.jpg"}
                    alt="logo"/> Solid</Link>
                    <Link to="/Stitched/printed" className="dropdown-item"><img src={process.env.PUBLIC_URL + "Images/navbar/S_printed.jpg"}
                    alt="logo" /> Printed</Link>
                  
                      <Link to="/Stitched/embroided" className="dropdown-item"> <img src={process.env.PUBLIC_URL +"Images/navbar/S_embroidered.jpg"}
                      alt="logo" /> Embroidered </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> 
                  Unstiched </a> 
                 
                  <div className="dropdown-menu">
                    
                      <Link to="/Unstitched/solid" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/U_solid.jpg"} />
                      Solid </Link>
                  
                      <Link to="/Unstitched/printed" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/U_printed.jpg"}
                      alt="logo"/> Printed </Link>
                   
                      <Link to="/Unstitched/embroided" className="dropdown-item"> <img src={process.env.PUBLIC_URL +"Images/navbar/U_embroidered.jpg"}
                      alt="logo" /> Embroidered </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                  Prets</a>
                  <div className="dropdown-menu">
                  
                      <Link to="/Prets/casual" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/casual.jpg"}
                      alt="logo"/> Casual </Link>
                      <Link to="/Prets/embroided" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/formal.jpg"}
                      alt="logo"/>Embroided </Link>
                      <Link to="/Prets/printed" className="dropdown-item"><img src={process.env.PUBLIC_URL + "Images/navbar/kurti.jpg"}
                      alt="logo"/> Printed </Link>
                      <Link to="/Prets/partywear" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/casual.jpg"}
                      alt="logo" /> Party Wear </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Accessories
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/footwear" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/sandal.jpg"}
                    alt="logo"/> Footwear </Link>
                    <Link to="/handbags" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/bag.jpg"}
                      alt="logo"/> Handbags </Link>
                      <Link to="/wraps" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/shawls.jpg"}
                      alt="logo"/> Wraps </Link>
                    <Link to="/jewellery" className="dropdown-item"> <img src={process.env.PUBLIC_URL + "Images/navbar/jewel.jpg"}
                    alt="logo"/> Jewellery </Link>
                  </div>
                </li>

                <div className="navbar-nav ">
                  <div className="navbar-item row">
                    <a className="nav-link" href="#">
                      <div className="col-sm-4">
                        <li className="fas fa-shopping-cart" title="Add to Cart"></li>
                      </div>
                    </a>
                    <a className="nav-link" href="#">
                      <div className="col-sm-4">
                        <li className="fas fa-sign-in-alt" title="Sign In"></li>
                      </div>
                    </a>
                    <a className="nav-link" href="#">
                      <div className="col-sm-4">
                        <li className="fas fa-user-plus" title="Sign Up"></li>
                      </div>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/accnewarrivals" component={Accnew} />
            <Route path="/Stitched/embroided" component={Embroided} />
            <Route path="/Stitched/printed" component={Printed} />
            <Route path="/Stitched/solid" component={Solid} />
            <Route path="/Stitched/newarrivals" component={New} />
            <Route path="/Unstitched/embroided" component={Embroidedu} />
            <Route path="/Unstitched/solid" component={Solidu} />
            <Route path="/Unstitched/printed" component={Printedu} />
            <Route path="/Unstitched/newarrivals" component={Newu} />
            <Route path="/Prets/casual" component={Casualprets} />
            <Route path="/Prets/embroided" component={Embroidedprets} />
            <Route path="/Prets/partywear" component={Partyprets} />
            <Route path="/Prets/printed" component={Printedprets} />
            <Route path="/Prets/newarrivals" component={Newp} />
            <Route path="/footwear" component={Footwear} />
            <Route path="/handbags" component={Handbags} />
            <Route path="/wraps" component={Wraps} />
            <Route path="/jewellery" component={Jewellery} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
