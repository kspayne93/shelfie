import React, { Component } from 'react';
import App from '../../App';
import './Product.css'


const Product = (props) => {
   return(
      <div className='product_img'>
         <div>
            <img src={props.img_url} alt="" className="product_img"/>
         </div>
         <div className="product_box">
            {props.product_name}
            {props.price}
         </div>
      </div>
   )
};   



export default Product;