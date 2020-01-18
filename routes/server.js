const DARKSKY_API_KEY  = process.env.DARKSKY_API_KEY;

const layout = require('../views/layout')
const weatherInfo = require('../views/weatherInfo')

const express = require('express');
const axios = require('axios');


const router = express.Router()


// need to add body-parser
router.post('/weather',async (req,res) =>{
    
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?
        units=auto`;
    let response;
    try{
        response = await axios.get(url);
    }catch(err){
        console.log(`Something is wrong in respond: ${err}`);
    }
    const hourlyData = response.data.hourly.data;
    res.send(layout({content:"123"}));
    
});

router.get('/',(req,res)=>{
    res.send(layout({content:""}));
})

router.post('/',async (req,res)=>{
    let geoLocation = req.body.location.split("/");
    let latitude = geoLocation[0];
    let longitude = geoLocation[1];
    let location = geoLocation[2];

    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}?
        units=auto`;
    let response;
    try{
        response = await axios.get(url);
    }catch(err){
        console.log(`Something is wrong in respond: ${err}`);
    }
    const hourlyData = response.data.hourly.data;

    res.send(weatherInfo({hourlyData,location}));
})




module.exports = router;