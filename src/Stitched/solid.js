import React, { Component } from "react";
import ".././content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from "react-hover-image";
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Solid extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Stitched</h1>
          <hr />
          <h3>Solid</h3>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#" >
                <HoverImage id="abc"  src={process.env.PUBLIC_URL + "../Images/Stitched/solid/black_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/solid/black_back.jpg"} onClick={this.clickedhandle} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Embroidered Suit with Jacquard Woven ...</p>
                    <p className="card-text price">PKR  7,750</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href = "#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/solid/blue_front.jpg"} alt="black" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/solid/blue_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">2 Piece Embroidered Suit with Satin Silk Dupa...</p>
                    <p className="card-text price">PKR  10,000</p>
                  </div>
              </div>
            </div>
          </div>

        

          <div className="row">
            <div className="col-sm">
              <a href="#">
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/solid/cream_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/solid/cream_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Embroidered Suit with Chiffon Dupatta</p>
                    <p className="card-text price">PKR  8, 500</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" > 
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/solid/cotton_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/solid/cotton_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Embroidered Suit with Chiffon Dupatta</p>
                    <p className="card-text price">PKR  8, 500</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/solid/gray_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/solid/gray_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Embroidered Suit with Jacquard Dupatt...</p>
                    <p className="card-text price">PKR  8,750</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/solid/orange_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/solid/orange_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">3 Piece Embroidered Suit with Jacquard Dupatt...</p>
                    <p className="card-text price">PKR  8,750</p>
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

export default Solid;
