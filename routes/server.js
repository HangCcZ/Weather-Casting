const DARKSKY_API_KEY  = process.env.DARKSKY_API_KEY;
const express = require('express');
const router = express.Router()
const axios = require('axios');
const layout = require('../views/layout')


router.post('/weather',async (req,res) =>{
    //console.log(req.body);
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?
        units=auto`;
    try{
        const response = await axios.get(url);
        const hourlyData = response.data.hourly.data;
        console.log(hourlyData[1]);
        res.send("success")
        
    }catch(err){
        console.log(`Something is wrong in respond: ${err}`);
    }
    
});

router.get('/',(req,res)=>{
    res.send(layout({content:""}));
})


module.exports = router;