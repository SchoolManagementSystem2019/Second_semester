import React, { Component } from "react";
import ".././content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from "react-hover-image";
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

 class New extends Component{
     render(){
         return(
            <div className="container-fluid">
            <div className="container">
              <h1>Stitched</h1>
              <hr />
              <h3>New Arrivals</h3>
              <hr />

          <div className="row">
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/black_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/black_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Woven Shirt</p>
                    <p className="card-text price">PKR  3,000</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/greenshade_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/greenshade_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Woven Shirt</p>
                    <p className="card-text price">PKR  3,000</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/grey_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/grey_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Woven Shirt</p>
                    <p className="card-text price">PKR  3,000</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/maroon_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/maroon_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Foil Chiffon Dupatta</p>
                    <p className="card-text price">PKR  3,000</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/pink_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/pink_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Woven Shirt</p>
                    <p className="card-text price">PKR  3,000</p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <a href="#" >
                <HoverImage src={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/printed_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "../Images/Stitched/newarrivals/printed_back.jpg"} />
                <BrowserRouter>
                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                    <Switch>
                        <Route path="../cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
              </a>
              <div className="card">
                  <div className="card-body">
                    <p className="card-text">Printed Woven Dupatta</p>
                    <p className="card-text price">PKR  3,000</p>
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
         )
     }
 }
 export default New;