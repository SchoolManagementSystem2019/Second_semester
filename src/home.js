import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Footerpage from './footer';
import {BrowserRouter,Link, Switch, Route} from 'react-router-dom'
import Embroidedu from './Unstitched/embroided';
import Embroided from './Stitched/embroided';
import Partywear from './Prets/partywear';
import Handbags from './Accessories/handbags';

class Home extends Component{
    render(){
        return(
            <div>
                <Slider>
                    <img src={process.env.PUBLIC_URL + "Images/slider/slider1.jpg"} />
                    <img src={process.env.PUBLIC_URL + "Images/slider/slider2.jpg"} />
                    <img src={process.env.PUBLIC_URL + "Images/slider/slider3.jpg"} />
			    </Slider>
                <div className="container-fluid">
                <div className="container">
                    <BrowserRouter>
                        <div className="row">
                            <div className="col-lg">
                                <a href="#">
                                    <Link to="/Unstitched/embroided" >
                                        <img src={process.env.PUBLIC_URL + "Images/unstitched_wallpaper.jpg"} 
                                        alt="Unstitched" />
                                    </Link>
                                </a>
                            </div>
                            <div className="col-lg">
                                <a href="#">
                                    <Link to="/Stitched/embroided" >
                                    <img src={process.env.PUBLIC_URL + "Images/stitched_wallpaper.jpg"} 
                                    alt="Stitched" />
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </BrowserRouter>
                </div>
                <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <a href="#">
                                <Link to="/Prets/partywear">
                                    <img src={process.env.PUBLIC_URL + "Images/prets_wallpaper.jpg"} 
                                    alt="Prets" />
                                </Link>
                            </a>
                        </div>
                        <div className="col-lg">
                            <a href="#">
                                <Link to="/Accessories/handbags">
                                    <img src={process.env.PUBLIC_URL + "Images/accessories_wallpaper.jpg"} 
                                    alt="Accessories" />
                                </Link>
                            </a>
                            
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl">
                            <h1>Gallery</h1>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + "Images/collection/festive.jpg"} 
                                alt="Festive Collection" style={{width:"30%"}} />
                            </a>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + "Images/collection/catalyst.jpg"} 
                                alt="Winter Collection" style={{width:"30%"}} />
                            </a>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + "Images/collection/nomad.jpg"} 
                                alt="Spring summer Collection" style={{width:"30%"}} />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                <Footerpage />
                <Switch>
                    <Route path="/Unstitched/embroided" component={Embroidedu} />
                    <Route path="/Stitched/embroided" component={Embroided} />
                    <Route path="/Prets/partywear" component={Partywear} />
                    <Route path="/Accessories/handbags" component={Handbags} />
                </Switch>
            </div>
        );
    }
}
export default Home;