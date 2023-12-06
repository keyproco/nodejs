const axios = require('./axios.js');
const express = require('express')
const app = express()
const path = require('path')
const PORT = 80
require('dotenv').config(); 
getForecast = require('./forecast.js')

async function getWeather(query) {

  try {
    const response = await axios.get('http://api.weatherstack.com/current', {
      params: {
        access_key: process.env.access_key,
        query
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error fetching weather:', error.message);
  }
}

getWeather('Loire, France');

async function ForecastAndDestructure() {
    try {
      const { current } = await getForecast(42, 42);
      console.log(`${current.temperature}°`);
    } catch (error) {
      console.error('Error fetching forecast:', error.message);
    }
  }

ForecastAndDestructure();

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, response) => {
    response.render('index', {
        title: 'Weather',
        page: 'Welcome Page'
    })
})

app.get('/weather', (req, response) => {
    response.render('weather', {
        title: 'Weather',
        page: 'Weather Page'
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})