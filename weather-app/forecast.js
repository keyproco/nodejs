const axios = require('./axios.js');
require('dotenv').config(); 


async function forecast(lat, long) {
    try {
      const response = await axios.get(`http://api.weatherstack.com/current`, {
        params: {
          access_key: process.env.access_key,
          query: `${lat},${long}`
        }
      });
      
      return response.data
    } catch (error) {
      console.error('Error fetching forecast:', error.message);
    }
  }

module.exports = forecast