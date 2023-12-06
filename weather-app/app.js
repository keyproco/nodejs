const axios = require('./axios.js');
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



