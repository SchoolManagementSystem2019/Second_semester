import React, { Component } from "react";
import ".././content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Newu extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Ununstitched</h1>
          <hr />
          <h3>New Arrivals</h3>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#details.js" > 
                <img id="abc"  src={process.env.PUBLIC_URL + "../Images/unstitched/newarrivals/blue.jpg"} alt="red"  />
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
                <img src={process.env.PUBLIC_URL + "../Images/unstitched/newarrivals/gray.jpg"} alt="black"  />
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
                <img src={process.env.PUBLIC_URL + "../Images/unstitched/newarrivals/multicolors.jpg"} alt="ss"  />
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
                <img src={process.env.PUBLIC_URL + "../Images/unstitched/newarrivals/creamblack.jpg"} alt="ss"  />
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
                <img src={process.env.PUBLIC_URL + "../Images/unstitched/newarrivals/peach.jpg"} alt="ss"  />
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
                <img src={process.env.PUBLIC_URL + "../Images/unstitched/newarrivals/greenshade.jpg"} alt="ss"  />
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

export default Newu;
