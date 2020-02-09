const DARKSKY_API_KEY  = process.env.DARKSKY_API_KEY;

module.exports = (latitude,longitude)=>{
    return `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}?units=auto`;
}