require('dotenv').config();

const express = require('express');
const port = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoute');
const adminRoutes= require('./routes/adminRoute')
const bcrypt = require('bcryptjs');

const app = express();


//Middle Ware
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/event',eventRoutes);
app.use('/',adminRoutes);






app.listen(port,()=>{
    console.log(`App is listening in port: ${port}`)
})

