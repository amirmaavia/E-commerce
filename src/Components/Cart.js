import React,{useContext} from 'react'
import {CartContext} from '../Global/CartContext'
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
const {Shoppingcart, Totalprice, qty, dispatch} = useContext(CartContext)

const handletoken = (token) => {

}
    
    return (
        <div className="cart-container">
            <div className="cart-detail"style={{margin: "100px"}}>
{Shoppingcart.length > 0 ? 
Shoppingcart.map(cart => (
    <div className="cart" key={cart.id}>
        <span className="cart-image">
            <img src={cart.image} alt="Not Found" />
        </span>
        <span className="cart-product-name">
            {cart.name}
            </span> 
            <span className="cart-product-price">
            PKR{cart.price}.00
            </span> 
            <span className="inc" onClick={() => dispatch({type: "INC", id: cart.id, cart })}><i className="fas fa-plus"></i></span>
<span className="cart-quantity">{cart.qty}</span>
<span className="dec" onClick={() => dispatch({type: "DEC", id: cart.id, cart })}><i className="fas fa-minus"></i></span>
<span className="Total-price">PKR{cart.price * cart.qty}.00</span>
<span className="Delete-button"  onClick={() => dispatch({type: "DELETE", id: cart.id, cart })} ><i className="fas fa-trash-alt"></i></span>
        </div>
))
: "Sorry Your Cart is Empty"}
            </div>
            {Shoppingcart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                <h3>Cart Summary</h3>
                </div>
                <div className="total-items">
                    <div className="items">
                        Total Items
                    </div>
<div className="item-count">{qty}</div>
                </div>
                <div className="total-price-sec">
                    <div className="title">Total Price</div>
<div className="item-price">PKR{Totalprice}.00</div>
                </div>
                <div className="stripe-section">
                    <StripeCheckout stripeKey="pk_test_51HUnbiBW9itlon3t2CoZZx7nPk4k5Dtx8YGiE9rCY664b0NK0jBfh95Jy7ckGzpwycYtI0JoLKNQJLIMezTYu79Y00xZeSZZCN"
      token={handletoken}
        billingAddress
          shippingAddress
           amount={Totalprice * 100}
         name="All products">
                    </StripeCheckout>
                </div>
            </div>
            : ""}
            
        </div>
        
    )
}

export default Cart 
