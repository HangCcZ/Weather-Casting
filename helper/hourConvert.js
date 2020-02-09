// convert 24 hours format into AM and PM
module.exports = (unixTime)=>{
    const timeDate = new Date(unixTime*1000);
    const hour_24 = timeDate.getHours();
    const hour_12 = (hour_24 > 12) ? `${hour_24-12} PM` : `${hour_24} AM`; 
    return hour_12;
}