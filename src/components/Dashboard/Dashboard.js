import React, { Component } from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
   
 
   render() {
      let productsToDisplay = this.props.inventory.map(product => {
         return (
            <div>
               < Product 
               product_name={product.product_name}
               price={product.price}
               img_url={product.img_url}
                />
            </div>
         )
      })
 
     return (
       <div>
         Dashboard
         {productsToDisplay}
       </div>
     );
   }
 }
 
 export default Dashboard;