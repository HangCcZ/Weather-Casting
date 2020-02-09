const layout = require('./layout');
const dayConvert = require('../helper/dayConvert.js');

module.exports = ({dailyData ,geoLocation})=>{
    // render each hour of weather data
    const renderedData = dailyData.map(
        weather =>{
            return `
            <tr>
                <td>${dayConvert(weather.time)}</td>
                <td><img src="/icons/${weather.icon}.svg" height="30" width="40" /></td>
                <td>${weather.summary}</td>
                <td>${Math.round(weather.temperatureHigh)}/${Math.round(weather.temperatureLow)}&#8457;</td>
                <td>${Math.round(weather.apparentTemperatureHigh)}/${Math.round(weather.apparentTemperatureLow)}&#8457;</td>
                <td>${Math.round(weather.precipProbability*100)}%</td>
                <td>${Math.round(weather.humidity*100)}%</td>
                <td>${(weather.windSpeed).toFixed(1)}mph</td>
            </tr>
            `;
            
        }).join("");

    return layout({
        content:`
        <table class="table is-fullwidth is-hoverable">
            <thead>
                <tr>
                    <th>Time</th>
                    <th></th>
                    <th>Description</th>
                    <th>Temperature</th>
                    <th>Feeling</th>
                    <th>Precip</th>
                    <th>Humidity</th>
                    <th>Wind</th>
                </tr>
            </head>
            <tbody>
                ${renderedData}
            </tbody>
        </table>
        
        `,geoLocation
    });
}