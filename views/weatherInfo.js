const layout = require('./layout');

module.exports = ({hourlyData})=>{
    // render each hour of weather data
    const renderedData = hourlyData.map(
        weather =>{
            return `
            <tr>
                
                <td>${weather.summary}</td>
                <td>${weather.temperature}</td>
                <td>${weather.apparentTemperature}</td>
                <td>${weather.precipProbability*100}%</td>
                <td>${weather.humidity}</td>
                <td>${weather.windSpeed}mph</td>
            </tr>
            `;
        }).join("");

    return layout({
        content:`
        <table class="table">
            <thead>
                <tr>
                    
                    <th>Summary</th>
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
        
        `
    });
}