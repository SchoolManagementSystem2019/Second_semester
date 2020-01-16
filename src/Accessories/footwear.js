import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Footwear extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="container">
            <h1 style={{textAlign:"center"}}>Footwear</h1>
            <hr />
            <h3>Casual Warm Sleepers</h3>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <div className="container">
                        <a href="#" > 
                            <img id="abc"  src={process.env.PUBLIC_URL + "../Images/footwear/casual_warm_sleepers/grey.jpg"} alt="red"  />
                            <BrowserRouter>
                                <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                <Switch>
                                    <Route path="../cart" component={Cart} />
                                </Switch>
                            </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">GREY COLOR CASUAL WARM SLIPPERS WN3007 </p>
                                <p className="card-text">PKR 1,200</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container"> 
                        <a href = "#" >
                            <img src={process.env.PUBLIC_URL + "../Images/footwear/casual_warm_sleepers/printed.jpg"} alt="black"  />
                            <BrowserRouter>
                                <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                <Switch>
                                    <Route path="../cart" component={Cart} />
                                </Switch>
                            </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">GREY COLOR CASUAL WARM SLIPPERS WN3002</p>
                                <p className="card-text ">PKR 1,200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="container">
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "../Images/footwear/casual_warm_sleepers/seagreen.jpg"} alt="ss"  style={{display:"inline-block"}} />
                            <BrowserRouter>
                                <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                <Switch>
                                    <Route path="../cart" component={Cart} />
                                </Switch>
                            </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"> SEAGREEN COLOR CASUAL WARM SLIPPERS WN3006</p>
                                <p className="card-text ">PKR 1,200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
            <h3 style={{padding:"2%"}}>Peeptoes</h3>
                <hr />
            <div className="row">
                
                <div className="col-md-6">
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "../Images/footwear/peeptoes/camel.jpg"} alt="ss"  />
                        <BrowserRouter>
                                <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                <Switch>
                                    <Route path="../cart" component={Cart} />
                                </Switch>
                            </BrowserRouter>
                    </a>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">CAMEL COLOR FORMAL PEEPTOS</p>
                            <p className="card-text ">PKR  2, 500</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <a href="#" >
                        <img src={process.env.PUBLIC_URL + "../Images/footwear/peeptoes/black.jpg"} alt="ss"  />
                        <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                    </a>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">BLACK COLOR FORMAL PEEPTOS</p>
                            <p className="card-text ">PKR 2,500</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <a href="#" >
                        <img src={process.env.PUBLIC_URL + "../Images/footwear/peeptoes/bronze.jpg"} alt="ss"  />
                        <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                    </a>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text"> BRONZE COLOR FORMAL PEEPTOS </p>
                            <p className="card-text ">PKR  2,500</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container">
                        <a href="#" > 
                            <img id="abc"  src={process.env.PUBLIC_URL + "../Images/footwear/peeptoes/maroon.jpg"} alt="red"  />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">MAROON COLOR FORMAL PEEPTOS </p>
                                <p className="card-text ">PKR  2,500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="container"> 
                        <a href = "#" >
                            <img src={process.env.PUBLIC_URL + "Images/footwear/peeptoes/navy.jpg"} alt="black"  />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">NAVY COLOR FORMAL PEEPTOS WINTER</p>
                                <p className="card-text ">PKR  2,200</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container">
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "Images/footwear/peeptoes/pink.jpg"} alt="ss"  style={{display:"inline-block"}} />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"> PINK COLOR FORMAL PEEPTOS</p>
                                <p className="card-text ">PKR 2,500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 style={{padding:"2%"}}>Pumps</h3>
            <hr />

            <div className="row">
                <div className="col-md-6">
                    <div className="container"> 
                        <a href = "#" >
                            <img src={process.env.PUBLIC_URL + "Images/footwear/pumps/beige.jpg"} alt="black"  />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">BEIGE COLOR CASUAL PUMPS</p>
                                <p className="card-text ">PKR  2,500</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container">
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "Images/footwear/pumps/black_fancy.jpg"} alt="ss"  style={{display:"inline-block"}} />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"> BLACK COLOR FANCY PUMPS</p>
                                <p className="card-text ">PKR  8, 500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="container"> 
                        <a href = "#" >
                            <img src={process.env.PUBLIC_URL + "Images/footwear/pumps/black.jpg"} alt="black"  />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">BLACK COLOR CASUAL PUMPS</p>
                                <p className="card-text ">PKR  2,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container">
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "Images/footwear/pumps/camel.jpg"} alt="ss"  style={{display:"inline-block"}} />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"> CAMEL COLOR CASUAL PUMPS</p>
                                <p className="card-text ">PKR  2,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="container"> 
                        <a href = "#" >
                            <img src={process.env.PUBLIC_URL + "Images/footwear/pumps/golden.jpg"} alt="black"  />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">GOLDEN COLOR CASUAL PUMPS</p>
                                <p className="card-text ">PKR  2,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container">
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "Images/footwear/pumps/grey.jpg"} alt="ss"  style={{display:"inline-block"}} />
                            <BrowserRouter>
                            <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                            <Switch>
                                <Route path="../cart" component={Cart} />
                            </Switch>
                        </BrowserRouter>
                        </a>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"> GREY COLOR FORMAL PUMPS</p>
                                <p className="card-text ">PKR  1,800</p>
                            </div>
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

export default Footwear;
