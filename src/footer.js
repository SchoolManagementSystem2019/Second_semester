import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
class FooterPage extends Component {
  render() {
    return (
        <div className="container-fluid footercontainer">
            <div className="container">
                <div className="row">
                <div className="col-xl footer">
                    <p>BE THE FIRST TO KNOW</p>
                </div>
                </div>
        <div className="row sec">
          <div className="col-md-6">
            <h5>Find out about our special offer and exclusive news.</h5>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="enter your email" style={{marginRight:"2%"}}></input>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h4>Help</h4>
            <p><a href="https://www.alkaramstudio.com//return-exchange">Returns and exchange</a></p>
            <p><a href="https://www.alkaramstudio.com//contacts">Contact Us</a></p>
          </div>
          <div className="col-sm-3">
            <h4>Ways to Shop</h4>
          <p><a href="https://www.alkaramstudio.com/storelocator">
              Store Locators
            </a></p>  
            <p>
              <a href="https://www.alkaramstudio.com/faqs">FAQs</a>
            </p>
            <p>
              <a href="https://www.alkaramstudio.com/about-us">About Us</a>
            </p>
            <p>
              <a href="https://www.alkaramstudio.com/payment">Payments</a>
            </p>
            <p>Track Order</p>
            <p>
              <a href="http://localhost:3000/">
                Ambassador Form
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <h4>Customer Care</h4>
            <p>090078601</p>
            <p>030078601</p>
            <p>care@gmail.com</p>
          </div>
          <div className="col-md-3">
            <h4>My Account</h4>
            <p><a href="https://www.alkaramstudio.com/customer/account/login/">Account info</a></p>
            <p><a href="https://www.alkaramstudio.com/customer/account/login/">Address</a></p>
            <p><a href="https://www.alkaramstudio.com/customer/account/login/">Order History</a></p>
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/" target="_blank">
              <img className="socialicons img-responsive" src={process.env.PUBLIC_URL + "Images/footer/fb.png"} alt="Facebook" title="Facebook" />
            </a>
            <a href="https://twitter.com/login" target="_blank">
              <img className="socialicons img-responsive" src={process.env.PUBLIC_URL + "Images/footer/twet.png"} alt="Twitter" title="Twitter"/>
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
              <img className="socialicons img-responsive" src={process.env.PUBLIC_URL + "Images/footer/inst.jpg"} alt="Instagram" title="Instagram" />
            </a>
          </div>
         
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <p><a href="https://www.alkaramstudio.com/terms-conditions">Terms and conditions.</a></p>
          </div>
          <div className="col-sm-4">
            <p><a href="https://www.alkaramstudio.com/privacy-policy">Privacy policy</a> </p>
          </div>
          <div className="col-sm-4">
            <p>Copyright2019 FASNR Studio </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default FooterPage;