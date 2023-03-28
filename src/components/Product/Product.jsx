import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings, id } = props.product

    return (
        <div className='product'>
            <div style={{padding:'10px'}}>
            <img src={img} alt="" />
            </div>
            <div style={{padding:'14px', marginBottom:'20px'}}>
            <h4 className='p-name'>{name}</h4>
            <p style={{marginTop:'5px'}}>Price: ${price}</p>
            <p style={{marginBottom:'0px'}}><small>Manufacturer: {seller}</small></p>
            <p style={{marginTop:'0px'}}><small>Ratting: {ratings} star</small></p>
            </div>
            <button onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;