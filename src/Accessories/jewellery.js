import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Cart from '../cart';
import '.././content.css'

class Jewellery extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="container">
                    <h1 style={{textAlign:"center"}}>Jewellery</h1>
                    <hr />
                    <h3>Necklace</h3>
                        <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container">
                                <a href="#" > 
                                    <img id="abc"  src={process.env.PUBLIC_URL + "Images/accessories/necklace/crescent.jpg"} alt="red"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Silver Star crescent Necklace</p>
                                        <p className="card-text">PKR  4,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="container"> 
                                <a href = "#" >
                                    <img src={process.env.PUBLIC_URL + "Images/accessories/necklace/golden.jpg"} alt="black"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Star And Tassle Earring</p>
                                        <p className="card-text ">PKR  3,500</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                       <div className="row">
                            <div className="col-md-6">
                                <div className="container">
                                    <a href="#">
                                        <img src={process.env.PUBLIC_URL + "Images/accessories/necklace/heart.jpg"} alt="ss"  style={{display:"inline-block"}} />
                                        <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                    </a>
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text"> Silver Delicate Heart Necklace</p>
                                            <p className="card-text ">PKR  8, 500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/accessories/necklace/silver.jpg"} alt="ss"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> Silver Crescent and Tassle Necklace </p>
                                        <p className="card-text ">PKR  8, 500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <a href="#" >
                                <img src={process.env.PUBLIC_URL + "Images/accessories/necklace/stone.jpg"} alt="ss"  />
                                <BrowserRouter>
                                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                    <Switch>
                                        <Route path="../cart" component={Cart} />
                                    </Switch>
                                </BrowserRouter>
                            </a>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">Silver Chain Stone Necklace</p>
                                    <p className="card-text ">PKR  7,750</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <a href="#" >
                                <img src={process.env.PUBLIC_URL + "Images/accessories/necklace/star.jpg"} alt="ss"  />
                                <BrowserRouter>
                                    <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                    <Switch>
                                        <Route path="../cart" component={Cart} />
                                    </Switch>
                                </BrowserRouter>
                            </a>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">Silver Chain Star Necklace</p>
                                    <p className="card-text ">PKR  4,500</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 style={{padding:"2%"}}>Earrings</h3>
                    <hr />

                    <div className="row">
                        <div className="col-lg">
                            <div className="container">
                                <a href="#" > 
                                    <img id="abc"  src={process.env.PUBLIC_URL + "Images/accessories/earrings/crescent.jpg"} alt="red"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Golden Crescent Earrings</p>
                                        <p className="card-text ">PKR  10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <div className="container"> 
                                <a href = "#" >
                                    <img src={process.env.PUBLIC_URL + "Images/accessories/earrings/doublehoop.jpg"} alt="black"  />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Silver Star Double Hoop Earrings</p>p>
                                        <p className="card-text ">PKR  4,500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg">
                            <div className="container">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/accessories/earrings/drops.jpg"} alt="ss"  style={{display:"inline-block"}} />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> Fawn Stone Drop Earrings</p>
                                        <p className="card-text ">PKR  8, 500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="container">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/accessories/earrings/geometrichoop.jpg"} alt="ss"  style={{display:"inline-block"}} />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> White Geometric Hoop Earrings</p>
                                        <p className="card-text ">PKR  8, 500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg">
                            <div className="container">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/accessories/earrings/star.jpg"} alt="ss"  style={{display:"inline-block"}} />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> Silver Chain Star Tassle Earrings</p>
                                        <p className="card-text ">PKR  8, 500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="container">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + "Images/accessories/earrings/stone.jpg"} alt="ss"  style={{display:"inline-block"}} />
                                    <BrowserRouter>
                                        <button> <Link to="../cart" target="_blank"> Add to Cart<i className="fas fa-shopping-cart"></i> </Link> </button>
                                        <Switch>
                                            <Route path="../cart" component={Cart} />
                                        </Switch>
                                    </BrowserRouter>
                                </a>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text"> White Stone Earrings</p>
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
export default Jewellery;