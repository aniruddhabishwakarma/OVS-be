require('dotenv').config();

const express = require('express');
const port = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoute');

const app = express();


//Middle Ware
app.use(cors());
app.use('/',eventRoutes);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





app.listen(port,()=>{
    console.log(`App is listening in port: ${port}`)
})

