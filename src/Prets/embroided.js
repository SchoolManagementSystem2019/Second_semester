import React, { Component } from "react";
import "../content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from 'react-hover-image';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Embroidedprets extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Embroided Prets</h1>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#details.js" > 
                <HoverImage id="abc"  src={process.env.PUBLIC_URL + "../Images/prets/embroided/black_copper_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/embroided/black_copper_back.jpg"} />
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
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/embroided/printed_front.jpg"} alt="black" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/embroided/printed_back.jpg"} />
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
                    <p className="card-text price">PKR  31,883</p>
                  </div>
              </div>
            </div>
          </div>

        

          <div className="row">
            <div className="col-sm">
              <a href="#">
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/embroided/orange_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/embroided/orange_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">3 piece Formal Embroidered...</p>
                    <p className="card-text price">PKR 8,500</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" > 
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/embroided/peach_dupatta_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/embroided/peach_dupatta_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">2 piece Formal Embroidered...</p>
                    <p className="card-text price">PKR  7,850</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/embroided/skyblue_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/embroided/skyblue_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Embroided Satin Kurti....</p>
                    <p className="card-text price">PKR  2,500</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/embroided/white_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/embroided/white_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Dyed Embroidered Dobby...</p>
                    <p className="card-text price">PKR  2,550</p>
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

export default Embroidedprets;
