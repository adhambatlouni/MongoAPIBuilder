const request = require('request');
const apiKey = '31145e1f56bdc5d4f398ad23341169cc';

exports.weatherInfo = (req, res) => {
    res.render('weather', {
        weather: null,
        error: null
    });
}
   
exports.getWeather = (req, res) => {

    let city = "Beirut";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    request(url, function (err, response, body) {
        if (err) {
            res.render('weather', {
                weather: null,
                error: 'Error, please try again'
            });
        } 
        else {
            let weather = JSON.parse(body)

            let weatherText = `${weather.weather[0].description} in ${weather.name}. Feels like ${weather.main.temp} Kelvin.`;
            console.log(weatherText);
            res.render('weather', {weather: weatherText, error: null});
        }
    });
}