// this is the main server file
const express = require('express');
const bodyPparser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
const connectionString='postgres://hffhzjqirxlkjp:9240f8948c56a1be581dbbbdba58990ccbd23c929fdae285c8de2527a47c7f47@ec2-23-21-122-141.compute-1.amazonaws.com:5432/do4d3mosjlo3v?ssl=true';

const app = express();
app.use(express.json()); //Middleware, turning request from JSON back into the function so it can be parsed. Axios prefers to send data as JSON, but it needs to be converted back before it reaches the endpoint.

const port = 4000;
app.listen(port, () => {
   console.log(`Server listening on port ${port}.`);
});


