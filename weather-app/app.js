const axios = require('./axios.js');
require('dotenv').config(); 

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