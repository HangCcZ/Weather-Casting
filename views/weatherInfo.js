const layout = require('./layout');
const hourConvert = require('./hourConvert');

module.exports = ({hourlyData,location})=>{
    // render each hour of weather data
    const renderedData = hourlyData.map(
        weather =>{
            return `
            <tr>
                <td>${hourConvert(weather.time)}</td>
                <td><img src="/icons/${weather.icon}.svg" height="30" width="40" /></td>
                <td>${weather.summary}</td>
                <td>${weather.temperature}</td>
                <td>${weather.apparentTemperature}</td>
                <td>${Math.round(weather.precipProbability*100)}%</td>
                <td>${Math.round(weather.humidity*100)}%</td>
                <td>${weather.windSpeed}mph</td>
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
        
        `,location
    });
}