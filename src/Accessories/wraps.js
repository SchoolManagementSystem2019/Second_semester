import React, { Component } from "react";
import ".././content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from "react-hover-image";
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Wraps extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Wraps</h1>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#" >
                <HoverImage id="abc"  src={process.env.PUBLIC_URL + "Images/wraps/black_white_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "Images/wraps/black_white_back.jpg"} onClick={this.clickedhandle} />
                <BrowserRouter>
                  <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                  <Switch>
                      <Route path="../cart" component={Cart} />
                  </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Polyester Scarf</p>
                    <p className="card-text price">PKR  1,400</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href = "#" >
                <HoverImage src={process.env.PUBLIC_URL + "Images/wraps/brown_front.jpg"} alt="black" hoverSrc={process.env.PUBLIC_URL + "Images/wraps/brown_back.jpg"} />
                <BrowserRouter>
                  <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                  <Switch>
                      <Route path="../cart" component={Cart} />
                  </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Polyester Scarf</p>
                    <p className="card-text price">PKR  1,300</p>
                  </div>
              </div>
            </div>
          </div>

        

          <div className="row">
            <div className="col-sm">
              <a href="#">
                <HoverImage src={process.env.PUBLIC_URL + "Images/wraps/chiffondupatta_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/wraps/chiffondupatta_back.jpg"} />
                <BrowserRouter>
                  <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                  <Switch>
                      <Route path="../cart" component={Cart} />
                  </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Polyester Scarf</p>
                    <p className="card-text price">PKR  2,000</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" > 
                <HoverImage src={process.env.PUBLIC_URL + "Images/wraps/printedchiffondupatta_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/wraps/printedchiffondupatta_back.jpg"} />
                <BrowserRouter>
                  <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                  <Switch>
                      <Route path="../cart" component={Cart} />
                  </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Chiffon Dupatta</p>
                    <p className="card-text price">PKR  1,990</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "Images/wraps/woolen_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/wraps/woolen_back.jpg"} />
                <BrowserRouter>
                  <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                  <Switch>
                      <Route path="../cart" component={Cart} />
                  </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Woolen Viscose Shawl</p>
                    <p className="card-text price">PKR  3,500</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "Images/wraps/yellow_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/wraps/yellow_back.jpg"} />
                <BrowserRouter>
                  <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                  <Switch>
                      <Route path="../cart" component={Cart} />
                  </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Polyester Scarf</p>
                    <p className="card-text price">PKR  1,050</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
              <div className="col-xl">
                  <h6 style={{color:"white",textAlign:"center"}}>Copyright &copy; and Reserved &reg; by @Clothing Brand</h6>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wraps;
