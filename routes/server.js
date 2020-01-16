const DARKSKY_API_KEY  = process.env.DARKSKY_API_KEY;
const express = require('express');
const router = express.Router()
const axios = require('axios');
const layout = require('../views/layout')
const weatherInfo = require('../views/weatherInfo')

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
    res.send(layout({content:"test"}));
})

router.post('/',(req,res)=>{
    res.send("Good");
})




module.exports = router;