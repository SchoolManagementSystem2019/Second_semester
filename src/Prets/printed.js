import React, { Component } from "react";
import "../content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from 'react-hover-image';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Printedprets extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Printed Prets</h1>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#details.js" > 
                <HoverImage id="abc"  src={process.env.PUBLIC_URL + "../Images/prets/printed/black_shade_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/printed/black_shade_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">3 piece formal Cotton Satin...</p>
                    <p className="card-text price">PKR  5,635</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href = "#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/printed/blue_front.jpg"} alt="black" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/printed/blue_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Printed Embroidered Cotton...</p>
                    <p className="card-text price">PKR  3,883</p>
                  </div>
              </div>
            </div>
          </div>

        

          <div className="row">
            <div className="col-sm">
              <a href="#">
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/printed/cambric_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/printed/cambric_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Printed Cambric Kurti...</p>
                    <p className="card-text price">PKR 2,250</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" > 
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/printed/colorful_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/printed/colorful_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Printed Cambric Kurti...</p>
                    <p className="card-text price">PKR  2,500</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/printed/cottoon_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/printed/cottoon_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">printed Cotton Kurti....</p>
                    <p className="card-text price">PKR  1,729</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/printed/rib_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/printed/rib_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Printed Cotton Rib...</p>
                    <p className="card-text price">PKR  6,500</p>
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

export default Printedprets;
