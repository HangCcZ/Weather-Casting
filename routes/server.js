const DARKSKY_API_KEY  = process.env.DARKSKY_API_KEY;

const layout = require('../views/layout')
const weatherInfo = require('../views/weatherInfo')

const express = require('express');
const axios = require('axios');

const router = express.Router()



router.get('/',(req,res)=>{
    res.send(layout({content:""}));
})

router.post('/24hours',async (req,res)=>{
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
    console.log(hourlyData);
    res.send(weatherInfo({hourlyData,location}));
})




module.exports = router;