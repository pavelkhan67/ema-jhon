import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    console.log(cart);
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;

    }

    const tax = total * 7 / 100; 

    const grandTotal = total + shipping + tax ;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;