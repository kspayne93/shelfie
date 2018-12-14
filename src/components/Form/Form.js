import React, { Component } from 'react';


class Form extends Component {
   constructor() {
      super()

      this.state = {
         userInputURL: '',
         userInputProduct: '',
         userInputPrice: ''
      };

      this.handleURLChange = this.handleURLChange.bind(this);
      this.handleProductChange = this.handleProductChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
   }

   handleURLChange(event) {
      this.setState({
         userInputURL: event.target.value
      }, () => {
         console.log(this.state.userInputURL);
      })
   };
   handleProductChange(event) {
      this.setState({
         userInputProduct: event.target.value
      }, () => {
         console.log(this.state.userInputProduct)
      })
   };
   handlePriceChange(event) {
      this.setState({
         userInputPrice: event.target.value
      }, () => {
         console.log(this.state.userInputPrice)
      })
   };

   handleCancel(event) {
      this.setState({
         userInputURL: '',
         userInputProduct: '',
         userInputPrice: '',
      }, () => {
         console.log(this.state)
      })
      
   }

 
   
   render() {
 
     return (
       <div>
         <input 
         type="text" 
         id="image_input"
         value={this.state.userInputURL}
         onChange={(event) =>  this.handleURLChange(event)} />
         <input 
         type="text" 
         id="product_input"
         value={this.state.userInputProduct}
         onChange={(event) =>  this.handleProductChange(event)} />
         <input 
         type="text" 
         id="price_input"
         value={this.state.userInputPrice}
         onChange={(event) =>  this.handlePriceChange(event)} />

         <button onClick={(event) => this.handleCancel(event)}>Cancel</button>
         <button>Add to Inventory</button>
       </div>
     );
   }
 }
 
 export default Form;