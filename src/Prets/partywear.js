import React, { Component } from "react";
import "../content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from 'react-hover-image';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Partyprets extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Partywear Prets</h1>
          <hr />
          <div className="row">
            <div className="col-sm">
              <a href="#details.js" > 
                <HoverImage id="abc"  src={process.env.PUBLIC_URL + "../Images/prets/partywear/2piece_front.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/partywear/2piece_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">2 piece formal printed cotton...</p>
                    <p className="card-text price">PKR  4,200</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href = "#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/partywear/navyblue_front.jpg"} alt="black" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/partywear/navyblue_back.jpg"} />
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
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/partywear/organza_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/partywear/organza_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Embroidered Organza Kurti...</p>
                    <p className="card-text price">PKR 4,690</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" > 
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/partywear/peach_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/partywear/peach_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">3 piece Formal Organza Suit</p>
                    <p className="card-text price">PKR  11,500</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/partywear/silk_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/partywear/silk_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                  </BrowserRouter>
              </a>
              <div class="card">
                  <div class="card-body">
                    <p class="card-text">Formal Silk Kurti....</p>
                    <p className="card-text price">PKR  3,913</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/prets/partywear/skyblue_shade_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/prets/partywear/skyblue_shade_back.jpg"} />
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
                    <p className="card-text price">PKR  3,388</p>
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

export default Partyprets;
