import React, { Component } from "react";
import "../content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from 'react-hover-image';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Newp extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>New Arrivals</h1>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#details.js" > 
                <HoverImage id="abc"  src={process.env.PUBLIC_URL + "../Images/prets/newarrivals/cambrictrouser_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/newarrivals/cambrictrouser_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Dyed Denim Kurti ...</p>
                    <p className="card-text price">PKR  2,850</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href = "#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/newarrivals/check_front.jpg"} alt="black" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/newarrivals/check_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Dyed Embroidered Cambric...</p>
                    <p className="card-text price">PKR  3,250</p>
                  </div>
              </div>
            </div>
          </div>

        

          <div className="row">
            <div className="col-sm">
              <a href="#">
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/newarrivals/jacquard_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/newarrivals/jacquard_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Dyed Embroidered Cambric...</p>
                    <p className="card-text price">PKR  3, 000</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" > 
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/newarrivals/plaintrouser_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/newarrivals/plaintrouser_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Printed Cambric Kurti</p>
                    <p className="card-text price">PKR  2,390</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/newarrivals/printed_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/newarrivals/printed_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Dyed Embroidered Jacquard.....</p>
                    <p className="card-text price">PKR  3,150</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/newarrivals/cotton_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/newarrivals/cotton_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Printed Cotton Satin Kurti</p>
                    <p className="card-text price">PKR  3000</p>
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

export default Newp;
