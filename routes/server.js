const DARKSKY_API_KEY  = process.env.DARKSKY_API_KEY;

const layout = require('../views/layout')
const weatherInfo = require('../views/weatherInfo')
const info7Days = require('../views/info7Days')
const getUrl = require('../helper/urlConstruct');
const express = require('express');
const axios = require('axios');

const router = express.Router()



router.get('/',(req,res)=>{
    res.send(layout({content:"",geoLocation:[]}));
})

router.post('/24hours',async (req,res)=>{
    let geoLocation = req.body.location.split("/");
    let latitude = geoLocation[0];
    let longitude = geoLocation[1];

    let response;
    try{
        response = await axios.get(getUrl(latitude,longitude));
    }catch(err){
        console.log(`Something is wrong in respond: ${err}`);
    }
    
    const hourlyData = response.data.hourly.data;
    res.send(weatherInfo({hourlyData,geoLocation}));
})

router.post('/7days',async(req,res)=>{
    let geoLocation = req.body.location.split("/");
    let latitude = geoLocation[0];
    let longitude = geoLocation[1];

    let response;
    try{
        response = await axios.get(getUrl(latitude,longitude));
    }catch(err){
        console.log(`Something is wrong in respond: ${err}`);
    }
    const dailyData = response.data.daily.data;
    console.log(dailyData);
    res.send(info7Days({dailyData ,geoLocation}));
})




module.exports = router;