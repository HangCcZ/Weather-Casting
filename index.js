
if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}

const server = require('./routes/server')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',server);
app.listen(process.env.PORT || 2000);
