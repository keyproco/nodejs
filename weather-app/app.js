const axios = require('./axios.js');
const express = require('express')
const app = express()
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



app.get('/', (req, response) => {
    response.send('Hello')
})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})