import React from 'react';
import{Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';

const CartTotal = ({value,history}) => {
	const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
  return (
    <div className="container">
    <div className="row">
    <div className="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
    <Link to="/"><button className="btn btn-outline-danger text-capitalize mb-3 px-5" type="button" onClick={()=>clearCart()}>clear cart</button></Link>
    <h5><span className="text-title">subtotal : <strong>$ {cartSubtotal}</strong></span></h5>
    <h5><span className="text-title">tax : <strong>$ {cartTax}</strong></span></h5>
    <h5><span className="text-title">total : <strong>$ {cartTotal}</strong></span></h5>
    <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
    </div>
    </div>
    </div>
  )
}

export default CartTotal;