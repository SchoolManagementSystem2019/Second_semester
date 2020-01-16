import React, { Component } from "react";
import ".././content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from "react-hover-image";
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Printedu extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Unstitched</h1>
          <hr />
          <h3>Printed</h3>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#details.js" > 
                <img style={{width:"80%"}} className="img-responsive" id="abc"  src={process.env.PUBLIC_URL + "../Images/unstitched/printed/bright_color.jpg"} alt="red"  />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Suit with Embroided Shirt...</p>
                    <p className="card-text price">PKR  10,000</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href = "#" >
                <img style={{width:"80%"}} className="img-responsive" src={process.env.PUBLIC_URL + "../Images/unstitched/printed/printed_dupatta.jpg"} alt="black"  />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Suit with Printed Satin Silk Dupa...</p>
                    <p className="card-text price">PKR  4,500</p>
                  </div>
              </div>
            </div>
          </div>

        

          <div className="row">
            <div className="col-sm">
              <a href="#">
                <img style={{width:"80%"}} className="img-responsive" src={process.env.PUBLIC_URL + "../Images/unstitched/printed/lemon.jpg"} alt="ss"  />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Suit with Embroided Kameez...</p>
                    <p className="card-text price">PKR  8, 500</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" > 
              <HoverImage style={{width:"80%"}} className="img-responsive" id="abc"  src={process.env.PUBLIC_URL + "../Images/unstitched/printed/navy_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "../Images/unstitched/printed/navy_back.jpg"}/>
              <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Embroidered Suit with Dupatta</p>
                    <p className="card-text price">PKR  5, 500</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-sm">
              <a href="#" >
              <HoverImage style={{width:"80%"}} className="img-responsive" id="abc"  src={process.env.PUBLIC_URL + "../Images/unstitched/printed/printedgala_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "../Images/unstitched/printed/printedgala_back.jpg"} onClick={this.clickedhandle} />
              <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Suit with Jacquard Dupatt...</p>
                    <p className="card-text price">PKR  4,500</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <img style={{width:"80%"}} className="img-responsive" src={process.env.PUBLIC_URL + "../Images/unstitched/printed/navy.jpg"} alt="ss"  />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Beautifully Embroided Shades...</p>
                    <p className="card-text price">PKR  7,750</p>
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

export default Printedu;
