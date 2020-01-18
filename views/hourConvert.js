// convert 24 hours format into AM and PM
module.exports = (hour_24)=>{
    const hour_12 = (hour_24 > 12) ? `${hour_24-12} PM` : `${hour_24} AM`; 
    return hour_12;
}