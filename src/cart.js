import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Cart extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>Shopping Cart</h1>
                <hr />
                <img src={process.env.PUBLIC_URL + "Images/eg.jpg"} />
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
export default Cart;