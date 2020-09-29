export const rf = require('routefusion-sdk').Instance({
  RF_CLIENT_ID: process.env.REACT_APP_RF_CLIENT_ID,
  RF_BASE_URL: process.env.REACT_APP_RF_BASE_URL,
  RF_SECRET: process.env.REACT_APP_RF_SECRET
});
