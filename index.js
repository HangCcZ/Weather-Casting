
if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}

const server = require('./routes/server')
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(server);
app.listen(2000, ()=>{
    console.log('Server Started');
})