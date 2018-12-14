module.exports = {
   readProduct: (req, res) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory().then(response => {
         res.status(200).send(response);
      });   
   },
   addProduct: (req, res) => {
      const dbInstance = req.app.get('db');
      const { product_name, price, img_url } = req.body;

      dbInstance.add_product([ product_name, price, img_url ])
      .then( () => res.send('working!') )
      .catch( err => {
         res.status(500).send({errorMessage: "Oops! Something went wrong."});
         console.log(err)
      });

   
   }


};   
