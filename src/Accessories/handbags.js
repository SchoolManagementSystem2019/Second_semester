import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';

class Handbags extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="container">
                    <h1 style={{textAlign:"center"}}>Handbags</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container">
                                <a href="#" > 
                                    <img id="abc"  src={process.env.PUBLIC_URL + "Images/handbags/black.jpg"} alt="red"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Ava Small Leather Satchel- Navy</p>
                                        <p className="card-text">PKR  10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="container"> 
                                <a href = "#" >
                                    <img src={process.env.PUBLIC_URL + "Images/handbags/brownish.jpg"} alt="black"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">unie Chevron Medium Tote-Acorn/Butternut</p>
                                        <p className="card-text ">PKR  4,500</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="container">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/handbags/cocobrown.jpg"} alt="ss"  style={{display:"inline-block"}} />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> Gloria Crossbody Bag- Mushroom</p>
                                        <p className="card-text ">PKR  8, 500</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                       <div className="row">
                            <div className="col-sm">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/handbags/cococream.jpg"} alt="ss"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Large Sloan Editor Leather Shoulder Bag in Truffle</p>
                                        <p className="card-text ">PKR  8, 500</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm">
                                <a href="#" >
                                    <img src={process.env.PUBLIC_URL + "Images/handbags/grayshade.jpg"} alt="ss"  />
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
                                        <p className="card-text ">PKR  4,500</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm">
                                <a href="#" >
                                    <img src={process.env.PUBLIC_URL + "Images/handbags/pearlgrey.jpg"} alt="ss"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> Junie Medium Pebbled Leather Backpack- Pearl Grey </p>
                                        <p className="card-text ">PKR  7,750</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="container">
                                <a href="#" > 
                                    <img id="abc"  src={process.env.PUBLIC_URL + "Images/handbags/red.jpg"} alt="red"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Cece Medium Red Shoulder Bag</p>
                                        <p className="card-text ">PKR  10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="container"> 
                                <a href = "#" >
                                    <img src={process.env.PUBLIC_URL + "Images/handbags/skyblue.jpg"} alt="black"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Ava Extra-Small Leather Crossbody Bag</p>
                                        <p className="card-text ">PKR  4,500</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="container">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/handbags/teapink.jpg"} alt="ss"  style={{display:"inline-block"}} />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> Ana Pebbled Leather Tote - Fawn</p>
                                        <p className="card-text ">PKR  8, 500</p>
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
        )
    }
}
export default Handbags;